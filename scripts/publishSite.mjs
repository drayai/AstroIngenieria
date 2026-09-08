import { spawnSync } from 'node:child_process';

const message = process.argv.slice(2).join(' ').trim();

if (!message) {
  console.error('Uso: npm run release:site -- "mensaje del commit"');
  process.exit(1);
}

function run(command, args, options = {}) {
  const needsWindowsShell = process.platform === 'win32' && (command === 'npm' || command === 'npx');
  console.log(`\n> ${command} ${args.join(' ')}`);
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    encoding: 'utf8',
    shell: needsWindowsShell,
    stdio: 'inherit',
    ...options,
  });

  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function output(command, args) {
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    encoding: 'utf8',
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    process.stderr.write(result.stderr ?? '');
    process.exit(result.status ?? 1);
  }
  return result.stdout.trim();
}

const branch = output('git', ['branch', '--show-current']);
if (!branch) {
  console.error('No se puede publicar desde un HEAD separado.');
  process.exit(1);
}

run('npm', ['run', 'check:articles']);
run('npm', ['run', 'lint']);
run('npm', ['run', 'build']);
run('git', ['add', '-A']);

const staged = spawnSync('git', ['diff', '--cached', '--quiet'], {
  cwd: process.cwd(),
});

if (staged.status === 1) {
  run('git', ['commit', '-m', message]);
} else if (staged.status !== 0) {
  process.exit(staged.status ?? 1);
} else {
  console.log('\nNo hay cambios nuevos para crear un commit.');
}

run('git', ['push', 'origin', branch]);
run('npx', ['gh-pages', '-d', 'dist']);

const commit = output('git', ['rev-parse', '--short', 'HEAD']);
console.log(`\nPublicado ${branch}@${commit} en GitHub Pages.`);
