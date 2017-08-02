$(function(){
	//登录注册表单验证
	$(".check_form01").Validform({
		tiptype:3,
		tipSweep:true,
		showAllError:true,
	});
	//修改通过验证后的提示语
	$.Tipmsg.r=""
	//登录注册页使密码可见或隐藏
	$('.register_eyes').click(function(){
		var type = $(this).siblings('input').attr('type');
		if(type == 'text'){
			$(this).siblings('input').attr('type','password');
		}else{
			$(this).siblings('input').attr('type','text');
		}
	});
});	