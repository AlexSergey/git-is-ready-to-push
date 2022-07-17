#!/usr/bin/env node
import chalk from 'chalk';

import { log } from '../lib/logger';
import { getStatus } from '../lib/status';

(async (): Promise<void> => {
  try {
    const isClean = await getStatus();

    if (!isClean) {
      log(`${chalk.red('GIT is not ready to push!')}`);
      log(`${chalk.green('GIT')}: You have untracked files in your github repo.`);
      log('Please, do:');
      log(`        - ${chalk.blue('git add <files>')}`);
      log(`        - ${chalk.blue('git commit <message>')}`);
      process.exit(1);
    }
  } catch (e) {
    log(e);
    process.exit(1);
  }
  process.exit();
})();
