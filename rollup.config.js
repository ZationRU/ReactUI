import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import del from 'rollup-plugin-delete';

import pkg from './package.json';

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

export default config;