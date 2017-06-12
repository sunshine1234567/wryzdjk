
var F105_form_width = $('.F5-form').width();
var F105_form_height = $('.F5-form').height()-80;
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F105-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F105-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{"ctn1":"1","ctn2":"唐山瑞思集团排放口档案.doc","ctn3":"172120451A","ctn4":"薛晓慧","ctn5":"2016-10-12 10:00:00","ctn6":"<a>预览</a> &nbsp;&nbsp;&nbsp;<a>下载</a>"}'
            + ',{"ctn1":"2","ctn2":"常山纺织公司10月月度报告","ctn3":"172120451A","ctn4":"薛晓慧","ctn5":"2016-10-12 10:00:00","ctn6":"<a>预览</a> &nbsp;&nbsp;&nbsp;<a>下载</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width:10 },
        { label: '资料名称', name: 'ctn2', align: "center", width:30 },
        { label: '大小（M）', name: 'ctn3', align: "center", width: 20 },
        { label: '上传用户', name: 'ctn4', align: "center", width: 20 },
        { label: '上传时间', name: 'ctn5', align: "center", width: 15 },
        { label: '操作', name: 'ctn6', align: "center", width: 20 },
    ],
    viewrecords: true,
    width:1050,
    height: F105_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F105-form-pager"
});

