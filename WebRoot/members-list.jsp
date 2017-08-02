<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'members-list.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" href="css/admin_public.css" />
	<script type="text/javascript" src="../resources/jquery-1.11.3.js"></script>
	<script type="text/javascript" src="../resources/layer/layer.js"></script>
	<script type="text/javascript" src="js/admin_public.js"></script>
	<script type="text/javascript" src="js/jquery-1.7.2.js"></script>
</head>
  
  <body>
   <div class="wrap">
			<!-- 左边固定导航栏开始-->
		    <!-- 左边固定导航栏结束-->
			<!-- 右边自适应栏开始 -->
			<div class="admin_content">
				<!-- 右边自适应页面顶部开始 -->
				<!-- 右边自适应页面顶部结束 -->
				<!-- 右边自适应页面主体部分开始 -->
				<div class="admin_content_bottom">
					<div class="admin_guide">
						<a href="#">管理员 </a>
						<a href="loginout" class="admin_guide_add">退出</a>
						<a href="/SSM/members/add" class="admin_guide_add">新增</a>
					</div>
					<div class="admin_guide">
					<form action="members/search" method="post" id="search">
						<a>输入会员姓名:</a>
						<input type="text" name="key">
						<input type="button" value="搜索" onclick="search()">
					</form>
					</div>
					<table class="admin_table">
						<thead>
							<tr>
								<td width="10%">会员账号</td>
								<td width="10%">会员姓名</td>
								<td width="30%">联系方式</td>
								<td width="20%">消费金额</td>
								<td width="20%">消费时间</td>
								<td width="30%">操作</td>
							</tr>
						</thead>
						<tbody>
						<c:if test="${not empty list}">
						<c:forEach items="${list}" var="list">
							<tr>
								<td>${list.mNumber}</td>
								<td>${list.mName}</td>
								<td>${list.mPhone}</td>
								<td>${list.money}</td>
								<td><fmt:formatDate value="${list.createTime}" type="both"/></td>
								<td>
									<%-- <a href="member/updateMember?m_id=${list.mId}" class="admin_table_edit">编辑&nbsp;&nbsp;&nbsp;</a> --%>
									<a href="members/deleteMember?m_id=${list.mId}" class="admin_table_delete">删除</a>
								</td>
							</tr>
						</c:forEach>
						</c:if>
						</tbody>
					</table>
					<!-- <table class="pager mt_20px">  
   				   		<tbody>
   				   			<tr>           
				            	<td class="fenye_arr_first"><a href="#">首页</a></td>  
				                <td class="fenye_arr_pre"><a href="#">上一页</a></td>  
								<td class="fenye_num_box"><a href="#">1</a></td>  
								<td class="fenye_num_box"><a href="#">2</a></td>  
								<td class="fenye_num_box"><a href="#">3</a></td>  
								<td class="fenye_num_box"><a href="#">4</a></td>
								<td class="fenye_num_box"><a href="#">5</a></td>
                				<td class="fenye_arr_next"><a href="#">下一页</a></td>  
                				<td class="fenye_arr_last"><a href="#">末页</a></td>  
								<td class="all_num_txt"><a>共10页</a></td>  
       							<td class="jump_num_txt">跳转到:<input type="text" class="jump_num_input" id="p_pageIndex" size="2" value="" onchange="">页 </td>
         						<td><input type="button" id="gotoBtn" class="fenye_confirm_btn" onclick="" value="GO"></td> 
    						</tr>  
    					</tbody>
					</table> -->
				</div>
			</div>	
			<!-- 右边自适应栏结束-->
		</div>
<script type="text/javascript">
function search(){
	$("#search").submit();
}
</script>
  </body>
</html>
