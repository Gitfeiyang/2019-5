const mongoose = require('mongoose')


//1.定义文档模型
	const categorySchema = new mongoose.Schema({
	  		name:{
	  		type:String,
	  		required:[true,"必须输入管理分类"]
	  	},
	  	order:{
	  		type:Number,
	  		default:0
	  	}
	})
//2.根据文档模型生成对应模型(集合)
//2.1第一个参数就是需要生成的集合名称,mongoose子自动将集合名称转化为复数
//2.2第二个参数就是前面定义的文档模型
const categoryModel = mongoose.model('category', categorySchema)


module.exports = categoryModel