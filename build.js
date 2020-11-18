let esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['src/index.ts', 'src/cli.ts'],
  outdir: 'dist',
  bundle: true,
  format: 'cjs',
  sourcemap: true,
  external: ['fs', 'path', 'readline', 'events', 'child_process'],
});
