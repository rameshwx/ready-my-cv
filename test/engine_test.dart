import 'package:flutter_test/flutter_test.dart';
import 'package:ready_my_cv/domain/engine.dart';
import 'package:ready_my_cv/domain/models.dart';

void main() {
  test('experience evidence beats a skills-list mention', () {
    const role = JobRole(
      slug: 'flutter',
      title: 'Flutter Developer',
      requirements: [
        Requirement(id: 'flutter-1', term: 'Flutter', aliases: [], weight: 3),
      ],
    );
    const engine = ReadinessEngine();
    final strong = engine.analyze(
      'Experience\nBuilt Flutter applications used by 500 users.\nEducation\nDegree',
      role,
      '1',
    );
    final mention = engine.analyze(
      'Skills\nFlutter\nEducation\nDegree',
      role,
      '1',
    );
    expect(
      strong.evidence.single.classification,
      EvidenceClassification.strong,
    );
    expect(
      mention.evidence.single.classification,
      EvidenceClassification.mentionOnly,
    );
    expect(strong.score.total, greaterThan(mention.score.total));
  });
  test('same input is deterministic', () {
    const role = JobRole(
      slug: 'x',
      title: 'X',
      requirements: [
        Requirement(id: '1', term: 'Dart', aliases: [], weight: 3),
      ],
    );
    const engine = ReadinessEngine();
    final a = engine.analyze('Projects\nDeveloped Dart app', role, '1');
    final b = engine.analyze('Projects\nDeveloped Dart app', role, '1');
    expect(a.score.total, b.score.total);
    expect(a.evidence.single.classification, b.evidence.single.classification);
  });
}
