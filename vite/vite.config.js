const { default: tsconfigPaths } = require('vite-tsconfig-paths')
const { defineConfig } = require('vitest/config')

module.exports = {
    config: {
        plugins: [tsconfigPaths()],
        test: {
            include: [
                '**/*.{test,test-d,spec,spec-d}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
            ]
        }
    },
    defineConfig
}
