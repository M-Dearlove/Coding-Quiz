const { defineConfig } = require('cypress');
const path = require('path');

// Import the Vite config from your existing setup
// Since this is now a .js file, we'll handle the TypeScript import differently
let viteConfig;
try {
  // Try to load the compiled vite config if available
  viteConfig = require('./client/vite.config').default;
} catch (e) {
  // Fallback to a basic configuration if it can't be loaded
  viteConfig = {
    plugins: [],
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
}

module.exports = defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});