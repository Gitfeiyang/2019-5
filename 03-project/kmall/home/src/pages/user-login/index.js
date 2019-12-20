require('pages/common/logo')
require('pages/common/footer')
require('./index.css')

var _util = require('util')
var api = require('api')

var formErr ={
	show:function(msg){
		$('.error-item').show()
		$('.error-item')
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item').hide()
		$('.error-item')
		.find('.error-msg')
		.text('')
	}
}

var page = {
	init:function(){
		this.bindEvent()
	},
	bindEvent:function(){
		var _this = this
		$('#btn-submit').on('click',function(){
			_this.submit()
		})
		//监听键盘事件,回车键提交数据
		$('input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submit()
			}
		})
	},
	submit:function(){
		//1.获取表单数据
		var formData = {
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val()),
		}
		//2.验证数据合法性
		var formDataValidate = this.validate(formData)
		// console.log(formDataValidate)
		//3.验证通过,发送ajax请求
		if(formDataValidate.status){
			formErr.hide()
			//发送ajax请求
			api.login({
				data:formData,
				success:function(data){
					window.location.href = '/'
				},
				error:function(msg){
					formErr.show(msg)
				}
			})
			/*
			$.ajax({
				url:'/sessions/users',
				method:'post',
				dataType:'json',
				data:formData,
				success:function(result){
					if(result.code == 0){//登录成功
						window.location.href = '/'
					}else{//登录失败
						formErr.show(result.message)
					}
				},
				error:function(err){
					formErr.show('网络错误,请稍后再试')
				}
			})
			*/

		}else{//验证不通过,错误提示
			formErr.show(formDataValidate.msg)
		}
	},
	validate:function(formData){
		var result ={
			status:false,
			msg:''
		}
		//验证
		//用户名不能为空
		if(!_util.validate(formData.username,'required')){
			result.msg = '用户名不能为空'
			return result
		}
		//验证用户名格式
		if(!_util.validate(formData.username,'username')){
			result.msg = '用户名格式不正确'
			return result
		}
		//密码不能为空
		if(!_util.validate(formData.password,'required')){
			result.msg = '密码不能为空'
			return result
		}
		//验证密码格式
		if(!_util.validate(formData.password,'password')){
			result.msg = '密码格式不正确'
			return result
		}
		result.status = true
		return result
	}
}

$(function(){
	page.init()
})