# node-command-line-starter
Progammers are lazy. As soon as we have to do the same task over and over again we start on automizing it.
Automization is often done in the form of a command line utility.

[![node-command-line-starter image](https://i.ibb.co/VjzD8bF/nodecommandlinestarter-project-setup-5c7a49.jpg)](https://imgbb.com/)

This starter provides you with all the necessary setup to quickly create your node-command-line utility. Focus on your util and don't loose time with
the project setup.

The starter provides you with a setup to perform fully automated releases with Github Actions. Publish new versions quickly and automated to your npm repositiory.

## What's included?

### Language
This starter allows you to write your command line util in TypeScript. 💪 

### Testing
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- Jest configurations to mock third party libaries
- Sample tests

### Command line utils
- [Commander](https://github.com/tj/commander.js) - Complete solution for node.js command-line interfaces.
- [Chalk](https://github.com/chalk/chalk) - Terminal string styling
- [Boxen](https://github.com/sindresorhus/boxen#readme) - Create boxes in terminal

### Dev utilities
- [Prettier](https://prettier.io/) - Code formater
- [Commitizen](https://github.com/commitizen/cz-cli) Util that helps to create conventional commit messages
- [Commitlint](https://github.com/conventional-changelog/commitlint) Lint your commit messages to ensure you use conventional commits
- [Husky](https://github.com/typicode/husky) and [Lint-staged](https://github.com/okonet/lint-staged) to run prettier on each commit on staged files. Husky is also used to run commitlint on a commit.

### Build tools
- [Codecov](https://codecov.io/) - Integration to upload your coverage report to codecov
- [Release Please](https://github.com/googleapis/release-please) - All the setup to use Release Please. Bump versions, update CHANGELOG.md, and publish your command line utility to npm by using conventional commits
- [Github Actions CI/CD](https://resources.github.com/devops/ci-cd/) - Setup to test, lint, and typecheck your code, on each PR and push to master. Also includes the setup to publish your package to npm on a merge to master (using Release Please)

## Folder structure

|__ **__mocks__** Folder that contains the mocks for third party libraries

|__ **bin** contains your file with the commander instructions - this is the entry to your command line tool

|__ **src** contains your implementation and the logic - is called by the file in your bin folder

## Getting started

### Development
1. Fork this repo
2. Adjust the URLs and names in package.json
3. Adjust the files in bin, src and __mocks__
4. Adjust the bin command in package.json

### Setup npm account
Sign up on https://www.npmjs.com/.

### Setup CI
1. Get an NPM token from https://www.npmjs.com/
2. Add the token to your repository secrets on Github as NPM_TOKEN

### Visualize coverage
To visualize coverage just sign up on https://codecov.io/.
Go to Settings and copy the token. Add this token as CODECOV_TOKEN to your travis repository settings.

### Merge your feature branch into master
Use conventional commit messages for your commits. A merge on master
will then analyze the commits, automatically bump the version, create
the release assets and then publish the package.





