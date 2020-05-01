"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config

const _axios = axios.create({
  // headers: {'Content-Type': 'application/json'},
  timeout: 60000,
 
})

//设置 post、put 默认 Content-Type
_axios.defaults.headers.post['Content-Type'] = 'application/json'
_axios.defaults.headers.put['Content-Type'] = 'application/json'
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
