import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  
  return {
    base: '/vite-jsdoc-template/',
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'MyLibrary',
        fileName: 'bundle'
      },
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        // Make sure to exclude the docs directory from the build
        external: [/\/docs\//],
        output: {
          // Ensure docs aren't included in the final bundle
          paths: {
            'docs/*': './docs/*'
          }
        }
      }
    },
    server: {
      port: 3000,
      // Serve docs directory during development
      fs: {
        allow: ['docs']
      }
    }
  };
});
