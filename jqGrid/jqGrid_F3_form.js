
var F3_form_width = $('.F5-form').width();
var F3_form_height = $('.F5-form').height() -80;
/*var overhiddenBoxHeight1 = (F3_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight1});*/
$("#F3-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F3-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"2","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"3","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"4","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"5","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"6","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"7","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"8","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width: 8},
        { label: '所属企业', name: 'ctn2', align: "center", width: 15 },
        { label: '所属排放口', name: 'ctn3', align: "center", width: 15},
        { label: '报警类型', name: 'ctn4', align: "center", width: 15 },
        { label: '报警信息', name: 'ctn5', align: "center", width:25},
        { label: '报警开始时间', name: 'ctn6', align: "center", width: 18 },
        { label: '报警结束时间', name: 'ctn7', align: "center", width: 18 },
        { label: '持续时长', name: 'ctn8', align: "center", width: 15 },
        { label: '处理人', name: 'ctn9', align: "center", width: 12 },
        { label: '处理结果', name: 'ctn10', align: "center", width: 15 },
        { label: '报警状态', name: 'ctn11', align: "center", width: 15 },
        { label: '操作', name: 'ctn12', align: "center", width: 12 }
    ],
    viewrecords: true,
    width: F3_form_width,
    height: F3_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F3-form-pager"
});
