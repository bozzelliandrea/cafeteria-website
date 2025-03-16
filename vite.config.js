import { defineConfig, loadEnv } from 'vite';
import { cwd } from 'node:process';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), '');

  return {
    server: {
      port: Number(env.FRONTEND_PORT),
    },
    root: 'src',
    envDir: '../',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: 'src/index.html',
        },
      },
    },
  };
});
