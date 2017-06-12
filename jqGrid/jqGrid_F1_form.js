
var F1_form_width = $('.F5-form').width();
var F1_form_height = $('.F5-form').height() -80;
/*var overhiddenBoxHeight1 = (F1_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight1});*/
$("#F1-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F1-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"<span class=\'blue-color\'>OPER_20170427233324758</span>","ctn3":"春兴特钢公司发生设备离线报警，请查看原因，并及时处理","ctn4":"重要紧急","ctn5":"江苏省运维项目部","ctn6":"冯立刚","ctn7":"冯立刚","ctn8":"运维任务","ctn9":"2017-04-27 12:33:29","ctn10":"","ctn11":"待处理","ctn12":"--"}'
            +',{"ctn1":"2","ctn2":"<span class=\'blue-color\'>OPER_20170427233324758</span>","ctn3":"春兴特钢公司发生设备离线报警，请查看原因，并及时处理","ctn4":"重要紧急","ctn5":"江苏省运维项目部","ctn6":"冯立刚","ctn7":"冯立刚","ctn8":"运维任务","ctn9":"2017-04-27 12:33:29","ctn10":"","ctn11":"待处理","ctn12":"--"}'
            +',{"ctn1":"3","ctn2":"<span class=\'blue-color\'>OPER_20170427233324758</span>","ctn3":"春兴特钢公司发生设备离线报警，请查看原因，并及时处理","ctn4":"重要紧急","ctn5":"江苏省运维项目部","ctn6":"冯立刚","ctn7":"冯立刚","ctn8":"运维任务","ctn9":"2017-04-27 12:33:29","ctn10":"","ctn11":"待处理","ctn12":"--"}'
            +',{"ctn1":"4","ctn2":"<span class=\'blue-color\'>OPER_20170427233324758</span>","ctn3":"春兴特钢公司发生设备离线报警，请查看原因，并及时处理","ctn4":"重要紧急","ctn5":"江苏省运维项目部","ctn6":"冯立刚","ctn7":"冯立刚","ctn8":"运维任务","ctn9":"2017-04-27 12:33:29","ctn10":"","ctn11":"待处理","ctn12":"--"}'
            +',{"ctn1":"5","ctn2":"<span class=\'blue-color\'>OPER_20170427233324758</span>","ctn3":"春兴特钢公司发生设备离线报警，请查看原因，并及时处理","ctn4":"重要紧急","ctn5":"江苏省运维项目部","ctn6":"冯立刚","ctn7":"冯立刚","ctn8":"运维任务","ctn9":"2017-04-27 12:33:29","ctn10":"2017-04-27 12:33:29","ctn11":"待处理","ctn12":"<a>审核</a>"}'
            +',{"ctn1":"6","ctn2":"<span class=\'blue-color\'>OPER_20170427233324758</span>","ctn3":"春兴特钢公司发生设备离线报警，请查看原因，并及时处理","ctn4":"重要紧急","ctn5":"江苏省运维项目部","ctn6":"冯立刚","ctn7":"冯立刚","ctn8":"运维任务","ctn9":"2017-04-27 12:33:29","ctn10":"","ctn11":"待处理","ctn12":"--"}'
            +',{"ctn1":"7","ctn2":"<span class=\'blue-color\'>OPER_20170427233324758</span>","ctn3":"春兴特钢公司发生设备离线报警，请查看原因，并及时处理","ctn4":"重要紧急","ctn5":"江苏省运维项目部","ctn6":"冯立刚","ctn7":"冯立刚","ctn8":"运维任务","ctn9":"2017-04-27 12:33:29","ctn10":"2017-04-27 12:33:29","ctn11":"待处理","ctn12":"--"}'
            +',{"ctn1":"8","ctn2":"<span class=\'blue-color\'>OPER_20170427233324758</span>","ctn3":"春兴特钢公司发生设备离线报警，请查看原因，并及时处理","ctn4":"重要紧急","ctn5":"江苏省运维项目部","ctn6":"冯立刚","ctn7":"冯立刚","ctn8":"运维任务","ctn9":"2017-04-27 12:33:29","ctn10":"","ctn11":"待处理","ctn12":"--"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width: 8},
        { label: '任务编号', name: 'ctn2', align: "center", width: 20 },
        { label: '任务名称', name: 'ctn3', align: "center", width: 20 },
        { label: '紧急程度', name: 'ctn4', align: "center", width: 15 },
        { label: '项目部', name: 'ctn5', align: "center", width: 20 },
        { label: '发布人', name: 'ctn6', align: "center", width: 12 },
        { label: '责任人', name: 'ctn7', align: "center", width: 12 },
        { label: '任务类型', name: 'ctn8', align: "center", width: 15 },
        { label: '开始时间', name: 'ctn9', align: "center", width: 20 },
        { label: '完成时间', name: 'ctn10', align: "center", width: 20 },
        { label: '状态', name: 'ctn11', align: "center", width:13},
        { label: '操作', name: 'ctn12', align: "center", width: 12}
    ],
    viewrecords: true,
    width: F1_form_width,
    height: F1_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F1-form-pager"
});