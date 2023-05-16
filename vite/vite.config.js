const tsconfigPaths = require('vite-tsconfig-paths')
const GithubActionsReporter = require('vitest-github-actions-reporter')

export default {
    plugins: [tsconfigPaths()],
    test: {
        include: [
            '**/*.{test,test-d,spec,spec-d}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
        ],
        reporters: process.env.GITHUB_ACTIONS
            ? ['verbose', new GithubActionsReporter()]
            : 'default'
    }
}
