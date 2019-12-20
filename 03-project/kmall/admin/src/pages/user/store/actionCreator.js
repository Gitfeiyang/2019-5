import axios from 'axios'
import * as types from './actionTypes.js'
import api from 'api'


const getSetPageAction = (payload) =>({
	type:types.SET_PAGE,
	payload
})

export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		api.getUserList({
			page:page
		})
		.then(result=>{
			// console.log(result)
			const data = result.data
			if(data.code == 0){
				//派发action将获取的后台数据存到store
				console.log('aaa')
				dispatch(getSetPageAction(data.data))
			}
			
		})
		.catch(err=>{
			console.log(err)
		})
		/*
		axios({
			method:'get',
			url:'http://127.0.0.1:3000/counts',
			withCredentials:true
		})
		.then(result=>{
			// console.log(result)
			const data = result.data
			if(data.code == 0){
				//派发action将获取的后台数据存到store
				dispatch(getSetCountAction(data.data))
			}
		})
		.catch(err=>{
			console.log(err)
		})
		*/
	}
}
