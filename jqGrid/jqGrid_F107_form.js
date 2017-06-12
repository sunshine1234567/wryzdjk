
var F107_form_width = $('.F5-form').width();
var F107_form_height = $('.F5-form').height()-165;
/*var overhiddenBoxHeight = (F4_form_height + 80) + 'px';
$(".overhiddenBox").css({"height":overhiddenBoxHeight});*/
$("#F107-form").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#F107-form")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            + '{"方格1":"<div class=\'bggrel\'>所属区域</div>","方格2":"江苏省","方格3":"<div class=\'bggrel\'>企业名称</div>","方格4":"江苏春刚特有限公司"}'
            +',{"方格1":"<div class=\'bggrel\'>企业简称</div>","方格2":"春兴特钢","方格3":"<div class=\'bggrel\'>组织机构代码</div>","方格4":"004"}'
            +',{"方格1":"<div class=\'bggrel\'>行业</div>","方格2":"阴鹏","方格3":"<div class=\'bggrel\'>法人代表</div>","方格4":""}'
            +',{"方格1":"<div class=\'bggrel\'>企业地址</div>","方格2":"江苏省张家潜东沙化工集中区","方格3":"<div class=\'bggrel\'>企业名称</div>","方格4":"江苏春刚特有限公司"}'
            +',{"方格1":"<div class=\'bggrel\'>邮编</div>","方格2":"225300","方格3":"<div class=\'bggrel\'>传真</div>","方格4":"0523-8076234"}'
            +',{"方格1":"<div class=\'bggrel\'>联系人</div>","方格2":"刘庆芳","方格3":"<div class=\'bggrel\'>联系方式</div>","方格4":"15967492351"}'
            +',{"方格1":"<div class=\'bggrel\'>排放类别</div>","方格2":"废气","方格3":"<div class=\'bggrel\'>控制级别</div>","方格4":"国控"}'
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
    width:1085,
    height: F107_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    //pager: "#F107-form-pager"
    gridComplete: function() {
        $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
        //②在gridComplete调用合并方法
        var gridName = "F107-form";
        Merger4(gridName, '方格2');
    }
});

function Merger4(gridName, CellName) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    /************************/
    $("#" + CellName + "" + mya[3] + "").attr("colspan", 3);
    $("#" + gridName + "").setCell(mya[3], '方格3', '', {
        display: 'none'
    });
    $("#" + gridName + "").setCell(mya[3], '方格4', '', {
        display: 'none'
    });


}