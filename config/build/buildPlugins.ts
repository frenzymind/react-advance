import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        ...(isDev && [new ReactRefreshWebpackPlugin({ overlay: false })]),
    ]
}
