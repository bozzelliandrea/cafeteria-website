import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { cwd } from 'node:process';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), '');

  return {
    server: {
      port: Number(env.FRONTEND_PORT),
    },
    root: 'src',
    envDir: '../',
    plugins: [tailwindcss()],
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
