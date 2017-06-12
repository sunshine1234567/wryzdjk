
var F10_form_width = $('.F5-form').width();
var F10_form_height = $('.F5-form').height()-80;
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F10-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F10-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{"ctn1":"1","ctn2":"<a class=\'js-E1-city-site\'>废水企业</a>","ctn3":"省控","ctn4":"001","ctn5":"张三","ctn6":"山西太原山西是","ctn7":"100010","ctn8":"0532-234567","ctn9":"废气管理员","ctn10":"1372523848246"}'
            +',{"ctn1":"2","ctn2":"<a class=\'js-E1-city-site\'>废水企业</a>","ctn3":"省控","ctn4":"001","ctn5":"李思","ctn6":"吉林长春长春啊","ctn7":"100010","ctn8":"0532-234567","ctn9":"废气管理员","ctn10":"1372523848246"}'
            +',{"ctn1":"3","ctn2":"<a class=\'js-E1-city-site\'>江苏春特刚有限公司</a>","ctn3":"国控","ctn4":"002","ctn5":"万武","ctn6":"背景","ctn7":"100010","ctn8":"0532-234567","ctn9":"废气管理员","ctn10":"1372523848246"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width:10 },
        { label: '企业名称', name: 'ctn2', align: "center", width:30 },
        { label: '控制类型', name: 'ctn3', align: "center", width: 20 },
        { label: '组织机构代码', name: 'ctn4', align: "center", width: 20 },
        { label: '法人代表', name: 'ctn5', align: "center", width: 15 },
        { label: '企业地址', name: 'ctn6', align: "center", width: 20 },
        { label: '邮编', name: 'ctn7', align: "center", width: 15 },
        { label: '传真', name: 'ctn8', align: "center", width: 15 },
        { label: '联系人', name: 'ctn9', align: "center", width: 20 },
        { label: '联系方式', name: 'ctn10', align: "center", width: 20 }
    ],
    viewrecords: true,
    width: F10_form_width,
    height: F10_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F10-form-pager"
});

