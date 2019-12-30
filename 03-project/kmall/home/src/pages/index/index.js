var nav = require('pages/common/nav')
require('pages/common/footer')
require('pages/common/search')
require('./index.css')

var api = require('api')
var _util = require('util')

import Swiper from 'swiper'
require('node_modules/swiper/css/swiper.min.css')

var categoriesTpl = require('./categories.tpl')

var page = {
	init:function(){
		//加载首页分类列表
		this.loadHomeCategories()
		//集成swiper
		this.loadSwiper()
	},
	loadHomeCategories:function(){
		api.getHomeCategories({
			success:function(categories){
				// console.log(categories)
				var html = _util.render(categoriesTpl,{
					categories:categories
				})
				$('.categories').html(html)
				console.log(html)
			}
		})
	},
	loadSwiper:function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    loop: true, // 循环模式选项
		    autoplay:true,
		    // 如果需要分页器
		    pagination: {
		      	el: '.swiper-pagination',
		     	clickable :true,//底部按钮可以点击
		    },
		    
		    // 如果需要前进后退按钮
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		})
	}
}


$(function(){
	page.init()
})