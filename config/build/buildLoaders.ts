import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    // если не используем ts - нужен babel
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // }

    const cssLoader = buildCssLoader(isDev)

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false })
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true })

    return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader]
}
