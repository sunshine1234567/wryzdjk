

var F12_form_width = $('.F5-form').width();
var F12_form_height = $('.F5-form').height()-80;
/*var overhiddenBoxHeight = (F12_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F12-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F12-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"江苏省","ctn3":"春兴特钢","ctn4":"<a>化学工厂主要水污染排放验收报告</a>","ctn5":"对比监测报告","ctn6":"","ctn7":"薛晓慧","ctn8":"2017-01-12 12:00:00","ctn9":"<a>修改</a>&nbsp;&nbsp;&nbsp;<a>删除</a>"}'
            +',{"ctn1":"2","ctn2":"江苏省","ctn3":"春兴特钢","ctn4":"<a>化学工厂主要水污染排放验收报告</a>","ctn5":"对比监测报告","ctn6":"","ctn7":"薛晓慧","ctn8":"2017-01-12 12:00:00","ctn9":"<a>修改</a>&nbsp;&nbsp;&nbsp;<a>删除</a>"}'
            +',{"ctn1":"3","ctn2":"江苏省","ctn3":"春兴特钢","ctn4":"<a>化学工厂主要水污染排放验收报告</a>","ctn5":"对比监测报告","ctn6":"","ctn7":"薛晓慧","ctn8":"2017-01-12 12:00:00","ctn9":"<a>修改</a>&nbsp;&nbsp;&nbsp;<a>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width: 5 },
        { label: '区域', name: 'ctn2', align: "center", width: 15 },
        { label: '企业', name: 'ctn3', align: "center", width: 15 },
        { label: '验收报告名称', name: 'ctn4', align: "center", width: 30 },
        { label: '验收报告类别', name: 'ctn5', align: "center", width: 20 },
        { label: '备注', name: 'ctn6', align: "center", width: 20 },
        { label: '上传用户', name: 'ctn7', align: "center", width: 12 },
        { label: '上传时间', name: 'ctn8', align: "center", width: 20 },
        { label: '操作', name: 'ctn9', align: "center", width: 18 }

    ],
    viewrecords: true,
    width: F12_form_width,
    height: F12_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F12-form-pager"
});

