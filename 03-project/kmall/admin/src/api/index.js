import { SERVER,API_CONFIG } from './config.js'
import axios from 'axios'
import {removeUsername} from 'util'

const getApiObj = (API_CONFIG)=>{
	const apiObj = {}
	for(let key in API_CONFIG){
		apiObj[key] = (data)=>{
			let url = SERVER + API_CONFIG[key][0] || '/'
			let method = API_CONFIG[key][1] || 'get'
			//发送请求
			return request(url,method,data)
		}
	}
 
	return apiObj
}
const request = (url,method,data)=>{
	return new Promise((resolve,reject)=>{
		const options = {
			method:method,
			url:url,
			withCredentials:true
		}
		//携带参数
		switch(method.toUpperCase()){
			case 'GET':
			case 'DELETE':
				options.params = data
				break
			default :
				options.data = data
		}
		axios(options)
		.then(result=>{
			if (result.data.code == 10) {
				//后台session过期或通过别的方式清除掉,为了保持状态统一，
				//应该返回前台登陆页面
				// 1.清除前台locaStorage
				removerUsername()
				// 2.返回登陆页面
				window.location.herf='login'
				reject('请求失败，没有权限')
			}
			resolve(result)
		})
		.catch(err=>{
			reject(err)
		})
	})
}
export default getApiObj(API_CONFIG)