import { logger } from 'juno-js';

import { createApp } from './app';

const main = () => {
  try {
    createApp();
  } catch (error) {
    logger.error('Global error 🐛');
  }
};

main();
