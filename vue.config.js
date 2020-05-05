// const Gettest = require('./mock/users.json');
// const Posttest = require('./mock/post.json');
const express = require('express')
const app = express()
let apiRoutes = express.Router()
app.use('/api', apiRoutes)　
module.exports = {
    outputDir: 'dist', //构建输出目录
    assetsDir:   'assets',  //静态资源目录
    lintOnSave: false,  //是否开启eslint保存检测
    publicPath: './',
    runtimeCompiler : true,
    devServer: {
      open: true,
      host: 'localhost',
      port: 8081,
      https: false,
      proxy: {
        // 配置跨域
        '/api': {
          target: 'http://localhost:8080/',
          ws: true,
          changOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
}
