const typescript = require('@rollup/plugin-typescript');
const external = require('rollup-plugin-peer-deps-external');
const commonjs = require('@rollup/plugin-commonjs');
const autoExternal = require('rollup-plugin-auto-external');

const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/index.js',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            }
        ],
        external: ['@znui/*'],
        plugins: [
            autoExternal(),
            external(),
            typescript(),
            commonjs()
        ]
    }
];

module.exports = config;