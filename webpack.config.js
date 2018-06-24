module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: './dist/bundle.js'
    },
    watch: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};