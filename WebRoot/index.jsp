<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
		<meta name="renderer" content="webkit"> 
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>v6银饰会员管理系统</title>
		<link rel="stylesheet" href="<%=basePath %>pt-public/css/reset_y.css" />
		<link rel="stylesheet" href="pt-public/css/pt-public.css" />
		<link rel="stylesheet" href="css/login.css" />
		<script  type="text/javascript" src="../resource/jquery-1.11.3.js"></script>
		<script  type="text/javascript" src="resource/Validform_v5.3.2_min.js"></script>
		<script  type="text/javascript" src="resource/datatype.js"></script>
		<script  type="text/javascript" src="pt-public/js/check-form.js"></script>
		<script  type="text/javascript" src="pt-public/js/pt-public.js"></script>
	</head>
	<body>
		<div class="wrap">
			<div class="content wrap_content">
				<div class="wrap_logo"><a href="#"><img src="images/logo.jpg" /></a></div>
				<div class="con_box">
					<div class="con_content login_content">
						<form class="check_form01" action="login" method="post">	
							<div class="register_all">
								<p class="register_name ft16 c333">用户名</p>
								<input type="text" name="uname" class="register_common outline_color input_box ft16 c333" placeholder="手机号或邮箱" datatype="e|m" nullmsg="请输入手机号或邮箱!" errormsg="用户名不正确"/>
							</div>
							<div class="register_all register_pwd">
								<p class="register_name ft16 c333">密码</p>
								<input type="password" name="upwd" class="register_common outline_color ft16 c333" datatype="pwd" nullmsg="请输入密码!" errormsg="密码不正确"/>
								<img src="images/icon-psd.gif" class="register_eyes"/>
							</div>
							<input type="submit" class="submit_btn bgChange_btn ft20 cfff ac" value="立即登录" id="login"/>
						</form>
						<!-- <div class="login_guide">
							<a href="#" class="find_pwd c6e9 ft14">忘记密码?</a>
							<a href="#" class="to_register c6e9 ft14">注册新用户>></a>
						</div> -->
						<div class="login_way ft16 c999 ac">
							<p><c:if test="${not empty msg}">${msg}</c:if></p>
<!-- 							<p></p>
							<div class="login_way_detail">
								<a href="#"><img src="images/login-weixin.jpg" alt="weixin" /></a>
								<a href="#"><img src="images/login-qq.jpg" alt="qq" /></a>
								<a href="#"><img src="images/login-weibo.jpg" alt="weibo" /></a>
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>		
	</body>
	<script type="text/javascript">
		//按回车键登录
		$(function(){ 
			$(document).keydown(function(event){ 
				if(event.keyCode==13){ 
					$("#login").click(); 
				} 
			}); 
		}); 
	</script>	
</html>