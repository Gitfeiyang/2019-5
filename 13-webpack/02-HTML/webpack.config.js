const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports ={
	//指定开发环境
	mode: "development", // "production" | "development" | "none"
	//应用程秀开始执行
	//webpack 开始打包
	//单一入口
	 //entry: "./src/index.js", // string | object | array
	 //多入口
	 entry:{
	 	index:'./src/pages/index/index.js',
	 	common:'./src/pages/common/common.js'
	 },
	 //输出
	 output:{// webpack 如何输出结果的相关选项
	 	// 所有输出文件的目标路径
    	// 必须是绝对路径（使用 Node.js 的 path 模块） 
	 	path: path.resolve(__dirname, "dist"), // string
	 	// 「入口分块(entry chunk)」的文件名模板（出口分块？）
	 	 filename: "[name]-[hash]-bundle.js", // string    
	 },
	   module: {
	   	//处理CSS
	    rules: [
	      {
	        test: /\.css$/,
	        use: [
	          'style-loader',
	          'css-loader'
	        ]
	      },
	      //处理图片
	      {
				test: /\.(png|jpg|gif)$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    			options: {
			      			limit: 10
			    		}
			  		}
				]
			}
	    ]
  },
  plugins:[
  //自动生成HTML
    new htmlWebpackPlugin({
        template:'./src/view/index.html',//模板文件
        filename:'index.html',//输出的文件名
        // inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
        hash:true,//给生成的js/css文件添加一个唯一的hash
        chunks:['index']
    }),
   //自动清理多余文件
     new CleanWebpackPlugin()
	],
	  devServer:{
	    contentBase: './dist',//内容的目录
	    port:8080//服务运行的端口
	  }
}