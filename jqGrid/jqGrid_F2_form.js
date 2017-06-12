
var F2_form_width = $('.F5-form').width();
var F2_form_height = $('.F5-form').height() -80;
/*var overhiddenBoxHeight1 = (F2_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight1});*/
$("#F2-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F2-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"<input type=\'checkbox\'>","ctn2":"1","ctn3":"荣成纸业","ctn4":"废水总排口","ctn5":"冯路","ctn6":"完成","ctn7":"2017-02-12 12:00:00","ctn8":"审核通过","ctn9":"","ctn10":""}'
            +',{"ctn1":"<input type=\'checkbox\'>","ctn2":"2","ctn3":"荣成纸业","ctn4":"废水总排口","ctn5":"冯路","ctn6":"完成","ctn7":"2017-02-12 12:00:00","ctn8":"审核通过","ctn9":"","ctn10":""}'
            +',{"ctn1":"<input type=\'checkbox\'>","ctn2":"3","ctn3":"荣成纸业","ctn4":"废水总排口","ctn5":"冯路","ctn6":"完成","ctn7":"2017-02-12 12:00:00","ctn8":"审核通过","ctn9":"","ctn10":""}'
            +',{"ctn1":"<input type=\'checkbox\'>","ctn2":"4","ctn3":"荣成纸业","ctn4":"废水总排口","ctn5":"冯路","ctn6":"完成","ctn7":"2017-02-12 12:00:00","ctn8":"审核通过","ctn9":"","ctn10":""}'
            +',{"ctn1":"<input type=\'checkbox\'>","ctn2":"5","ctn3":"荣成纸业","ctn4":"废水总排口","ctn5":"冯路","ctn6":"完成","ctn7":"2017-02-12 12:00:00","ctn8":"审核通过","ctn9":"","ctn10":"<a class=\'tableAclass\'>详情</a><a class=\'tableAclass\'>下载</a><a class=\'tableAclass\'>预览</a>"}'
            +',{"ctn1":"<input type=\'checkbox\'>","ctn2":"6","ctn3":"荣成纸业","ctn4":"废水总排口","ctn5":"冯路","ctn6":"完成","ctn7":"2017-02-12 12:00:00","ctn8":"审核通过","ctn9":"","ctn10":""}'
            +',{"ctn1":"<input type=\'checkbox\'>","ctn2":"7","ctn3":"荣成纸业","ctn4":"废水总排口","ctn5":"冯路","ctn6":"完成","ctn7":"2017-02-12 12:00:00","ctn8":"审核通过","ctn9":"","ctn10":""}'
            +',{"ctn1":"<input type=\'checkbox\'>","ctn2":"8","ctn3":"荣成纸业","ctn4":"废水总排口","ctn5":"冯路","ctn6":"完成","ctn7":"2017-02-12 12:00:00","ctn8":"审核通过","ctn9":"","ctn10":""}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '<input type=\'checkbox\'>', name: 'ctn1', align: "center", width: 8},
        { label: '编号', name: 'ctn2', align: "center", width: 8},
        { label: '企业名称', name: 'ctn3', align: "center", width: 20 },
        { label: '排放口', name: 'ctn4', align: "center", width: 15},
        { label: '运维人员', name: 'ctn5', align: "center", width: 15 },
        { label: '运维结果', name: 'ctn6', align: "center", width: 15},
        { label: '填表时间', name: 'ctn7', align: "center", width: 25 },
        { label: '状态', name: 'ctn8', align: "center", width: 12 },
        { label: '审批意见', name: 'ctn9', align: "center", width: 15 },
        { label: '操作', name: 'ctn10', align: "center", width: 20 }
    ],
    viewrecords: true,
    width: F2_form_width,
    height: F2_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F2-form-pager"
});