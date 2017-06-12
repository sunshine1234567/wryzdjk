
var F52_form_width = $('.F5-form').width();
var F52_form_height = $('.F5-form').height() -80;
/*alert(F52_form_height)
var overhiddenBoxHeight1 = (F52_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight1});*/
$("#F52-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F52-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"1","ctn3":"荣成纸业","ctn4":"废水总排口"}'
            +',{"ctn1":"1","ctn2":"2","ctn3":"荣成纸业","ctn4":"废水总排口"}'
            +',{"ctn1":"1","ctn2":"3","ctn3":"荣成纸业","ctn4":"废水总排口"}'
            +',{"ctn1":"1","ctn2":"4","ctn3":"荣成纸业","ctn4":"废水总排口"}'
            +',{"ctn1":"1","ctn2":"5","ctn3":"荣成纸业","ctn4":"废水总排口"}'
            +',{"ctn1":"1","ctn2":"6","ctn3":"荣成纸业","ctn4":"废水总排口"}'
            +',{"ctn1":"1","ctn2":"7","ctn3":"荣成纸业","ctn4":"废水总排口"}'
            +',{"ctn1":"1","ctn2":"8","ctn3":"荣成纸业","ctn4":"废水总排口"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width: 8},
        { label: '区域', name: 'ctn2', align: "center", width: 20 },
        { label: '企业数量', name: 'ctn3', align: "center", width: 15},
        { label: '排放口数量', name: 'ctn4', align: "center", width: 15 }
    ],
    viewrecords: true,
    width: F52_form_width,
    height: F52_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F52-form-pager"
});