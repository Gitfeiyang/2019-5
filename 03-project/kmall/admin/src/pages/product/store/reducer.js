import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	usernum:0,
	ordernum:0,
	productnum:0,
	current:0,
	pageSize:0,
	total:0,
	isFecthing:false,
	categories:[],

	mainImage:'',
	images:'',
	detail:"", 

	mainImageValidateStatus:'',
	mainImageHelp:'',
	imagesValidateStatus:'',
	imagesHelp:'',

})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	//处理分类列表分页
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			current:action.payload.current,
			pageSize:action.payload.pageSize,	
			total:action.payload.total,
		})
	}
	if(action.type == types.PAGE_REQUEST_START){
		return state.set('isFecthing',true)
	}
	if(action.type == types.PAGE_REQUEST_DONE){
		return state.set('isFecthing',false)
	}
	//处理获取最新分类父级
	if(action.type == types.SET_LEVEL_CATEGORIES){
		return state.set('categories',fromJS(action.payload))
	}
	// 处理自定义组件存值
	if(action.type == types.SET_MAIN_IMAGE){
		return state.set('mainImage',action.payload)
	}
	if(action.type == types.SET_IMAGES){
		return state.set('images',action.payload)
	}
	if(action.type == types.SET_DETAIL){
		return state.set('detail',action.payload)
	}
	return state
}