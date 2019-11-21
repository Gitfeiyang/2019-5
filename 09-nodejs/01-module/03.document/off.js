const EventEmitter =require('events')

class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter()

const listener1 = ()=>{
	console.log('bind show1 event...')
}
// const listener2 = ()=>{
// 	console.log('bind show2 event...')
// }

emitter.on('show',listener1)
emitter.on('show',()=>{
	console.log('bind show2 event...')
})
// emitter.on('show',listener2)

// emitter.removeListener('show',listener2)
// console.log(emitter.off == removeListener)


emitter.emit('show')