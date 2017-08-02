<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<title>V6-会员新增</title>
		<link rel="stylesheet" href="../css/admin_public.css" />
		<link rel="stylesheet" href="../css/admin-student-add.css" />
		<script type="text/javascript" src="../resources/jquery-1.11.3.js"></script>
		<script type="text/javascript" src="../resources/layer/layer.js"></script>
		<script type="text/javascript" src="../js/admin_public.js"></script>
		<script type="text/javascript" src="../resources/laydate/laydate.js"></script>
	</head>
	<body>
		<div class="wrap">
			<!-- 左边固定导航栏开始-->
			<p></p>
		    <!-- 左边固定导航栏结束-->
			<!-- 右边自适应栏开始 -->
			<div class="admin_content">
				<!-- 右边自适应页面顶部开始 -->
				<p></p>
				<!-- 右边自适应页面顶部结束 -->
				<!-- 右边自适应页面主体部分开始 -->
				<div class="admin_content_bottom">
					<div class="admin_guide admin_guide_line">
						<a href="index">会员管理  &nbsp; >  &nbsp;</a>
						<a href="#">新增</a>
						<div class="admin_guide">
							<a href="../loginout" class="admin_guide_add">退出</a>
						</div>
					</div>
					<form action="addsave" method="post" >
						<ul class="addstudent_form">
							<li>
								<span>会员账号</span>
								<input type="text" name="mNumber" class="admin_inp_words" />
							</li>
							<li>
								<span>会员姓名</span>
								<input type="text" name="mName" value="请输入真实姓名" class="admin_inp_words" />
							</li>
							<li>
								<span>联系方式</span>
								<input type="text" name="mPhone" value="请输入联系方式" class="admin_inp_words" />
							</li>
							<li>
								<span>消费金额</span>
								<input type="text" name="money" class="admin_inp_words" />
							</li>
							<!-- <li>
								<span>消费时间</span>
								<input type="text" name="createTime" class="admin_inp_words" onclick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})"/>
							</li> -->
							<li class="admin_tips"><!-- 提交错误页面提示信息处 --></li>
							<li>
								<input type="submit" value="确定" class="add_yes"/>
								<input type="button" value="返回" class="add_no" onclick="javascript:history.go(-1);"/>
							</li>
						</ul>
					</form>
				</div>
			</div>	
			<!-- 右边自适应栏结束-->
		</div>
	</body>
</html>