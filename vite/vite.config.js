import tsconfigPaths from 'vite-tsconfig-paths'

/** @type {import('vite').UserConfig} */
export default {
    plugins: [tsconfigPaths()],
    test: {
        include: [
            '**/*.{test,test-d,spec,spec-d}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
        ]
    }
}
