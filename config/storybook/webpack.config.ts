import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('ts', 'tsx')
    config.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    }

    const rules = config.module?.rules as RuleSetRule[]

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    config.module!.rules = rules.map(rule => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.(png|svg|jpe?g|gif)$/i,
            }
        }

        return rule
    })

    config.module?.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })

    config.module?.rules.push({
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    })

    config.module?.rules?.push(buildCssLoader(true))

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify('https://testapi.com'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    )

    return config
}
