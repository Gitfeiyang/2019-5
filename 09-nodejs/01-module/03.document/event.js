const EventEmitter = require('events');
//console.log(EventEmitter)
class MyEmitter extends EventEmitter{
	
}

//1.生成事件触发器实例
const emitter = new MyEmitter();
//2.监听事件
emitter.on('show',(arg1,arg2)=>{
	console.log(arg1,arg2)
})
//3.触发事件
emitter.on('show',()=>{
		console.log('do something...')
})
const arr =['22','33']
// emitter.emit('show',arr)
emitter.emit('show',...arr)


