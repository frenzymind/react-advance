import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export function buildPlugins({
    paths,
    isDev,
    analyze,
    apiUrl,
    project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev

    const plugins = [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
    ]

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }))
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
            new CopyPlugin({
                patterns: [{ from: paths.locales, to: paths.buildLocales }],
            }),
        )
    }

    if (analyze) {
        plugins.push(
            new BundleAnalyzerPlugin({
                analyzerHost: '0.0.0.0',
                analyzerPort: 8888,
                openAnalyzer: false,
            }),
        )
    }

    return plugins
}
