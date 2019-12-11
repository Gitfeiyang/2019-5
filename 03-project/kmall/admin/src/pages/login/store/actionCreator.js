import axios from 'axios'
import * as types from './actionTypes.js'
import { message } from 'antd'
import { saveUsername } from 'util'

const getLoadInitAction = (data) =>({
	type:types.LOAD_DATA,
	payload:data
})

export const getLoginAction = (values)=>{
	return (dispatch,getState)=>{
		values.role='admin'
		axios({
			method:'post',
			url:'http://127.0.0.1:3000/sessions/users',
			data:values
		})
		.then(result=>{
			console.log(result)
			const data = result.data
			console.log(data)
			if(data.code == 0){//登陆成功
				// 1.将用户信息保存到前台
				saveUsername(data.data.username)
				// 2.返回到后台数据
				window.location.href = '/'
			}else{//登陆失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			message.error('请求失败,请稍后再试!')
		})
	}
}
