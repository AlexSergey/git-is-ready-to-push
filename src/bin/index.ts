#!/usr/bin/env node
import chalk from 'chalk';

import { log } from '../lib/logger';
import { getStatus } from '../lib/status';

(async (): Promise<void> => {
  try {
    const isClean = await getStatus();

    if (!isClean) {
      log(`${chalk.red('GIT is not ready to push!')}`);
      log(`${chalk.green('GIT')}: You have unstaged files in your github repo.`);
      log('Please, do:');
      log(`        - ${chalk.blue('git add <files>')}`);
      log(`        - ${chalk.blue('git commit <message>')}`);
      log('Or, you can use the command to add your unstaged files to the last commit:');
      log(`        - ${chalk.blue('git commit --amend --no-edit --allow-empty')}`);
      process.exit(1);
    }
  } catch (e) {
    log(e);
    process.exit(1);
  }
  process.exit();
})();
