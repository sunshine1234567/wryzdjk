

var F11_form_width = $('.F5-form').width();
var F11_form_height = $('.F5-form').height()-80;
/*var overhiddenBoxHeight = (F12_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F11-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F11-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"总氮分析仪使用说明书.pdf ","ctn3":"废水分析仪器说明书","ctn4":"2017-4-20   19:32:45","ctn5":"薛晓慧","ctn6":"<a>下载</a>"}'
            +',{"ctn1":"2","ctn2":"雪迪龙SCS-900-1（U23)烟气在线连续监测系统操作维护手册.pdf","ctn3":"废水分析仪器说明书","ctn4":"2017-4-20   19:32:45","ctn5":"薛晓慧","ctn6":"<a>下载</a>"}'
            +',{"ctn1":"3","ctn2":"杭州聚光烟气监测系统_CMES-2000.pdf ","ctn3":"废水分析仪器说明书","ctn4":"2017-4-20   19:32:45","ctn5":"薛晓慧","ctn6":"<a>下载</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width: 5 },
        { label: '名称', name: 'ctn2', align: "center", width: 35 },
        { label: '类别', name: 'ctn3', align: "center", width: 15 },
        { label: '日期', name: 'ctn4', align: "center", width: 15 },
        { label: '上传用户', name: 'ctn5', align: "center", width: 15 },
        { label: '操作', name: 'ctn6', align: "center", width: 15 }

    ],
    viewrecords: true,
    width: F11_form_width,
    height: F11_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F11-form-pager"
});

