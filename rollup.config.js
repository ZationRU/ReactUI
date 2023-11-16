const typescript = require('rollup-plugin-typescript2');
const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const { default: dts } = require('rollup-plugin-dts');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const svgr = require('@svgr/rollup');
const del = require('rollup-plugin-delete');

const pkg = require('./package.json');


const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            },
            {
                file: pkg.module,
                format: 'es',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins: [
            svgr({
                typescript: true,
                replaceAttrValues: {
                    '#000': "currentColor"
                },

                svgoConfig: {
                    plugins: [
                        {
                            name: 'removeViewBox',
                            active: false
                        },
                        {
                            name: 'convertColors',
                            active: true,
                            currentColor: true
                        }
                    ]
                }
            }),
            external(),
            postcss({
                modules: false,
                extract: true,
                minimize: true,
                sourceMap: true
            }),
            nodeResolve(),
            commonjs(),
            typescript(),
        ]
    },
    {
        input: './dist/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        external: [/\.css$/],
        plugins: [
            dts(),
        ],
    },
    {
        input: './empty.js',
        plugins: [
            del({
                targets: 'dist/*/',
                verbose: true
            }),
        ],
    },
];

module.exports = config;