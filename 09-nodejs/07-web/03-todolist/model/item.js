/*
* @Author: Chen
* @Date:   2019-11-03 11:09:36
* @Last Modified by:   Chen
* @Last Modified time: 2019-11-03 15:27:40
*/
const fs = require('fs')
const path = require('path')
const util = require('util')

const filepath = path.normalize(__dirname+'/../data/item.json')

//异步处理获取数据
const readFile = util.promisify(fs.readFile)

async function get(){
	//1.读取文件数据
	const data = await readFile(filepath,{flag:'r',encoding:'utf-8'})
	//2.返回数据
	// console.log(data)
	const arr = JSON.parse(data)
	return arr
}
module.exports = {
	get
}