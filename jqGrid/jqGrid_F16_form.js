
var F16_form_width = $('.F5-form').width()+16;
var F16_form_height = $('.F5-form').height();
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
 $(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F16-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F16-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{"方格1":"<div class=\'bggre\'>排放状态</div>","方格2":"<div class=\'bggre\'>联网状态</div>","方格3":"<div class=\'bggre\'>废水</div>","方格4":"<div class=\'bggre\'>废水</div>","方格5":"<div class=\'bggre\'>废水</div>","方格6":"<div class=\'bggre\'>废气</div>","方格7":"<div class=\'bggre\'>废气</div>","方格8":"<div class=\'bggre\'>废气</div>","方格9":"<div class=\'bggre\'>合计</div>"}'
            +',{"方格1":"<div class=\'bggre\'>排放状态</div>","方格2":"<div class=\'bggre\'>联网状态</div>","方格3":"<div class=\'colorgreen bggre\'>正常</div>","方格4":"<div class=\'colorRed bggre\'>故障</div>","方格5":"<div class=\'coloryellow bggre\'>超标</div>","方格6":"<div class=\'colorgreen bggre\'>正常</div>","方格7":"<div class=\'colorRed bggre\'>故障</div>","方格8":"<div class=\'coloryellow bggre\'>超标</div>","方格9":"合计"}'
            +',{"方格1":"<div class=\'paifang\'>排放</div>","方格2":"<div class=\'wifi1\'>在线</div>","方格3":"5","方格4":"0","方格5":"2","方格6":"6","方格7":"7","方格8":"8","方格9":"9"}'
            +',{"方格1":"<div class=\'paifang\'>排放</div>","方格2":"<div class=\'wifi2\'>离线</div>","方格3":"1","方格4":"1","方格5":"1","方格6":"6","方格7":"7","方格8":"8","方格9":"9"}'
            +',{"方格1":"<div class=\'tingyun\'>停运</div>","方格2":"停运","方格3":"8","方格4":"8","方格5":"8","方格6":"6","方格7":"7","方格8":"8","方格9":"9"}'
            +',{"方格1":"总计","方格2":"总计","方格3":"6","方格4":"6","方格5":"6","方格6":"6","方格7":"7","方格8":"8","方格9":"9"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colNames: ['方格1', '方格2', '方格3','方格4','方格5','方格6','方格7','方格8','方格9'],
    colModel: [
        { name: '方格1', index: '方格1', align: 'center',width:'60',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格1' + rowId +"\'";
            }
        },
        { name: '方格2',   index: '方格2',   align: 'center',width:'60',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格2' + rowId +"\'";
            }
        },
        { name: '方格3',     index: '方格3',     align: 'center',width:'33',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格3' + rowId +"\'";
            }
        },
        { name: '方格4',     index: '方格4',     align: 'center',width:'33',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格4' + rowId +"\'";
            }
        },
        { name: '方格5',     index: '方格5',     align: 'center',width:'33',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格5' + rowId +"\'";
            }
        },
        { name: '方格6',     index: '方格6',     align: 'center',width:'33',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格6' + rowId +"\'";
            }
        },
        { name: '方格7',     index: '方格7',     align: 'center',width:'33',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格7' + rowId +"\'";
            }
        },
        { name: '方格8',     index: '方格8',     align: 'center',width:'33',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格8' + rowId +"\'";
            }
        },
        { name: '方格9',     index: '方格9',     align: 'center',width:'50',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格9' + rowId +"\'";
            }
        }
    ],
    viewrecords: true,
    width: F16_form_width,
    height: F16_form_height,
    rowNum: 20,
    rowList: [20,50,100],
   // shrinkToFit: true,
   // pager: "#F16-form-pager",
    shrinkToFit: true,
    gridview: true,
    /* rownumbers: true,*/
    sortname: 'invdate',
    sortorder: 'desc',
    gridComplete: function() {
        $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
        //②在gridComplete调用合并方法
        var gridName = "F16-form";
        Merger(gridName, '方格1');
        Merger3(gridName, '方格2');
        Merger3(gridName, '方格9');
        Merger2(gridName, '方格3');
        Merger4(gridName, '方格6');
        Merger5(gridName, '方格1');
    }
});

function Merger5(gridName, CellName) {
    var mya = $("#" + gridName + "").getDataIDs();
    $("#" + CellName + "" + mya[4] + "").attr("colspan", 2);
    $("#" + gridName + "").setCell(mya[4], '方格2', '', {
        display: 'none'
    });
    $("#" + CellName + "" + mya[5] + "").attr("colspan", 2);
    $("#" + gridName + "").setCell(mya[5], '方格2', '', {
        display: 'none'
    });
}



function Merger3(gridName, CellName) {
    var mya = $("#" + gridName + "").getDataIDs();
    $("#" + CellName + "" + mya[0] + "").attr("rowspan", 2);
    $("#" + gridName + "").setCell(mya[1], CellName, '', {
        display: 'none'
    });
}
function Merger4(gridName, CellName) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    /************************/
    $("#" + CellName + "" + mya[0] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[0], '方格7', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[0], '方格8', '', {
        display: 'none'
    });
    /************************/
    $("#" + CellName + "" + mya[3] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[3], '方格7', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[3], '方格8', '', {
        display: 'none'
    });
    /************************/
    /************************/
    $("#" + CellName + "" + mya[4] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[4], '方格7', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[4], '方格8', '', {
        display: 'none'
    });
    /************************/
    /************************/
    $("#" + CellName + "" + mya[5] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[5], '方格7', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[5], '方格8', '', {
        display: 'none'
    });
    /************************/
}

function Merger2(gridName, CellName) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    /************************/
    $("#" + CellName + "" + mya[0] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[0], '方格4', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[0], '方格5', '', {
        display: 'none'
    });
    /************************/
    $("#" + CellName + "" + mya[3] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[3], '方格4', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[3], '方格5', '', {
        display: 'none'
    });
    /************************/
    /************************/
    $("#" + CellName + "" + mya[4] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[4], '方格4', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[4], '方格5', '', {
        display: 'none'
    });
    /************************/
    /************************/
    $("#" + CellName + "" + mya[5] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[5], '方格4', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[5], '方格5', '', {
        display: 'none'
    });
    /************************/
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


/*jQuery("#F16-form").jqGrid('setGroupHeaders', {
 useColSpanStyle: true,
 groupHeaders:[
 {startColumnName: '方格3', numberOfColumns: 3, titleText: '运维活动'}
 ]
 });*/