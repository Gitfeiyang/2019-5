import { fromJS } from 'immutable'
const defaultState = fromJS({
	isFecthing:false
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.types == types.LOGIN_REQUEST_START){
		return state.set('isFecthing',true)
	}
	if(action.types == types.LOGIN_REQUEST_DONE){
		return state.set('isFecthing',false)
	}
	return state
}