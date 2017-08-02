/*var element = $("#page");
var options = {
	bootstrapMajorVersion : 3,//bootstrap版本
	currentPage : CurrentPage,//当前页数
	numberOfPages : 5,//设置显示的页码数
	totalPages : TotalPages, //总页数
	itemTexts : function(type, page, current) {
		switch (type) {
		case "first":
			return "首页";
		case "prev":
			return "上一页";
		case "next":
			return "下一页";
		case "last":
			return "末页";
		case "page":
			return page;
		}
	},
	pageUrl : function(type, page, current) {
		return "/card/flow?page=" + page; //分页的链接,传递的参数为page
	}
};
element.bootstrapPaginator(options);
*/
/*var page=1;
$('#overview_table').bootstrapTable({
			//alert("aaa");
		//	url : qtpath + '/static/json/systemoverview.json',
			url :'/SSM/course/page?pageStar='+page,
			method : 'get',
			cache : false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination : true, // 是否显示分页（*）
			sortable : false, // 是否启用排序
			sortOrder : "asc", // 排序方式
			queryParams : queryParams,// 传递参数（*）
			sidePagination : "server", // 分页方式：client客户端分页，server服务端分页（*）
			pageNumber : 1, // 初始化加载第一页，默认第一页
			pageSize : 10, // 每页的记录行数（*）
			pageList : [ 10, 25, 50, 100 ], // 可供选择的每页的行数（*）
			search : false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
			strictSearch : true,
			showColumns : false, // 是否显示所有的列
			showRefresh : true, // 是否显示刷新按钮
			// minimumCountColumns: 2,//最少允许的列数
			clickToSelect : true, // 是否启用点击选中行
			height : 280, // 行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
			uniqueId : "overviewId", // 每一行的唯一标识，一般为主键列
			showToggle : false, // 是否显示详细视图和列表视图的切换按钮
			cardView : false, // 是否显示详细视图
			detailView : false, // 是否显示父子表
			columns : [ {
				field : 'id',
				title : '课程id',
				align : 'center',
				width : '180',
				valign : 'bottom',
				sortable : true
			}, {
				field : 'name',
				title : '课程名称',
				align : 'center',
				width : '200',
				valign : 'middle',
				sortable : true
			}, {
				field : 'teacher',
				title : '主讲老师',
				align : 'center',
				width : '10',
				valign : 'top',
				sortable : true
			}],
			onLoadError : function() {
				console.log("加载表格失败......");
			}
});*/
/*
function getTab(page) {
	var url ='/SSM/course/page?pageStar='+page;
	alert(url);
	$('#overview_tabl').bootstrapTable({
		method : 'get', // 这里要设置为get，不知道为什么 设置post获取不了
		url : url,
		cache : false,
		height : 400,
		striped : true,
		pagination : true,
		pageList : [ 10, 20 ],
		// contentType: "application/x-www-form-urlencoded",
		pageSize : 10,
		pageNumber : 1,
		search : true,
		sidePagination : 'server',// 设置为服务器端分页
		queryParams : queryParams,// 参数
		showColumns : true,
		showRefresh : true,
		minimumCountColumns : 2,
		clickToSelect : true,
		smartDisplay : true,
		columns : [ {
			field : 'id',
			title : '课程id',
			align : 'center',
			width : '180',
			valign : 'bottom',
			sortable : true
		}, {
			field : 'name',
			title : '课程名称',
			align : 'center',
			width : '200',
			valign : 'middle',
			sortable : true
		}, {
			field : 'teacher',
			title : '主讲老师',
			align : 'center',
			width : '10',
			valign : 'top',
			sortable : true
		}]
	});
}*/
//设置传入参数
function queryParams(params) {
	return params;
}
$(function() {
	var page=0;
	alert(page);	
	getTab(page);
});

$(function () {
    var id = 1;
    $.ajax({
      url: "'/SSM/course/page",
      datatype: 'json',
      type: "Post",
      data: "id=" + id,
      success: function (data) {
        if (data != null) {
          $.each(eval("(" + data + ")").list, function (index, item) { //遍历返回的json
            $("#list").append('<table id="data_table" class="table table-striped">');
            $("#list").append('<thead>');
            $("#list").append('<tr>');
            $("#list").append('<th>Id</th>');
            $("#list").append('<th>课程名称</th>');
            $("#list").append('<th>主讲老师</th>');
            $("#list").append('<th> </th>');
            $("#list").append('</tr>');
            $("#list").append('</thead>');
            $("#list").append('<tbody>');
            $("#list").append('<tr>');
            $("#list").append('<td>' + item.id + '</td>');
            $("#list").append('<td>' + item.name + '</td>');
            $("#list").append('<td>' + item.teacher + '</td>');
            $("#list").append('<td>');
            $("#list").append('<button class="btn btn-warning" onclick="Edit(' + item.id + ' );">修改</button>');
            $("#list").append('<button class="btn btn-warning" onclick="Edit(' + item.id + ' );">删除</button>');
            $("#list").append('</td>');
            $("#list").append('</tr>');
            $("#list").append('</tbody>');

            $("#list").append('<tr>');
            $("#list").append('<td>内容</td>');
            $("#list").append('<td>' + item.intro + '</td>');
            $("#list").append('</tr>');
            $("#list").append('</table>');
          });
          var pageCount = eval("(" + data + ")").pageCount; //取到pageCount的值(把返回数据转成object类型)
          var currentPage = eval("(" + data + ")").CurrentPage; //得到urrentPage
          var options = {
            bootstrapMajorVersion: 2, //版本
            currentPage: currentPage, //当前页数
            totalPages: pageCount, //总页数
            itemTexts: function (type, page, current) {
              switch (type) {
                case "first":
                  return "首页";
                case "prev":
                  return "上一页";
                case "next":
                  return "下一页";
                case "last":
                  return "末页";
                case "page":
                  return page;
              }
            },//点击事件，用于通过Ajax来刷新整个list列表
            onPageClicked: function (event, originalEvent, type, page) {
              $.ajax({
                url: "/OA/Setting/GetDate?id=" + page,
                type: "Post",
                data: "page=" + page,
                success: function (data1) {
                  if (data1 != null) {
                    $.each(eval("(" + data + ")").list, function (index, item) { //遍历返回的json
                      $("#list").append('<table id="data_table" class="table table-striped">');
                      $("#list").append('<thead>');
                      $("#list").append('<tr>');
                      $("#list").append('<th>Id</th>');
                      $("#list").append('<th>课程名称</th>');
                      $("#list").append('<th>主讲老师</th>');
                      $("#list").append('<th> </th>');
                      $("#list").append('</tr>');
                      $("#list").append('</thead>');
                      $("#list").append('<tbody>');
                      $("#list").append('<tr>');
                      $("#list").append('<td>' + item.id + '</td>');
                      $("#list").append('<td>' + item.name + '</td>');
                      $("#list").append('<td>' + item.teacher + '</td>');
                      $("#list").append('<td>');
                      $("#list").append('<button class="btn btn-warning" onclick="Edit(' + item.id + ' );">修改</button>');
                      $("#list").append('<button class="btn btn-warning" onclick="Edit(' + item.id + ' );">删除</button>');
                      $("#list").append('</td>');
                      $("#list").append('</tr>');
                      $("#list").append('</tbody>');

                      $("#list").append('<tr>');
                      $("#list").append('<td>内容</td>');
                      $("#list").append('<td>' + item.intro + '</td>');
                      $("#list").append('</tr>');
                      $("#list").append('</table>');
                    });
                  }
                }
              });
            }
          };
          $('#example').bootstrapPaginator(options);
        }
      }
    });
  });