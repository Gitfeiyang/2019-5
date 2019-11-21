;(function($){
	var $input = $('.todo-input')
	$input.on('keydown',function(ev){
		// console.log(ev.keyCode)
		if(ev.keyCode == 13){
			//发送ajax请求，添加数据
			$.ajax({
				url:'/add',
				type:"post",
				dataType:'json',
				success:function(data){
					console.log(data)
				},
				err:function(err){
					console.log(err)
				}
			})
		}
	})
})(jQuery)