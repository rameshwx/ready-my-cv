FROM ghcr.io/cirruslabs/flutter:3.32.0 AS flutter-build
WORKDIR /src
COPY pubspec.yaml .
COPY apps/web/pubspec.yaml apps/web/pubspec.yaml
COPY apps/web/analysis_options.yaml apps/web/analysis_options.yaml
COPY packages packages
COPY analysis_options.yaml analysis_options.yaml
RUN dart pub get
RUN cd packages/core_models && dart run build_runner build --delete-conflicting-outputs
RUN cd packages/catalog_models && dart run build_runner build --delete-conflicting-outputs
RUN cd packages/pdf_parser_contract && dart run build_runner build --delete-conflicting-outputs
COPY apps/web/lib apps/web/lib
COPY apps/web/web apps/web/web
COPY apps/web/assets apps/web/assets
RUN cd apps/web && dart run build_runner build --delete-conflicting-outputs
RUN cd apps/web && flutter build web --release --base-href=/ --no-source-maps

FROM node:22.16.0-bookworm-slim AS node-build
WORKDIR /src/api
COPY api/package.json api/package-lock.json ./
RUN npm ci
COPY api/tsconfig.json ./
COPY api/src src
RUN npm run build && npm prune --omit=dev

FROM node:22.16.0-bookworm-slim AS runtime
ENV NODE_ENV=production PORT=8080
WORKDIR /app
COPY --from=node-build --chown=node:node /src/api/package.json /src/api/package-lock.json ./
COPY --from=node-build --chown=node:node /src/api/node_modules node_modules
COPY --from=node-build --chown=node:node /src/api/dist dist
COPY --chown=node:node api/migrations migrations
COPY --from=flutter-build --chown=node:node /src/apps/web/build/web public
USER node
EXPOSE 8080
CMD ["node", "dist/server.js"]
