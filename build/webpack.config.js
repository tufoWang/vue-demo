// nodejs 中的path模块
var path = require('path');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: path.resolve(__dirname, '../src/index.js'),
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, './dist/'),
        publicPath: 'static/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },

    module: {
      rules: [{
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader?limit=10240&name=images/[name].[ext]'
        }
      ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'components': path.join(__dirname, 'src/components'),   // 定义文件路径， 加速打包过程中webpack路径查找过程
      'lib': path.join(__dirname, 'src/lib'),
      'less': path.join(__dirname, 'src/less')
    },
    extensions: ['.js', '.less', '.vue', '*', '.json']        // 可以不加后缀, 直接使用 import xx from 'xx' 的语法
  },
  node: {
    fs: "empty"
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}