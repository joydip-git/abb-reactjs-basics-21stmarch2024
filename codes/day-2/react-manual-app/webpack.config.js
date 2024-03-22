const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackConfigObject = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        compress: true
    },
    resolve: {
        extensions: ['.html', '.css', '.scss', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.htm|html$/,
                use: 'html-loader'
            },
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
            },
            {
                test: /\.scss$/,
                use: ['sass-loader']
            }
        ]
    }
}
module.exports = webpackConfigObject