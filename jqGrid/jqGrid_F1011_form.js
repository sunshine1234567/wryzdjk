
var F1011_form_width = $('.F5-form').width();
var F1011_form_height = $('.F5-form').height()-80;
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F1011-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F1011-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{"ctn1":"1","ctn2":"<a class=\'js-E1-area-site\'>数采仪</a>","ctn3":"省控","ctn4":"001","ctn5":"张三","ctn6":"山西","ctn7":"100010","ctn8":"0532-234567"}'
            +',{"ctn1":"2","ctn2":"<a class=\'js-E1-area-site\'>数采仪</a>","ctn3":"省控","ctn4":"001","ctn5":"李思","ctn6":"吉林","ctn7":"100010","ctn8":"0532-234567"}'
            +',{"ctn1":"3","ctn2":"<a class=\'js-E1-area-site\'>数采仪</a>","ctn3":"国控","ctn4":"002","ctn5":"万武","ctn6":"背景","ctn7":"100010","ctn8":"0532-234567"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width:10 },
        { label: '设备类型', name: 'ctn2', align: "center", width:30 },
        { label: '控制类型', name: 'ctn3', align: "center", width: 20 },
        { label: '设备品牌', name: 'ctn4', align: "center", width: 20 },
        { label: '设备型号', name: 'ctn5', align: "center", width: 15 },
        { label: '生产商', name: 'ctn6', align: "center", width: 20 },
        { label: '监测污染物', name: 'ctn7', align: "center", width: 15 },
        { label: '产品证书及编号', name: 'ctn8', align: "center", width: 15 }
    ],
    viewrecords: true,
    width: F1011_form_width,
    height: F1011_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F1011-form-pager"
});

