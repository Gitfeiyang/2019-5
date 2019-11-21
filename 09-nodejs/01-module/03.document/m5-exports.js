const str = 'hello'
const obj ={
	name:'tom'
}
const fn = function(){
	console.log('fn')
}
console.log('require m5')

// exports.str = str
// exports.obj = obj
// exports.fn = fn

module.exports.str = str
module.exports.obj = obj
module.exports.fn = fn