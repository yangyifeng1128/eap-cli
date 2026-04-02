import type { Command } from 'commander';

/**
 * search Command - Quick web search
 * TODO: Implement
 */
export function searchCommand(program: Command): void {
  program
    .command('search')
    .description('Quick web search (coming soon)')
    .action(() => {
      console.log('search command - coming soon');
    });
}
