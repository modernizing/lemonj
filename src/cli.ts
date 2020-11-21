#!/usr/bin/env node
import { analysisDir } from './Analysis';
import { refactorDir } from './Refactor';

const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

program
  .command('analysis <path>')
  .alias('A')
  .description('analysis code', {
    title: 'Analysis Less/CSS Code',
  })
  .action((path) => {
    analysisDir(path);
  });

program
  .command('refactor <path>')
  .alias('R')
  .description('refactor css files', {
    index: 'auto refactor css files',
  })
  .action((path) => {
    refactorDir('mappings.less', 'results.json');
  });

program.parse(process.argv);

if (!process.argv.slice(2).length || !process.argv.length) {
  program.outputHelp();
}
