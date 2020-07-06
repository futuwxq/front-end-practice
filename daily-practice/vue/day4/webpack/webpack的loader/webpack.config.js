const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/, //正则表达式匹配css文件
            //css-loader只负责css文件加载，不负责解析，要解析需要使用style-loader
            use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }] //使用loader
        }]
    }
}