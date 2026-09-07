import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:scoring_engine/scoring_engine.dart';

void main() {
  test('weighted scoring is deterministic and bounded', () {
    const role = JobRole(
      slug: 'flutter',
      title: 'Flutter Developer',
      description: 'Fixture',
      requirements: [
        RoleRequirement(
          id: 'flutter-1',
          term: 'Flutter',
          required: true,
          weight: 3,
          category: RuleCategory.roleSkills,
        ),
      ],
    );
    const evidence = [
      Evidence(
        id: 'flutter-1:1',
        requirementId: 'flutter-1',
        canonicalTerm: 'Flutter',
        matchedTerm: 'Flutter',
        classification: EvidenceClassification.strong,
        explanation: 'Used in experience with an action',
        section: 'experience',
        page: 1,
        start: 0,
        end: 7,
        matchingTool: 'fixture',
      ),
    ];
    const engine = DeterministicScoringEngine();
    final first = engine.score(
      role: role,
      evidence: evidence,
      text: 'Experience Built Flutter applications with 20 users.',
      detectedSections: {'experience'},
    );
    final second = engine.score(
      role: role,
      evidence: evidence,
      text: 'Experience Built Flutter applications with 20 users.',
      detectedSections: {'experience'},
    );
    expect(first.total, second.total);
    expect(first.total, inInclusiveRange(0, 100));
    expect(first.roleSkills, 35);
  });

  test('scoring rejects duplicate requirement credit', () {
    const role = JobRole(
      slug: 'flutter',
      title: 'Flutter Developer',
      description: 'Fixture',
      requirements: [
        RoleRequirement(
          id: 'flutter-1',
          term: 'Flutter',
          required: true,
          weight: 1,
          category: RuleCategory.roleSkills,
        ),
      ],
    );
    const evidence = Evidence(
      id: 'flutter-1:1',
      requirementId: 'flutter-1',
      canonicalTerm: 'Flutter',
      matchedTerm: 'Flutter',
      classification: EvidenceClassification.strong,
      explanation: 'Fixture',
      section: 'experience',
      page: 1,
      start: 0,
      end: 7,
      matchingTool: 'fixture',
    );

    expect(
      () => const DeterministicScoringEngine().score(
        role: role,
        evidence: [evidence, evidence],
        text: 'Flutter',
        detectedSections: {'experience'},
      ),
      throwsStateError,
    );
  });
}
