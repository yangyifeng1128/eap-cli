import type { Command } from 'commander';

/**
 * Poster Command - Design posters
 * TODO: Implement
 */
export function posterCommand(program: Command): void {
  program
    .command('poster')
    .description('Design posters (coming soon)')
    .action(() => {
      console.log('poster command - coming soon');
    });
}
