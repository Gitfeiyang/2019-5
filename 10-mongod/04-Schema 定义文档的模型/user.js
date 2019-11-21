const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
	name:{
		type:String
	},
	age:{
		type:Number
	},
	major:{
		type:String
	},
	isAdmin:{
		type:Boolean
	},
	phone:{
		type:Number,
		validate:{
			validator:(val)=>{
			return /1[356789]\d{9}/.test(val)
			},
			message:"手机号不符合要求"
		}
	},
	creatAt:{
		type:Date,
		default:Date.now
	},
	friends:{
		type:Array
	}
})