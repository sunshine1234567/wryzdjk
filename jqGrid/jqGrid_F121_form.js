
var F121_form_width = $('.F5-form').width();
var F121_form_height = $('.F5-form').height()-120;
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
 $(".overhiddenBox").css({"height":overhiddenBoxHeight});*/

$("#F121-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F121-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{ "区域名称":"演示区域", "管理部":"演示项目部", "成员":"演示用户-运维", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"<a>详情</a>" }'
            +',{ "区域名称":"网络测试", "管理部":"演示项目部", "成员":"演示用户-运维", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"<a>详情</a>" }'
            +',{ "区域名称":"昌平<br>丰台<br>顺义", "管理部":"昌平项目部", "成员":"杨宇飞", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"<a>详情</a>" }'
            +',{ "区域名称":"昌平<br>丰台<br>顺义", "管理部":"昌平项目部", "成员":"朱杰", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"<a>详情</a>" }'
            +',{ "区域名称":"昌平<br>丰台<br>顺义", "管理部":"昌平项目部", "成员":"孙磊", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"<a>详情</a>" }'
            +',{ "区域名称":"昌平<br>丰台<br>顺义", "管理部":"昌平项目部", "成员":"高扬", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"<a>详情</a>" }'
            +',{ "区域名称":"昌平<br>丰台<br>顺义", "管理部":"昌平项目部", "成员":"周毅", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"<a>详情</a>" }'
            +',{ "区域名称":"昌平<br>丰台<br>顺义", "管理部":"昌平项目部", "成员":"刘岩", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"<a>详情</a>" }'
            +',{ "区域名称":"昌平<br>丰台<br>顺义", "管理部":"昌平项目部", "成员":"孙俊", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"<a>详情</a>" }'
            +',{ "区域名称":"昌平<br>丰台<br>顺义", "管理部":"昌平项目部", "成员":"朱鹏", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"<a>详情</a>" }'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colNames: ['区域名称', '管理部', '成员', '巡检', '维护','配件更换','试剂更换','校准','质控对比','废液回收','标气更换','合作','操作'],
    colModel: [
        { name: '区域名称', index: '区域名称', align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'区域名称' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '管理部',   index: '管理部',   align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'管理部' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '成员',     index: '成员',     align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'成员' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '巡检',     index: '巡检',     align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'巡检' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '维护',     index: '维护',     align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'维护' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '配件更换', index: '配件更换', align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'配件更换' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '试剂更换', index: '试剂更换', align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'试剂更换' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '校准',     index: '校准',     align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'校准' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '质控对比', index: '质控对比', align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'质控对比' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '废液回收', index: '废液回收', align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'废液回收' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '标气更换', index: '标气更换', align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'标气更换' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '合作',     index: '合作',     align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'合作' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        },
        { name: '操作',     index: '校准',     align: 'center',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'操作' + rowId + "\'";//if (Number(rowId) < 5) { return ' colspan=2' }
            }
        }
    ],
    viewrecords: true,
    width: F121_form_width,
    height: F121_form_height,
    rowNum: 10,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#F121-form-pager",
    gridview: true,
    /* rownumbers: true,*/
    sortname: 'invdate',
    sortorder: 'desc',
    gridComplete: function() {
        //②在gridComplete调用合并方法
        var gridName = "F121-form";
        Merger(gridName, '区域名称');
        Merger(gridName, '管理部');
        Merger(gridName, '成员');
        Merger2(gridName, '巡检',0,2);
        Merger2(gridName, '维护',0,2);
        Merger2(gridName, '配件更换',0,2);
        Merger2(gridName, '试剂更换',0,2);
        Merger2(gridName, '校准',0,2);
        Merger2(gridName, '质控对比',0,2);
        Merger2(gridName, '废液回收',0,2);
        Merger2(gridName, '标气更换',0,2);
        Merger2(gridName, '合作',0,2);
        Merger2(gridName, '操作',0,2);
    }

});
jQuery("#F121-form").jqGrid('setGroupHeaders', {
    useColSpanStyle: true,
    groupHeaders:[
        {startColumnName: '巡检', numberOfColumns: 9, titleText: '运维活动'}
    ]
});
//公共调用方法
//公共调用方法
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
function Merger2(gridName, CellName,strat,end) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    $("#" + CellName + "" + mya[strat] + "").attr("rowspan", end);


}