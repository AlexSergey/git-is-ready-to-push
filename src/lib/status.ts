import { GitError } from 'simple-git';

import { git } from './git';

export const getStatus = async (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    git.status((err, { isClean }) => {
      if (err instanceof GitError) {
        return reject(err);
      }

      return resolve(isClean());
    });
  });
};
