
var F9_form_width = $('.F5-form').width();
var F9_form_height = $('.F5-form').height()-80;
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F9-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F9-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{"ctn1":"1","ctn2":"<a>CK_20170304125436757</a>","ctn3":"2017-09-20 12:00:00","ctn4":"备品备件库","ctn5":"昌平区","ctn6":"春兴特钢","ctn7":"1#废气排口","ctn8":"薛晓慧","ctn9":"<a class=\'margin10\'>编辑</a><a class=\'margin10\'>删除</a><a class=\'margin10\'>物资</a><a class=\'margin10\'>提交</a>"}'
            +',{"ctn1":"2","ctn2":"<a>CK_20170304125436757</a>","ctn3":"2107-02-03 12:00:00","ctn4":"备品备件库","ctn5":"昌平区","ctn6":"春兴特钢","ctn7":"1#废气排口","ctn8":"薛晓慧","ctn9":"<a class=\'margin10\'>编辑</a><a class=\'margin10\'>删除</a><a class=\'margin10\'>物资</a><a class=\'margin10\'>提交</a>"}'
            +',{"ctn1":"3","ctn2":"<a>CK_20170304125436757</a>","ctn3":"2016-03-23 12:00:00","ctn4":"备品备件库","ctn5":"昌平区","ctn6":"春兴特钢","ctn7":"1#废气排口","ctn8":"薛晓慧","ctn9":"<a class=\'margin10\'>编辑</a><a class=\'margin10\'>删除</a><a class=\'margin10\'>物资</a><a class=\'margin10\'>提交</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width: 5 },
        { label: '出库单号', name: 'ctn2', align: "center", width: 25 },
        { label: '出库日期', name: 'ctn3', align: "center", width: 20 },
        { label: '仓库', name: 'ctn4', align: "center", width: 20 },
        { label: '区域', name: 'ctn5', align: "center", width: 15 },
        { label: '排污企业', name: 'ctn6', align: "center", width: 20 },
        { label: '排放口', name: 'ctn7', align: "center", width: 15 },
        { label: '出库人员', name: 'ctn8', align: "center", width: 15 },
        { label: '操作', name: 'ctn9', align: "center", width: 30 }
    ],
    viewrecords: true,
    width: F9_form_width,
    height: F9_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F9-form-pager"
});

