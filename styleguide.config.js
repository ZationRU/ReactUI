const webpack = require('webpack');
const path = require('path');

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
    ],
};



module.exports = {
    title: "ZnUI Styleguide",
    webpackConfig,
    propsParser: require('react-docgen-typescript').withDefaultConfig({
        shouldExtractValuesFromUnion: true
    }).parse,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
        CodeRenderer: path.join(__dirname, 'src/styleguide/CodeRenderer/CodeRenderer'),
        StyleGuideRenderer: path.join(__dirname, 'src/styleguide/StyleGuide/StyleGuideRenderer'),
        // TableOfContentsRenderer: path.join(__dirname, 'src/styleguide/TableOfContents/TableOfContentsRenderer'),
        ComponentsListRenderer: path.join(__dirname, 'src/styleguide/ComponentsList/ComponentsListRenderer'),
        ReactComponent: path.join(__dirname, 'src/styleguide/ReactComponent/ReactComponent'),
        StyleGuide: path.join(__dirname, 'src/styleguide/StyleGuide/StyleGuide'),
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
            name: 'Introduction',
            content: 'README.md',
            expand: true,
        },
        {
            name: 'Components',
            expand: true,
            pagePerSection: true,
            sections: [
                {
                    name: 'Layouts',
                    components: [
                        'src/components/Layouts/**/*.{jsx,tsx}',
                        'src/components/Flexible/*.{jsx,tsx}',
                        'src/components/**Layout/*.{jsx,tsx}',
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
        }
    ]
};