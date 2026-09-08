import 'package:catalog_models/catalog_models.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../core/data/repositories.dart';
import '../core/domain/repositories.dart';
import '../core/network/app_http_client.dart';

part 'providers.g.dart';

@Riverpod(keepAlive: true)
AppHttpClient appHttpClient(Ref ref) {
  final client = AppHttpClient();
  ref.onDispose(client.close);
  return client;
}

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
AnalysisJobRepository analysisJobRepository(Ref ref) =>
    HttpAnalysisJobRepository(ref.watch(appHttpClientProvider));

@riverpod
Future<CatalogSnapshot> publishedCatalog(Ref ref) =>
    ref.watch(catalogRepositoryProvider).fetchPublished();
