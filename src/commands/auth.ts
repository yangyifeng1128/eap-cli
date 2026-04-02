import type { Command } from 'commander';

/**
 * Auth Command - Manage authentication
 * TODO: Implement login/logout logic
 */
export function authCommand(program: Command): void {
  const auth = program.command('auth').description('Manage authentication');

  auth
    .command('login')
    .description('Login to eap-cli (coming soon)')
    .action(() => {
      console.log('auth login - coming soon');
    });

  auth
    .command('logout')
    .description('Logout from eap-cli (coming soon)')
    .action(() => {
      console.log('auth logout - coming soon');
    });
}
