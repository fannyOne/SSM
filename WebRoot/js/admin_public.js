$(function(){
	//左侧导航栏点击出现二级导航样式
	$(".admin_nav li a").click(function(){
		var obj = $(this);
		if(obj.siblings("ul").css("display") == "none")
		{
			obj.siblings("ul").css("display","block");
		}else
		{
			obj.siblings("ul").css("display","none");
		}		
	});

	//左侧导航点击更改样式
	$(".admin_nav li a").click(function(){
		$(this).parent().siblings().find("a").removeClass("admin_current_nav");
		$(this).addClass("admin_current_nav");		
	});
	
	//给表格添加hover样式
	$(".admin_table tbody tr").mouseover(function(){
			$(this).css({"background":"#dcebec"});
	});
	$(".admin_table tbody tr").mouseout(function(){
			$(this).css({"background":"#fff"});
	});
	
	//删除按钮弹框提示
	$(".admin_table_delete").click(function(){
		layer.confirm("确定要删除吗？", {
		  btn: ["确定","取消"], //按钮
		  shade: 0.7,
		  yes: function(){
		  }
		});
	});
	
	//点击新增选课弹窗
	$(".chose_course_table_addcourse,.admin_table_testimport").click(function(){
		$(".admin_popmsg_box").css("display","block");
		$(".admin_popmsg_boxshadow").css("display","block");
	});	
	$(".admin_popmsg_box_close").click(function(){
		$(".admin_popmsg_box").css("display","none");
		$(".admin_popmsg_boxshadow").css("display","none");
	});
					
})