import Redis from 'ioredis';
import logger from '../../core/logger';
import config from '../../core/config';

export const queueRedisConfig = new Redis({
  port: config.emailService.queue.redisPort,
  host: config.emailService.queue.redisHost,
  password: 'Wld34BlZenopg1mQdYRPymNvfCFLjW6I',
  username: 'default',
  maxRetriesPerRequest: null,
});

queueRedisConfig.connect(() => {
  logger.info('Connected to queue redis.');
});
