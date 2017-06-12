// ======= 数据一览-监测点列表 ======= //
var A3_first_setting = {
	data: {
		simpleData: {
			enable: true
		}
	}
};
var A3_first_zNodes =[
	{ id:1, pId:0, name:"全部（1/23）", open:true},
	{ id:11, pId:1, name:"北京（0/9）",isParent:true,open:true},
	{ id:111, pId:11, name:"废水企业",isParent:true,open:true},
	{ id:1111, pId:111, name:"废水排口", iconSkin:"red"},
	{ id:1112, pId:111, name:"废水排口", iconSkin:"green"},
	{ id:1113, pId:111, name:"废水排口", iconSkin:"yellow"},
	{ id:1114, pId:111, name:"废水排口", iconSkin:"black"},
	{ id:12, pId:1, name:"天津",isParent:true,open:true},
	{ id:121, pId:12, name:"山西废水",isParent:true,open:true},
	{ id:1211, pId:121, name:"废水排口", iconSkin:"grer"},
	{ id:1211, pId:121, name:"废水排口", iconSkin:"yelloww"},
	{ id:1211, pId:121, name:"废水排口", iconSkin:"greene"},
	{ id:1211, pId:121, name:"废水排口", iconSkin:"gre"},
	{ id:13, pId:1, name:"河北区域", isParent:true,open:false},
	{ id:14, pId:1, name:"江苏区域", isParent:true,open:false}

];
/*
var A3_first_zNodes =[
	{ id:1, pId:0, name:"全部", open:true},
	{ id:11, pId:1, name:"廊坊", open:true, iconSkin:"house"},
	{ id:111, pId:11, name:"工地三", open:true, iconSkin:"none"},
	{ id:1111, pId:111, name:"河北废弃监测点5", iconSkin:"grey"},
	{ id:1112, pId:111, name:"河北废弃监测点6", iconSkin:"yellow"},
	{ id:1113, pId:111, name:"河北废弃监测点7", iconSkin:"red"},
	{ id:1114, pId:111, name:"河北废弃监测点8", iconSkin:"green"},
	{ id:112, pId:11, name:"工地二", iconSkin:"none"},
	{ id:1121, pId:112, name:"河北废弃监测点4", iconSkin:"green"},
	{ id:113, pId:11, name:"工地一", iconSkin:"none"},
	{ id:1131, pId:113, name:"河北废弃监测点1", iconSkin:"yellow"},
	{ id:1132, pId:113, name:"河北废弃监测点2", iconSkin:"red"},
	{ id:1133, pId:113, name:"河北废弃监测点3", iconSkin:"green"},
	{ id:12, pId:1, name:"承德", iconSkin:"house"},
	{ id:121, pId:12, name:"工地四", iconSkin:"none"},
	{ id:1211, pId:121, name:"河北废弃监测点10", iconSkin:"green"},
	{ id:2, pId:0, name:"北京", iconSkin:"earth"},
	{ id:21, pId:2, name:"海淀区", iconSkin:"house"},
	{ id:211, pId:21, name:"工地一", iconSkin:"none"},
	{ id:2111, pId:211, name:"北京一厂监测点1", iconSkin:"grey"},
	{ id:22, pId:2, name:"昌平区", iconSkin:"house"},
	{ id:221, pId:22, name:"工地二", iconSkin:"none"},
	{ id:2211, pId:221, name:"北京一厂监测点2", iconSkin:"red"},
	{ id:2212, pId:221, name:"北京一厂监测点3", iconSkin:"green"}
];*/

function showIconForTree(treeId, treeNode) {
	return !treeNode.isParent;
};

$(function(){
	$.fn.zTree.init($("#A3-first-tree"), A3_first_setting, A3_first_zNodes);
});

// ======= 数据一览-车载监测列表 ======= //
var A3_second_setting = {
	view: {
		showIcon: false
	},
	data: {
		simpleData: {
			enable: true
		}
	}
};

var A3_second_zNodes =[
	{ id:1, pId:0, name:"天津车载"},
	{ id:11, pId:1, name:"天津1"},
	{ id:12, pId:1, name:"天津2"},
	{ id:2, pId:0, name:"保定车载"},
	{ id:21, pId:2, name:"保定1"},
	{ id:22, pId:2, name:"保定2"},
	{ id:3, pId:0, name:"北京车载"},
	{ id:31, pId:3, name:"北京1"},
	{ id:32, pId:3, name:"北京2"}
];

function showIconForTree(treeId, treeNode) {
	return !treeNode.isParent;
};

$(function(){
	$.fn.zTree.init($("#A3-second-tree"), A3_second_setting, A3_second_zNodes);
});