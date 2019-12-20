import axios from 'axios'
import * as types from './actionTypes.js'
import { message } from 'antd'
import { saveUsername } from 'util'
import api from 'api'

const getLoginStartAction = () =>({
	type:types.LOGIN_REQUEST_START
})
const getLoginDoneAction = () =>({
	type:types.LOGIN_REQUEST_DONE
})


export const getLoginAction = (values)=>{
	return (dispatch,getState)=>{
		//发送请求前显示loading
		dispatch(getLoginStartAction())
		values.role='admin'
		api.login(values)
		.then(result=>{
			console.log(result)
			const data = result.data
			console.log(data)
			if(data.code == 0){//登陆成功
				// 1.将用户信息保存到前台
				saveUsername(data.data.username)
				// 2.返回到后台数据
				window.location.href = '/home'
			}else{//登陆失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			message.error('请求失败,请稍后再试!')
		})
		.finally(()=>{
			//请求完毕取消loading
			dispatch(getLoginDoneAction())
		})
	/*
		axios({
			method:'post',
			url:'http://127.0.0.1:3000/sessions/users',
			withCredentials:true,
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
				window.location.href = '/home'
			}else{//登陆失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			message.error('请求失败,请稍后再试!')
		})
		.finally(()=>{
			//请求完毕取消loading
			dispatch(getLoginDoneAction())
		})
		*/
	}
}
