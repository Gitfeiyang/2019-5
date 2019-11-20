;(function($){
	//1.登陆注册面板切换
	var $login = $('#login')
	var $register = $('#register')
	//1.1登录=>注册
	$('#go-register').on('click',function(){
		$login.hide()
		$register.show()
	})
	// 1.2注册=>登录
	$('#go-login').on('click',function(){
		$login.show()
		$register.hide()
	})
})(jQuery);