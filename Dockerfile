FROM ghcr.io/cirruslabs/flutter:3.32.2 AS flutter-build
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
RUN mkdir -p /out && dart compile exe packages/server_analysis_runner/bin/server_analysis_runner.dart -o /out/server_analysis_runner
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
RUN apt-get update \
  && apt-get install -y --no-install-recommends poppler-utils tesseract-ocr tesseract-ocr-eng \
  && rm -rf /var/lib/apt/lists/*
COPY --from=node-build --chown=node:node /src/api/package.json /src/api/package-lock.json ./
COPY --from=node-build --chown=node:node /src/api/node_modules node_modules
COPY --from=node-build --chown=node:node /src/api/dist dist
COPY --chown=node:node api/migrations migrations
COPY --from=flutter-build --chown=node:node /src/apps/web/build/web public
COPY --from=flutter-build --chown=node:node /out/server_analysis_runner bin/server_analysis_runner
RUN mkdir -p /tmp/ready-my-cv && chown node:node /tmp/ready-my-cv \
  && pdfinfo -v >/dev/null 2>&1 \
  && tesseract --version >/dev/null 2>&1
USER node
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 CMD node -e "fetch('http://127.0.0.1:8080/health/live').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "dist/server.js"]
