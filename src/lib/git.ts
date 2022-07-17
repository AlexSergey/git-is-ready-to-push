import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
};

export const git: SimpleGit = simpleGit(options);
