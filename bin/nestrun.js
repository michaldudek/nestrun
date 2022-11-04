#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

require('ts-node/register');
require('tsconfig-paths/register');

const [, , command, ...argv] = process.argv;

const cliFile = locateCliFile();
require(cliFile);

// TODO handle nestjs monorepo setup
// TODO handle configuring custom cli file (e.g. through package.json ?)
function locateCliFile() {
  // for now just go with src/cli.ts
  const rootDir = process.cwd();
  const cliFile = path.resolve(rootDir, 'src/cli.ts');

  if (!fs.existsSync(cliFile)) {
    throw new Error(
      'Could not locate src/cli.ts file! Please create it, ideally according to nest-commander specifications.'
    );
  }

  return cliFile;
}
