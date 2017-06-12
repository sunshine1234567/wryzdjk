
var F8_form_width = $('.F5-form').width();
var F8_form_height = $('.F5-form').height() -80;
/*var overhiddenBoxHeight1 = (F8_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight1});*/
$("#F8-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F8-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"演示区域","ctn3":"0.001%","ctn4":"0.001%","ctn5":"0.001%","ctn6":"0.001%","ctn7":"","ctn8":"1","ctn9":"","ctn10":""}'
            +',{"ctn1":"2","ctn2":"靖江","ctn3":"0.001%","ctn4":"0.001%","ctn5":"0.001%","ctn6":"0.001%","ctn7":"","ctn8":"1","ctn9":"","ctn10":""}'
            +',{"ctn1":"3","ctn2":"仪征","ctn3":"0.001%","ctn4":"0.001%","ctn5":"0.001%","ctn6":"0.001%","ctn7":"","ctn8":"1","ctn9":"","ctn10":""}'
            +',{"ctn1":"4","ctn2":"梅山","ctn3":"0.001%","ctn4":"0.001%","ctn5":"0.001%","ctn6":"0.001%","ctn7":"","ctn8":"1","ctn9":"","ctn10":""}'
            +',{"ctn1":"5","ctn2":"梅山","ctn3":"0.001%","ctn4":"0.001%","ctn5":"0.001%","ctn6":"0.001%","ctn7":"","ctn8":"1","ctn9":"","ctn10":""}'
            +',{"ctn1":"合计","ctn2":"秦兴","ctn3":"0.001%","ctn4":"0.001%","ctn5":"0.001%","ctn6":"0.001%","ctn7":"","ctn8":"1","ctn9":"","ctn10":""}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width: 8},
        { label: '区域', name: 'ctn2', align: "center", width: 15 },
        { label: '启运率', name: 'ctn3', align: "center", width: 15},
        { label: '数采仪故障率', name: 'ctn4', align: "center", width: 15 },
        { label: '数据传输率', name: 'ctn5', align: "center", width:25},
        { label: '联网报警', name: 'ctn6', align: "center", width: 18 },
        { label: '超标报警', name: 'ctn7', align: "center", width: 18 },
        { label: '数采仪报警', name: 'ctn8', align: "center", width: 15 },
        { label: '分析仪器故障', name: 'ctn9', align: "center", width: 15 }

    ],
    viewrecords: true,
    width: F8_form_width,
    height: F8_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F8-form-pager"
});