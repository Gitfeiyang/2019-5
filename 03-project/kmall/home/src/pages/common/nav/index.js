require('./index.css')
var api = require('api')
var _util = require('util')

var page = {
	init:function(){
		this.loadUsername()
		this.bindEvent()
		return this
	},
	bindEvent:function(){
		$('#logout').on('click',function(){
			api.logout({
				success:function(data){
					window.location.reload()
				},
				error:function(err){
					_util.showErrMsg(err)
				}
			})
		})
	},
	loadUsername:function(){
		api.getUsername({
			success:function(data){
				$('.not-login').hide()
				$('.login')
				.show()
				.find('.username')
				.text(data.username)
			}
		})
	}
}

module.exports = page.init()