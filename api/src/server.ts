import { buildApp } from './app.js';
import { config } from './config.js';
import { AnalysisWorker } from './modules/analysis/worker.js';

const worker = new AnalysisWorker();
const app = await buildApp({ analysisWorker: worker });
await worker.start();
await app.listen({ host: '0.0.0.0', port: config.PORT });

const shutdown = async () => {
  await app.close();
  process.exit(0);
};
process.once('SIGTERM', () => void shutdown());
process.once('SIGINT', () => void shutdown());
