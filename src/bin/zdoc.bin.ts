#!/usr/bin/env node
import { Command } from 'commander';
import * as packgeJSON from '../../package.json';

const program = new Command();

program
    .version(packgeJSON.version)
    .arguments('<food> <drink>')
    .option(
        '-w --write <string>',
        'Specifies the path of the file the order will be written to'
    )
    .action(() => {})
    .parse(process.argv);
