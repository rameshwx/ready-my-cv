FROM ghcr.io/cirruslabs/flutter:3.32.0 AS flutter-build
WORKDIR /src
COPY pubspec.yaml pubspec.lock analysis_options.yaml ./
RUN flutter pub get
COPY lib lib
COPY web web
COPY assets assets
RUN flutter build web --release --base-href=/ --no-source-maps

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
COPY --from=flutter-build --chown=node:node /src/build/web public
USER node
EXPOSE 8080
CMD ["node","dist/server.js"]
