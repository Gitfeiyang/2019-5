const express = require('express');
const app = express()
//get =>127.0.0.1:3000/
app.use(express.static('public'))
//开发阶段设置不走缓存
swig.setDefaults({
  cache: false
})
app.engine('html', swig.renderFile);
	// 第一个参数是模板名称,同时也是模板文件的扩展名
	// 第二个参数是解析模板的方法
app.set('views', './views')
	// 第一参数必须是views
	// 第二个参数是模板存放的目录

app.set('view engine', 'html')
	// 第一个参数必须是view engine
	// 第二个参数是模板名称,也就是app.engine的第一个参数
	app.get('/',(req,res)=>{
    //4.渲染模板
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
    res.render('index',{
        title:'跨猪网',
        content:'我是内容'
    })
})
app.listen(3000,() => console.log('Example app listening on part 3000!'))