var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    devtool: 'source-map',
    output: {path: '.', filename: 'bundle.js'}
    // module: {
    //     loaders: [
    //         {
    //             test: /.jsx?$/,
    //             loader: 'babel-loader',
    //             exclude: /node_modules/,
    //             query: {
    //                 // presets: ['es2015', 'react']
    //                 presets: ['es2015']
    //             }
    //         }
    //     ]
    // },
}