
var F73_form_width = $('.F5-form').width();
var F73_form_height = $('.F5-form').height() -80;
/*alert(F52_form_height)
 var overhiddenBoxHeight1 = (F52_form_height + 80) + 'px';
 $(".overhiddenBox").css({"height":overhiddenBoxHeight1});*/
$("#F73-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F73-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"测量时间","ctn2":"2017050508094","ctn3":"荣成纸业"}'
            +',{"ctn1":"量程下限（mg/l)","ctn2":"0.00","ctn3":"荣成纸业"}'
            +',{"ctn1":"量程上限(mg/l)","ctn2":"0.00","ctn3":"荣成纸业"}'
            +',{"ctn1":"斜率","ctn2":"4","ctn3":"荣成纸业"}'
            +',{"ctn1":"截距","ctn2":"5","ctn3":"荣成纸业"}'
            +',{"ctn1":"加纳试剂时间（s）","ctn2":"6","ctn3":"荣成纸业"}'
            +',{"ctn1":"加热温度","ctn2":"7","ctn3":"荣成纸业"}'
            +',{"ctn1":"校准时间","ctn2":"8","ctn3":"荣成纸业"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '工作参数', name: 'ctn1', align: "center", width:20},
        { label: '实际值', name: 'ctn2', align: "center", width: 20 },
        { label: '标准值', name: 'ctn3', align: "center", width: 20}
    ],
    viewrecords: true,
    width: F73_form_width,
    height: F73_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
   // pager: "#F73-form-pager"
});