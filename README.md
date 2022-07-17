# GIT is ready to push!

## Motivation

This is simple script to check your branch and show message if you have unstaged files.

For example, you are using GIT pre-push hook, and you use [sort-package-json](https://www.npmjs.com/package/sort-package-json). After GIT pre-push hook run:

```shell
npx sort-package-json
```
package.json file will be updated, and it will unstaged in your GIT history:

```text
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   package.json
```

You won't push this changes before add it to the GIT stage.

If you add this script to your GIT pre-push hook:

```shell
npx sort-package-json && npx git-is-ready-to-push
```

Your push operation will be aborted, and you can add unstaged file to the commit.

## Getting Started:

1. Installation:
```shell
npm i -D git-is-ready-to-push
```

2. Add to GIT pre-push hook:

```shell
npx sort-package-json && npx git-is-ready-to-push
```

## The MIT License

Copyright (c) Aleksandrov Sergey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the “Software”), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
