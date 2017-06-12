
var F101_form_width = $('.F5-form').width();
var F101_form_height = $('.F5-form').height()-80;
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F101-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F101-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{"ctn1":"1","ctn2":"<a>唐山瑞斯集团</a>","ctn3":"唐山瑞思集团污水处理工程","ctn4":"薛晓慧","ctn5":"2016-10-12 10:00:00","ctn6":"<a>预览</a> &nbsp;&nbsp;&nbsp;<a>下载</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width:10 },
        { label: '建设企业', name: 'ctn2', align: "center", width:30 },
        { label: '项目名称', name: 'ctn3', align: "center", width: 20 },
        { label: '上传用户', name: 'ctn4', align: "center", width: 20 },
        { label: '上传时间', name: 'ctn5', align: "center", width: 15 },
        { label: '操作', name: 'ctn6', align: "center", width: 20 },
        // { label: '邮编', name: 'ctn7', align: "center", width: 15 },
        // { label: '传真', name: 'ctn8', align: "center", width: 15 },
        // { label: '联系人', name: 'ctn9', align: "center", width: 20 },
        // { label: '联系方式', name: 'ctn10', align: "center", width: 20 }
    ],
    viewrecords: true,
    width:1050,
    height: F101_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F101-form-pager"
});

