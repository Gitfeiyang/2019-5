const fs =require('fs')
// 1.打开可读流=>2.读取流=>3.结束流=>4.关闭可读流

const rs = fs.createReadStream('./04-rs.txt')

rs.on('end',()=>{
	console.log('read stream done')
})
rs.on('close',()=>{
	console.log('close stream done')
})

rs.on('data',(chunk)=>{
	console.log(chunk)
})\