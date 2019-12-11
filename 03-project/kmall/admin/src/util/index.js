export const saveUsername = (username)=>{
	window.localStorage.setItem('username',username)
}
export const getUsernmae = ()=>{
	return window.localStorage.setItem('username')
}
export const removeUsernmae = ()=>{
	return window.localStorage.removeItem('username')
}