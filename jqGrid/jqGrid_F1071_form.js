
var F1071_form_width = $('.F5-form').width();
var F1071_form_height = $('.F5-form').height()+1;
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F1071-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F1071-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{"方格1":"<div class=\'bggrel\'>设备类型</div>","方格2":"江苏省","方格3":"<div class=\'bggrel\'>企业名称</div>","方格4":"江苏春刚特有限公司"}'
            +',{"方格1":"<div class=\'bggrel\'>设备品牌</div>","方格2":"江苏省","方格3":"<div class=\'bggrel\'>设备型号</div>","方格4":"江苏春刚特有限公司"}'
            +',{"方格1":"<div class=\'bggrel\'>生产商</div>","方格2":"江苏省","方格3":"<div class=\'bggrel\'>生产商联系人</div>","方格4":"江苏春刚特有限公司"}'
            +',{"方格1":"<div class=\'bggrel\'>联系电话</div>","方格2":"江苏省","方格3":"<div class=\'bggrel\'>联系邮箱</div>","方格4":"江苏春刚特有限公司"}'
            +',{"方格1":"<div class=\'bggrel\'>备注</div>","方格2":"江苏省","方格3":"<div class=\'bggrel\'>企业名称</div>","方格4":"江苏春刚特有限公司"}'
            +',{"方格1":"<div class=\'bggrel pictd\'>产品证书图片</div>","方格2":"","方格3":"<div class=\'bggrel\'></div>","方格4":""}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colNames: ['方格1', '方格2', '方格3','方格4'],
    colModel: [
        { name: '方格1', index: '方格1', align: 'center',width:'60',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格1' + rowId +"\'";
            }
        },
        { name: '方格2',   index: '方格2',   align: 'center',width:'120',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格2' + rowId +"\'";
            }
        },
        { name: '方格3',     index: '方格3',     align: 'center',width:'60',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格3' + rowId +"\'";
            }
        },
        { name: '方格4',     index: '方格4',     align: 'center',width:'120',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'方格4' + rowId +"\'";
            }
        }
    ],
    viewrecords: true,
    width:1086,
    height: F1071_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    //pager: "#F107-form-pager"
    gridComplete: function() {
        $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
        //②在gridComplete调用合并方法
        var gridName = "F1071-form";
        Merger4(gridName, '方格2');
    }
});

function Merger4(gridName, CellName) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    /************************/
    $("#" + CellName + "" + mya[4] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[4], '方格3', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[4], '方格4', '', {
        display: 'none'
    });
    $("#" + CellName + "" + mya[0] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[0], '方格3', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[0], '方格4', '', {
        display: 'none'
    });
    $("#" + CellName + "" + mya[5] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[5], '方格3', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[5], '方格4', '', {
        display: 'none'
    });

}