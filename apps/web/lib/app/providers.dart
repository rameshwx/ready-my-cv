import 'package:agent_engine/agent_engine.dart';
import 'package:catalog_models/catalog_models.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:scoring_engine/scoring_engine.dart';
import 'package:pdf_parser_contract/pdf_parser_contract.dart';

import '../core/data/local_pdf_parser.dart';
import '../core/data/repositories.dart';
import '../core/domain/repositories.dart';
import '../core/network/app_http_client.dart';

part 'providers.g.dart';

@riverpod
AppHttpClient appHttpClient(Ref ref) => AppHttpClient();

@riverpod
CatalogRepository catalogRepository(Ref ref) =>
    HttpCatalogRepository(ref.watch(appHttpClientProvider));

@riverpod
RoleRequestRepository roleRequestRepository(Ref ref) =>
    HttpRoleRequestRepository(ref.watch(appHttpClientProvider));

@riverpod
AdminSessionRepository adminSessionRepository(Ref ref) =>
    HttpAdminSessionRepository(ref.watch(appHttpClientProvider));

@riverpod
AdminRepository adminRepository(Ref ref) =>
    HttpAdminRepository(ref.watch(appHttpClientProvider));

@riverpod
LocalPdfParser localPdfParser(Ref ref) => LocalPdfParserImpl();

@riverpod
WorkflowOrchestrator workflowOrchestrator(Ref ref) => WorkflowOrchestrator(
  parser: ref.watch(localPdfParserProvider),
  scoring: const DeterministicScoringEngine(),
);

@riverpod
ScanWorkflow scanWorkflow(Ref ref) =>
    LocalWorkflow(ref.watch(workflowOrchestratorProvider));

@riverpod
Future<CatalogSnapshot> publishedCatalog(Ref ref) =>
    ref.watch(catalogRepositoryProvider).fetchPublished();
