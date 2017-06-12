
var F7_form_width = $('.F5-form').width();
var F7_form_height = $('.F5-form').height();
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
 $(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F7-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F7-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{"方格1":"品牌型号","方格2":"品牌型号","方格3":"<div class=\'bgf7\'>万维盈创-W5100HB-III-Z</div>"}'
            +',{"方格1":"仪器仪表总运行状态","方格2":"仪器仪表总运行状态","方格3":"<div class=\'bgf7 icongreen\'>正常</div>"}'
            +',{"方格1":"监测数据","方格2":"废气流量","方格3":"<div class=\'bgf7\'>11.009 m3/s</div>"}'
            +',{"方格1":"监测数据","方格2":"二氧化硫","方格3":"<div class=\'bgf7\'>24.948 mg/m3</div>"}'
            +',{"方格1":"监测数据","方格2":"氮氧化物","方格3":"<div class=\'bgf7\'>24.948 mg/m3</div>"}'
            +',{"方格1":"运行状态","方格2":"供电状态","方格3":"<div class=\'bgf7 icongreen\'>正常</div>"}'
            +',{"方格1":"运行状态","方格2":"在线状态","方格3":"<div class=\'bgf7 icongreen\'>离线</div>"}'
            +',{"方格1":"运行状态","方格2":"内核状态","方格3":"<div class=\'bgf7 icongreen\'>正常</div>"}'
            +',{"方格1":"运行状态","方格2":"信号状态","方格3":"<div class=\'bgf7 icongreen\'>正常</div>"}'
            +',{"方格1":"运行状态","方格2":"仪器通讯状态","方格3":"<div class=\'bgf7 icongreen\'>正常</div>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colNames: ['方格1', '方格2', '方格3'],
    colModel: [
        { name: '方格1', index: '方格1', align: 'center',width:'20',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格1' + rowId +"\'";
            }
        },
        { name: '方格2',   index: '方格2',   align: 'center',width:'30',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格2' + rowId +"\'";
            }
        },
        { name: '方格3',     index: '方格3',     align: 'center',width:'50',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格3' + rowId +"\'";
            }
        }
    ],
    viewrecords: true,
    width: F7_form_width,
    height: F7_form_height,
    rowNum: 20,
    rowList: [20,50,100],
   // shrinkToFit: true,
    pager: "#F7-form-pager",
    shrinkToFit: true,
    gridview: true,
    /* rownumbers: true,*/
    sortname: 'invdate',
    sortorder: 'desc',
    gridComplete: function() {
        $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
        //②在gridComplete调用合并方法
        var gridName = "F7-form";
        Merger(gridName, '方格1');
        Merger2(gridName, '方格1');
    }
});
function Merger2(gridName, CellName,CellName2) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    console.log(mya)
    $("#" + CellName + "" + mya[0] + "").attr("colspan", 2);
    $("#" + CellName + "" + mya[1] + "").attr("colspan", 2);
    $("#" + gridName + "").setCell(mya[0], '方格2', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[1], '方格2', '', {
        display: 'none'
    });
}
function Merger(gridName, CellName) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    //当前显示多少条
    var length = mya.length;
    for (var i = 0; i < length; i++) {
        //从上到下获取一条信息
        var before = $("#" + gridName + "").jqGrid('getRowData', mya[i]);
        //定义合并行数
        var rowSpanTaxCount = 1;
        for (j = i + 1; j <= length; j++) {
            //和上边的信息对比 如果值一样就合并行数+1 然后设置rowspan 让当前单元格隐藏
            var end = $("#" + gridName + "").jqGrid('getRowData', mya[j]);
            if (before[CellName] == end[CellName]) {
                rowSpanTaxCount++;
                $("#" + gridName + "").setCell(mya[j], CellName, '', {
                    display: 'none'
                });
            } else {
                rowSpanTaxCount = 1;
                break;
            }
            $("#" + CellName + "" + mya[i] + "").attr("rowspan", rowSpanTaxCount);
        }
    }
}
