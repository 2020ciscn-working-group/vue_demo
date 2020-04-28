"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const _axios = axios.create({
  // headers: {'Content-Type': 'application/json'},
  timeout: 60000,
  baseURL:'http://localhost:3000'
})

//设置 post、put 默认 Content-Type
_axios.defaults.headers.post['Content-Type'] = 'application/json'
_axios.defaults.headers.put['Content-Type'] = 'application/json'
_axios.defaults.baseURL = 'http://localhost:3000'//默认的请求端口
_axios.defaults.withCredentials = true //请求发送cookie

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	console.log('in interceptor, request config: ', config);
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });



// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	console.log('in interceptor, response: ', response);
	if(!response.data.success){
		console.log('errCode:', response.data.errCode, 'errMsg:', response.data.errMsg);
		Message({type:'error',message:response.data.errMsg});
		let code = response.data.errCode;
		if('login02'==code){ //登录session失效
			//window.location.href = '/';
			console.log('before to login, current route path:', router.currentRoute.path);
			router.push({path:'/', query:{redirect:router.currentRoute.path}});
		}
	}
	return response;
  }, function (error) {
    // 对响应错误做点什么
		console.log('in interceptor, error: ', error);
		Message({showClose: true, message: error, type: 'error'});
    return Promise.reject(error);
  });

  
  


//创建 axios 实例




// 添加请求拦截器
// _axios.interceptors.request.use(
  // (config) => {
  //   //   // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
  //   if(config.method==='get'){
  //     config.data = JSON.stringify(config.data)
  //   }
  //   else if(config.method==='post'){
  //     request.setRequestHeader('content-Type','application/json;charset=utf-8')//告诉服务器请求体的格式时json
  //     config.data = JSON.stringify(config.data) 
  //   }
  //   // 请求发送前进行处理
  //   return config
  // },
  // (error) => {
  //   // 请求错误处理
  //   return Promise.reject(error)
  // }
// )


// 添加响应拦截器
// _axios.interceptors.response.use(
//   (response) => {
//     let { data } = response
//     return data
//   },
//   (error) => {
//     let info = {},
//       { status, statusText, data } = error.response

//     if (!error.response) {
//       info = {
//         code: 5000,
//         msg: 'Network Error'
//       }
//     } else {
//       // 此处整理错误信息格式
//       info = {
//         code: status,
//         data: data,
//         msg: statusText
//       }
//     }
//   }
// )

// export default function() {
//   return service
// }

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};


Vue.use(Plugin)

export default Plugin;
