//配置模板引擎
// 1.设置缓存
//开发阶段设置不走缓存
swig.setDefaults({
	cache:false
})
// 2.配置应用模板
// 第一个参数是模板名称也是模板文件的拓展名
// 第二个参数是解析模板的方法
app.engine('html',swig.renderFile)
// 3.配置模板的存放目录
// 第一个参数必须是views
// 第二个参数必须是模板存放的目录
app.set('views','./views')
// 4.注册模板引擎
// 第一个参数必须是views engine
// 第二个参数必须是模板名称，也就是app.engine的第一个参数
app.set('view engine','html')
// 5.渲染模板
app.get('/',req,res)=>{
	// 渲染模板
	// 第一个参数是相对于模板目录的文件
	// 第二个参数是传递给模板的数据
	res.render('index',{
		title:"模板首页",
		name:"Anmy",
		age:18,
		names:['Tom','Leo','Peter','Jane','Anmy']
	})
}