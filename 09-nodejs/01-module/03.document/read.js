const fs = require('fs')

//同步阅读文件
	//逐步对文件
		//1.打开文件
		// const fd =fs.openSync('./03.txt','r')
		// //2.读取文件内容
		// let buf = Buffer.alloc(100)
		// fs.readSync(fd,buf,0,50,0)
		// console.log(buf)
		// //3.关闭文件
		// fs.closeSync(fd)

	// fs.open('./03.txt','r',(err,fd)=>{
	// 	if(err){
	// 		console.log('open file err',err)
	// 	}else{//读取文件
	// 		let buf = Buffer.alloc(100)
	// 		fs.read(fd,buf,0,50,0,(err)=>{
	// 			if(err){
	// 				console.log('open file err',err)
	// 			}else{
	// 				console.log(buf)
	// 			}
	// 			fs.closeSync(fd,(err)=>{
	// 				if(err){
	// 					console.log('close file fail...')
	// 				}
	// 			})

	// 		})
	// 	}
	// })


	// 异步读取文件
	const util= require('util')
	const rs = util.promisify(fs.readFile)
	rs('./03.txt',{flag:'r',encoding:'utf-8'})
	.then(data=>{
		console.log(data)
	})
	.catch(err=>{
		console.log(err)
	})