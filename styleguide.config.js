const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackConfig = {
    devServer: {
        allowedHosts: "all"
    },

    module: {
        rules: [
            {
                test: /.\.md$/, // look for .md files in component folder
                type: 'javascript/auto', // Tell webpack to interpret the result from examples-loader as JavaScript
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.json" // important to have "noEmit": false in the config
                    }
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@znui/react': path.resolve(__dirname, `./src`),
        },
    },
    plugins: [
        // Rewrites the absolute paths to those two files into relative paths
        new webpack.NormalModuleReplacementPlugin(
            /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
            'react-styleguidist/lib/loaders/utils/client/requireInRuntime'
        ),
        new webpack.NormalModuleReplacementPlugin(
            /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
            'react-styleguidist/lib/loaders/utils/client/evalInContext'
        ),
        new CopyWebpackPlugin({
            patterns: [
                { from: "public", to: "" }
            ],
        })
    ],
};

const tsParse = require('react-docgen-typescript')
    .withCustomConfig('./tsconfig.json', {
        shouldExtractValuesFromUnion: true,
        propFilter: (prop, component) => {
            if (prop.declarations !== undefined && prop.declarations.length > 0) {
                const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
                    return !declaration.fileName.includes("node_modules");
                });

                return Boolean(hasPropAdditionalDescription);
            }

            return true;
        },
    })
    .parse

module.exports = {
    title: "ZnUI Styleguide",
    webpackConfig,
    propsParser: tsParse,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
        CodeRenderer: path.join(__dirname, 'src/styleguide/CodeRenderer/CodeRenderer'),
        StyleGuideRenderer: path.join(__dirname, 'src/styleguide/StyleGuide/StyleGuideRenderer'),
        // TableOfContentsRenderer: path.join(__dirname, 'src/styleguide/TableOfContents/TableOfContentsRenderer'),
        ComponentsListRenderer: path.join(__dirname, 'src/styleguide/ComponentsList/ComponentsListRenderer'),
        ReactComponent: path.join(__dirname, 'src/styleguide/ReactComponent/ReactComponent'),
        HeadingRenderer: path.join(__dirname, 'src/styleguide/HeadingRenderer/HeadingRenderer'),
        Heading: path.join(__dirname, 'src/styleguide/HeadingRenderer/Heading'),
        StyleGuide: path.join(__dirname, 'src/styleguide/StyleGuide/StyleGuide'),
        Editor: path.join(__dirname, 'src/styleguide/Editor/Editor'),
        PlaygroundRenderer: path.join(__dirname, 'src/styleguide/PlaygroundRenderer/PlaygroundRenderer'),
        TableRenderer: path.join(__dirname, 'src/styleguide/TableRenderer/TableRenderer'),
        TextRenderer: path.join(__dirname, 'src/styleguide/TextRenderer'),
        ParaRenderer: path.join(__dirname, 'src/styleguide/ParaRenderer'),
        'Markdown/MarkdownHeading': path.join(__dirname, 'src/styleguide/MarkdownHeading/MarkdownHeading'),
    },

    template: {
        head: {
            meta: [
                {
                    name: 'viewport',
                    content: 'viewport-fit=cover, width=device-width, initial-scale=1.0'
                }
            ],
            links: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap',
                },
            ],
        },
    },

    theme: {
        color: {
            codeBase: 'var(--znui-primary)',
            codeBackground: 'var(--znui-background)',
            codeScreen: 'var(--vkui--color_accent_green)',
            codeProperty: 'var(--vkui--color_accent_purple)',
            codeComment: 'var(--vkui--color_text_secondary)',
            codePunctuation: 'var(--vkui--color_text_secondary)',
            codeKeyword: 'var(--vkui--color_accent_blue)',
            codeFunction: 'var(--vkui--color_accent_red)',
            codeDeleted: 'var(--vkui--color_text_negative)',
        },
    },

    styles: {
        Pre: {
            pre: {
                fontFamily: '"JetBrains Mono", monospace',
                borderRadius: '8px',
                fontSize: 14,
                lineHeight: '24px',
            },
        },
        Editor: {
            root: {
                'fontFamily': '"JetBrains Mono", monospace',
                'fontSize': 14,
                'lineHeight': '24px',
                '& textarea': {
                    transition: 'all ease-in-out .1s',
                    // important to override inline styles in react-simple-code-editor
                    border: 'none !important',
                    borderRadius: 'none',
                },
                '& textarea:focus': {
                    outline: 0,
                    borderColor: `none !important`,
                },
            },
        },
    },
    pagePerSection: true,
    exampleMode: 'expand',
    sections: [
        {
            name: 'Animation',
            components: [
                'src/components/Animation/**/*.{jsx,tsx}',
            ]
        },
        {
            name: 'Basic',
            components: [
                'src/components/Basic/**/*.{jsx,tsx}',
            ]
        },
        {
            name: 'Layouts',
            components: [
                'src/components/Layouts/**/*.{jsx,tsx}',
            ]
        },
        {
            name: 'Widgets',
            components: [
                'src/components/Widgets/**/*.{jsx,tsx}',
            ]
        },
        {
            name: 'Typography',
            components: [
                'src/components/Typography/**/*.{jsx,tsx}',
            ]
        }
    ]
};