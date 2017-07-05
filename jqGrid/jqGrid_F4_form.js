
var F4_form_width = $('.F5-form').width();
var F4_form_height = $('.F5-form').height()-100;
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F4-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F4-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":[{"ctn1":"1","ctn2":"2017-09-20 12:00:00","ctn3":"8:04","ctn4":"55:50","ctn5":"5:004"}'
            +',{"ctn1":"2","ctn2":"2107-02-03 12:00:00","ctn3":"3:221","ctn4":"34:78","ctn5":"1:33"}'
            +',{"ctn1":"3","ctn2":"2016-03-23 12:00:00","ctn3":"32:98","ctn4":"13:33","ctn5":"23:43"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width: 5 },
        { label: '时间', name: 'ctn2', align: "center", width: 20 },
        { label: '二氧化硫（mg/m³）', name: 'ctn3', align: "center", width: 20 },
        { label: '氮氧化物（mg/m³）', name: 'ctn4', align: "center", width: 20 },
        { label: '废气流量（m3/s）', name: 'ctn5', align: "center", width: 20 }
    ],
    viewrecords: true,
    width: F4_form_width,
    height: F4_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F4-form-pager"
});

