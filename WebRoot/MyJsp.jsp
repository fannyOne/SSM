<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'course.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<!-- <link href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script> -->
    
  	<link rel="stylesheet" href="/SSM/bootstrap/css/bootstrap.min.css" type="text/css"></link>
  	<script type="text/javascript" src="/SSM/bootstrap/js/bootstrap.min.js"></script>
  	<script type="text/javascript" src="/SSM/js/jquery-1.6.4.min.js"></script>
  	<script type="text/javascript" src="/SSM/js/index.js"></script>
  	<script type="text/javascript" src="/SSM/bootstrap/js/bootstrap-paginator.js"></script></head>
  <body>
  <%-- <div class="table-responsive"> 
    <c:if test="${not empty list}">
    <table class="table table-hover">
    	<thead>
    		<tr>
    			<td class="active">校名</td>
    			<td class="active">类型</td>
    			<td class="active">课程</td>
    		</tr>
    	</thead>
    	<tbody>
    	<c:forEach items="${list}" var="list">
    		<tr>
    			<td class="success">${list.uname}</td>
    			<td class="danger">${list.tname}</td>
    			<td class="info">${list.name}</td>
    		</tr>
    	</c:forEach> 	
    	</tbody>
    </table>
    </c:if>
  </div>
        <ul class="pagination">  
          <li class=""><a href="/SSM/course/index?pageStar=0">首页</a></li> 
          <li class=""><a href="/SSM/course/index?pageStar=${pageStar-20}">上一页</a></li>       
          <li><a href="/SSM/course/index?pageStar=${pageStar}">下一页</a></li>
          <li><a href="/SSM/course/index?pageStar=${countpage}">尾页11</a></li>
          <li><a>共<c:if test="${countp>0}">${countp}</c:if>页</a></li>
        <li><a>共<c:if test="${not empty count}">${count}</c:if>条数据</a></li>  
        </ul>
        <ul class="pagination">  
        	<li><a>跳转至<input type="text" value="${pageIndex}" size="1" style="height: 20px;width:35px;" class="page" onkeyup="value=this.value.replace(/\D+/g,'')">页</a></li>
        	<li><a onclick="enteryPage()">go</a></li>       	
        </ul> --%>
        <!-- <div class="panel-body">
        	<table id="overview_table" class="table table-hover"></table>
        </div> -->
        <div class="span9">
        <label>课程列表</label>
        <hr />
        <div id="list"></div>

        <div id="example"></div>
    </div>
  </body>
  <script type="text/javascript">
  	function enteryPage(){
  	var page=$(".page").val();
  	if(page==1){
  		page=0;
  	}else{
  		page=(page-1)*10;
  	}
  	location.href="/SSM/course/index?pageStar="+page; 	
  	}
  
  </script>
</html>
