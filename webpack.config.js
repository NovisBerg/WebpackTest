module.exports = { // __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    devtool: 'eval-source-map',

    entry: __dirname + '/app/main.js', // 已多次提及的唯一入口文件
    output: {
        path: __dirname + '/public', // 打包后的文件存放的地方
        filename: 'bundle.js' // 打包后输出文件的文件名
    },

    devServer: {
        contentBase: './public', // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
        port: 8097 // 设置监听端口，若省略则默认为8080
    }
}
