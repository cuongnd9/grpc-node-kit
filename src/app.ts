import * as grpc from '@grpc/grpc-js';
import { logger } from 'juno-js';

import { config } from './components';

const createApp = () => {
  const { port } = config;
  const server = new grpc.Server();

  server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
  server.start();
  logger.info(`🚀 Server ready at http://127.0.0.1:${port}`);
};

export { createApp };
