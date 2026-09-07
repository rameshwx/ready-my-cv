import 'package:agent_engine/agent_engine.dart';
import 'package:catalog_models/catalog_models.dart';
import 'package:test/test.dart';

void main() {
  test('cancellation token prevents the next workflow stage', () async {
    final token = CancellationToken()..cancel();
    final catalog = CatalogSnapshot(
      version: 'test',
      engineVersion: 'test',
      publishedAt: DateTime.utc(2026),
      roles: const [],
      recommendations: const [],
    );
    final context = WorkflowContext(
      catalog: catalog,
      role: const JobRole(
        slug: 'test',
        title: 'Test',
        description: '',
        active: true,
        requirements: [],
      ),
      engineVersion: 'test',
      cancellationToken: token,
    );

    expect(
      () => const RequirementAnalysisAgent().execute(catalog, context),
      throwsA(isA<WorkflowCancelledException>()),
    );
  });
}
