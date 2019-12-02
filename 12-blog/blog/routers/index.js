const express = require('express')
const router = express.Router()
const CategoryModel = require('../models/category.js')
const ArticleModel = require('../models/article.js')
//获取共同数据函数
async function getCommonData(){
	//获取顶部导航列表
	const getCategoriesDataPromise = CategoryModel.find({},'name').sort({order:1})
	//获取点击排行榜文章数据
	const getTopArticlesDataPromise = ArticleModel.find({},'title click').sort({click:-1}).limit(10)
	const categories = await getCategoriesDataPromise 
	const topArticles = await getTopArticlesDataPromise

	return{
		categories,
		topArticles
	}
}

//显示首页
router.get('/', (req, res) => {
	//获取cookies信息返回模板
	// req.cookies.get('userInfo');
	// let userInfo = {}
	// if(req.cookies.get('userInfo')){
	// 	userInfo = JSON.parse(req.cookies.get('userInfo'))
	// }
	ArticleModel.getPaginationData(req)
	.then(result=>{
		getCommonData()
		.then(data=>{
		const { categories,topArticles } = data
			res.render('main/index',{
				userInfo:req.userInfo,
				categories,
				topArticles,
				//返回分页数据
				articles:result.docs,
				page:result.page,
				list:result.list,
				pages:result.pages,
				url:'/'
			})
		})
	})
	
})
//显示列表页
router.get('/list', (req, res) => {
	res.render('main/list',{
		userInfo:req.userInfo
	})
	
})
//显示详情页
router.get('/detail', (req, res) => {
	res.render('main/detail',{
		userInfo:req.userInfo
	})
	
})

module.exports = router