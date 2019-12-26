var nav = require('pages/common/nav')
require('pages/common/footer')
var _side = require('pages/common/side')
require('pages/common/search')
require('./index.css')
var api = require('api')
var _util = require('util')
var tpl = require('./index.tpl')



var page = {
	init:function(){
		this.renderSide()
		this.loadUserInfo()
	},
	renderSide:function(){
		_side.render('user-center')
	},
	loadUserInfo:function(){
		api.getUserInfo({
			success:function(data){
				console.log(data)
				var html = _util.render(tpl,data)
				$('.side-content').html(html)
			}
		})
	}
}

$(function(){
	page.init()
})