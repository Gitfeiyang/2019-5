const { Readable } = require('stream');
class CustomReadable extends Readable {
	constructor(){
		super()
		this.index =0;
	}
	_read(){
		this.index++;
		if(this.index<5){
			this.push(this.index='')
		}else{
			this.push(null)
		}
	}
}
const reader = new CustomReadable()

// 获取数据流程
	// 1.定义一个变量存数据 
	let body = ''
	// 2.监听data事件获取数据
	reader.on('data',(chunk)=>{
		body+=chunk
	})
	// 3.获取数据完毕监听end事件
	reader.on('end',()=>{
		console.log(body)
	})