
;(function($){
	$('.del').on('click',function(){
	  if(!window.confirm('确定删除这条记录吗?')){
	  	return false
		}
	})
})(jQuery);