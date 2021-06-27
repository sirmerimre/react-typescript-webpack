// const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        // To modify the env name
        // new webpack.DefinePlugin({
        //     'process.env.name': JSON.stringify('Vishwas'),
        // }),
    ],
};