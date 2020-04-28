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
  //   devServer: {
  //     open:true,
  //     host:'localhost',
  //     port:8080,
  //     https:false,    
  //     proxy: {
  //         '/api': {
  //              target: 'http://172.18.188.126:81/',                
  //              ws:true,
  //              changeOrigin: true,
  //              pathRewrite: {
  //              '^/api':''   
  //                   }
  //             }
  //        },
  //     before(app){
  //       http://localhost:8080/Gettest
  //       app.get('/Gettest',(req,res)=>{
  //         res.json(Gettest);
  //       }),
  //       app.post('/Posttest', (req, res) => {
  //         res.json(Posttest)
  //       })        
  //     }
  // }
}