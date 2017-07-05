
var F1071_form_width = $('.F5-form').width();
var F1071_form_height = $('.F5-form').height()+1;
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F1071-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F1071-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{"ctn1":"<div class=\'bggrel\'>设备类型</div>","ctn2":"数采仪","ctn3":"<div class=\'bggrel\'>企业名称</div>","ctn4":"数采仪"}'
            +',{"ctn1":"<div class=\'bggrel\'>设备品牌</div>","ctn2":"智能环保数采仪","ctn3":"<div class=\'bggrel\'>设备型号</div>","ctn4":"W5100HB-III-Z"}'
            +',{"ctn1":"<div class=\'bggrel\'>生产商</div>","ctn2":"北京万维赢创科技发展有限公司","ctn3":"<div class=\'bggrel\'>生产商联系人</div>","ctn4":"闫涛"}'
            +',{"ctn1":"<div class=\'bggrel\'>联系电话</div>","ctn2":"15823982146","ctn3":"<div class=\'bggrel\'>联系邮箱</div>","ctn4":"yan_tao@wanweitech.com"}'
            +',{"ctn1":"<div class=\'bggrel\'>备注</div>","ctn2":"","ctn3":"<div class=\'bggrel\'>企业名称</div>","ctn4":"江苏春刚特有限公司"}'
            +',{"ctn1":"<div class=\'bggrel pictd\'>产品证书图片</div>","ctn2":"","ctn3":"<div class=\'bggrel\'></div>","ctn4":""}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colNames: ['ctn1', 'ctn2', 'ctn3','ctn4'],
    colModel: [
        { name: 'ctn1', index: 'ctn1', align: 'center',width:'60',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'ctn1' + rowId +"\'";
            }
        },
        { name: 'ctn2',   index: 'ctn2',   align: 'center',width:'120',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'ctn2' + rowId +"\'";
            }
        },
        { name: 'ctn3',     index: 'ctn3',     align: 'center',width:'60',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'ctn3' + rowId +"\'";
            }
        },
        { name: 'ctn4',     index: 'ctn4',     align: 'center',width:'120',
            cellattr: function(rowId, tv, rawObject, cm, rdata) {//合并单元格
                return 'id=\'ctn4' + rowId +"\'";
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
        Merger4(gridName, 'ctn2');
    }
});

function Merger4(gridName, CellName) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    /************************/
    $("#" + CellName + "" + mya[4] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[4], 'ctn3', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[4], 'ctn4', '', {
        display: 'none'
    });
    $("#" + CellName + "" + mya[0] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[0], 'ctn3', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[0], 'ctn4', '', {
        display: 'none'
    });
    $("#" + CellName + "" + mya[5] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[5], 'ctn3', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[5], 'ctn4', '', {
        display: 'none'
    });

}