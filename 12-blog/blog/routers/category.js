const express = require('express')
const router = express.Router()
const CategoryModel = require('../models/category.js')
const pagination = require('../util/pagination.js')

//权限验证
router.get('/',(req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请使用管理员账号登录</h1>')
	}
})
//显示分类列表页面
router.get('/', (req, res) => {
	const options = {
		page:req.query.page / 1,
		model:CategoryModel,
		query:{},
		projection:'-__v',
		sort:{order:1}
	}
	pagination(options)
	.then(result=>{
		res.render('admin/category_list',{
			userInfo:req.userInfo,
			categories:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/category'
			})
	})
	.catch(err=>{
		console.log(err)
	})
})	
//显示新增分类列表页面
router.get('/add', (req, res) => {
	res.render('admin/category_add',{
		userInfo:req.userInfo
	})
})	
//处理新增分类
router.post('/add',(req,res)=>{
	//1.获取参数
	let { name,order } = req.body
	//2.查找数据库
	if(!order){
		order = 0
	}
	CategoryModel.findOne({name:name})
	.then(category=>{
		if(category){//该分类名称已存在
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'分类名称已存在'
			})
		}else{//可以插入该分类
				//3.插入数据
			CategoryModel.insertMany({name,order})
			.then(result=>{
				res.render('admin/ok',{
					userInfo:req.userInfo,
					message:'新增分类成功',
					url:'/category'
				})
			})
			.catch(err=>{
				console.log(err)
				res.render('admin/err',{
					userInfo:req.userInfo,
					message:'数据库操作失败，请稍后再试！'
				})
			})
		}
	})
	.catch(err=>{
		console.log(err)
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库操作失败，请稍后再试！'
		})
	})

})

//显示编辑分类页面
router.get('/edit/:id', (req, res) => {
	const id = req.params.id
	// console.log(id)
	//查找数据库获取对应分类
	CategoryModel.findById(id)
	.then(category=>{
		res.render('admin/category_edit',{
			userInfo:req.userInfo,
			category
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库操作失败，请稍后再试！'
		})
	
	})
})	
module.exports = router