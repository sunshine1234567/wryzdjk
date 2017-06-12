

$("#list").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#list")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
            +',{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
            +',{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
            +',{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
            +',{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
            +',{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
            +',{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
            +',{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
            +',{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
            +',{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
            +',{ "区域名称":"1", "管理部":"2", "成员":"3", "巡检":"4", "维护":"5", "配件更换":"6", "试剂更换":"7", "校准":"8", "质控对比":"9", "废液回收":"10", "标气更换":"11", "合作":"12", "操作":"13" }'
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
    width: 1200,
    height: '100%',
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#pager",
    gridview: true,
   /* rownumbers: true,*/
    sortname: 'invdate',
    sortorder: 'desc',
    gridComplete: function() {
        //②在gridComplete调用合并方法
        var gridName = "list";
        Merger(gridName, '区域名称');
    }

});
jQuery("#list").jqGrid('setGroupHeaders', {
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