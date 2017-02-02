/**
 * Created by glenn on 1/30/2017.
 */
"use strict";
const path = require('path');



module.exports = {
    entry: './lib/test.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: "test-pack.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
        // extensions: [".js", ".jsx"]
        // modulesDirectories: ["app_ts_build", "node_modules"]
    },
    // ,
    externals: {
        "custom-ol": "ol"
        // "jquery": "$",
        // "c3": "c3",
        // "d3": "d3",
        // "jquery-ui": "jquery-ui",
        // "react-dom": "ReactDOM",
        // "react": "React"
    }
};