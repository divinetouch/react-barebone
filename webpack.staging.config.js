var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('app'), 
    entry: [
        './main.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: 'dist',
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/,/bower_components/],
                loaders: ['babel']
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|svg|eot|ttf|svg|woff|woff2)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            ENV: require(path.resolve('env/staging'))
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    eslint: {
        configFile: '/.eslintrc'
    }
};
