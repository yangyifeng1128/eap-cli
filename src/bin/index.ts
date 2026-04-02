#!/usr/bin/env node

import { Command, CommanderError } from 'commander';

import { authCommand } from '@/commands/auth';
import { posterCommand } from '@/commands/poster';
import { pptCommand } from '@/commands/ppt';
import { searchCommand } from '@/commands/search';

const VERSION = '1.0.0';

const program = new Command();

program
  .name('eap-cli')
  .description("YYF's personal efficiency augmentation CLI")
  .version(VERSION)
  .exitOverride()
  .configureHelp({ sortSubcommands: true });

// Register commands
authCommand(program);
pptCommand(program);
posterCommand(program);
searchCommand(program);

try {
  program.parse();
} catch (err) {
  if (err instanceof CommanderError) {
    if (err.code === 'commander.help') {
      process.exit(0);
    }
    process.exit(err.exitCode);
  }
  throw err;
}
