const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },

  //e2e: {
  //  baseUrl: 'http://localhost:3001',
  //  setupNodeEvents(on, config) {
      // implement node event listeners here
   // },
 // },
});