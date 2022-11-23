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

    const rules = config.module?.rules as RuleSetRule[]

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    config.module!.rules = rules.map(rule => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            }
        }

        return rule
    })

    config.module?.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    config.module?.rules?.push(buildCssLoader(true))

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    )

    return config
}
