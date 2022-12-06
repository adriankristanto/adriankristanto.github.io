const { defineConfig } = require('cypress')

module.exports = defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite'
        },
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config)

            return config
        }
    },

    e2e: {
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config)

            return config
        }
    }
})
