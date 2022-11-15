import { BuildOptions } from '../types/config'

export const buildBabelLoader = (_: BuildOptions) => {
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }],
                    require.resolve('react-refresh/babel'),
                ],
            },
        },
    }
}
