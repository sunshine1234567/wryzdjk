
var F15_form_width = $('.tablediv').width();
var F15_form_height = $('.tablediv').height() -80;
$("#F15-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F15-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"荣成纸业","ctn3":"污水出口"'
            +',{"ctn1":"2","ctn2":"荣成纸业","ctn3":"污水出口"'
            +',{"ctn1":"3","ctn2":"荣成纸业","ctn3":"污水出口"'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width: 8},
        { label: '所属企业', name: 'ctn2', align: "center", width: 15 },
        { label: '所属排放口', name: 'ctn3', align: "center", width: 15},
    ],
    viewrecords: true,
    width: F15_form_width,
    height: F15_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F15-form-pager"
});
