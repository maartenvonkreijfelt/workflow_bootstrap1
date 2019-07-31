const path = require("path");
module.exports = {

    entry: [
        __dirname +'/src/js/index.js',
        __dirname +'/src/scss/app.scss'],

    output: {
        path: __dirname + "/dist/js/",
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']

                    }
                }
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '../css/[name].css',
                    }
                },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }]
            }



        ]
    }
}