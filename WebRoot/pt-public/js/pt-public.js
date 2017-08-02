//HTML5 placeholder IE浏览器下的脚本模拟,使ie9浏览器兼容placeholder
/*$(function(){
    var obj_int=$('.input_box');
		obj_int.each(function(index, element) {
      funPlaceholder(obj_int.eq(index));
    });			
});
function funPlaceholder(element) {
    var placeholder = '';
    if (element && element.attr("placeholder")) {
        placeholder = element.attr("placeholder");
        element.on('focus',function(){
            if (element.val() === placeholder) {
                element.val("");
            }
            element.css('color',"");
        });

        element.on('blur',function(){
            if (element.val() === "") {
                element.val(placeholder);
            }
            element.css('color',"graytext");
        });

        //样式初始化
        if (element.val() === "") {
            element.val(placeholder);
            element.css('color',"graytext");
        }
    }
};*/


$(function(){
	//全屏背景自适应
	var height=document.body.scrollHeight;//动态获取屏幕高度，兼容360和谷歌
	$(".wrap").css("height",height)
	var height=document.documentElement.scrollHeight;//动态获取屏幕高度，兼容IE
	$(".wrap").css("height",height)
	window.onresize=function(){
		location.reload();
	};
	
	//头部输入框点击改变边框颜色
	$(".input_box").click(function(){
		$(".input_box").parent(".search").css("border","1px solid #48a3a6");
	});
	
	//有背景色的按钮hover时改变背景色
	$(".bgChange_btn").hover(
		function(){
			$(this).css("background","#359295")
		},
		function(){
			$(this).css("background","#48a3a6")
		}
	);	
	
	//头部登录后  hover出现二级菜单
	$(".head_nav").hover(
		function(){
			$(this).children(".head_subnav").css("display","block");
		},
		function(){
			$(this).children(".head_subnav").css("display","none");
		}	
	);
	
	//头部登录后二级菜单  hover后添加背景色
	$(".head_subnav>ul>li").hover(
		function(){
			$(this).not(".subnav_loginout").css("background","#e3f1f1");
		},
		function(){
			$(this).not(".subnav_loginout").css("background","#fff");
		}		
	);
	
	//人气技能、课程首页列表hover图片时添加遮罩效果
	$(".hot_skill_list li").hover(function(){
		var obj = $(this);
		if(obj.find(".skill_coursedetail").css("display") == "none")
		{
			obj.find(".skill_coursedetail").css("display","block");
			obj.find(".skill_coursename").css("display","none");
		}else
		{
			obj.find(".skill_coursedetail").css("display","none");
			obj.find(".skill_coursename").css("display","block");
		}	
	});
	
	//人气学校hover是给图片添加遮罩效果
	$(".hot_school_list li").hover(function(){
		$(this).find(".txt").stop().animate({height:"172px"},400);
		$(this).find(".txt h3").stop().animate({paddingTop:"56px"},400);
		},function(){
		$(this).find(".txt").stop().animate({height:"45px"},400);
		$(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);
	});

	//点击更多显示隐藏
	$(".more").bind("click",function(){
		var  _this = $(this);
		if(_this.hasClass("classify_m")){
			_this.siblings(".tieba_list_headOne_detail_bd,.rowbd").css("overflow-y","scroll");//点击更多显示更多分类
			_this.find("span").eq(0).html("收起");
			_this.removeClass("classify_m");
		}else{
			_this.siblings(".tieba_list_headOne_detail_bd,.rowbd").css("overflow","hidden");//点击收起隐藏更多分类
			_this.find("span").eq(0).html("更多");
			_this.addClass("classify_m");
		}
	});
	
	//个人、老师、教务中心---左侧导航点击更改样式
	$(".center_nav li").click(function(){
		$(this).siblings().removeClass("center_current_nav");
		$(this).addClass("center_current_nav");		
	});
	
	//点击查看全文、交卷 后弹出 弹窗	
	$(".teachingNotice_detail_readMore,.hand_in").click(function(){
		$(".popmsg_box").css("display","block");
		$(".popmsg_boxshadow").css("display","block");
	})
	//点击关闭按钮关闭 弹窗	
	$(".popmsg_box_close").click(function(){
		$(".popmsg_box").css("display","none");
		$(".popmsg_boxshadow").css("display","none");
	})
	
})