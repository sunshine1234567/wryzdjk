$(function(){
	/* ======= 超标报警查  询 ======= */
/*	$('.js-alarm-overproof-video').click(function(){
		BootstrapDialog.show({
		    title: "视频回放",
		    cssClass: 'dialog-430',
		    message: $("<div></div>").load("alarm_overproof_video.html"),
    	});
	});*/

	/*$('.js-alarm-overproof-sound').click(function(){
		BootstrapDialog.show({
		    title: "录音回放",
		    cssClass: 'dialog-430',
		    message: $("<div></div>").load("alarm_overproof_sound.html"),
    	});
	});*/
	/* ======= 添加设备说明书 ======= */
	$('.js-alarm-overproof-edit').click(function(){
		BootstrapDialog.show({
		    title: "添加设备说明书",
		    cssClass: 'dialog-330',
		    message: $("<div></div>").load("./add-device.html"),
		    buttons: [
				{
	                label: '确定',
	                action: function(dialog){
	                	dialog.close();
	                }
	            }, {
	                label: '返回',
	                action: function(dialogItself){
	                    dialogItself.close();
	                }
	            }
            ]
    	});
	});

	/* ======= 添加验收报告 ======= */
	$('.js-alarm-poweroff-edit').click(function(){
		BootstrapDialog.show({
		    title: "添加验收报告",
		    cssClass: 'dialog-330',
		    message: $("<div></div>").load("./add-personal.html"),
		    buttons: [
				{
	                label: '确定',
	                action: function(dialog){
	                	dialog.close();
	                }
	            }, {
	                label: '返回',
	                action: function(dialogItself){
	                    dialogItself.close();
	                }
	            }
            ]
    	});
	});

	/* ======= 添加物资出库单 ======= */
	$('.js-alarm-networking-edit').click(function(){
		BootstrapDialog.show({
		    title: "添加物资出库单",
		    cssClass: 'dialog-330 dialog-331',
		    message: $("<div></div>").load("./add-Material.html"),
		    buttons: [
				{
	                label: '确定',
	                action: function(dialog){
	                	dialog.close();
	                }
	            }, {
	                label: '返回',
	                action: function(dialogItself){
	                    dialogItself.close();
	                }
	            }
            ]
    	});
	});

	/* ======= 企业档案 ======= */
	$('.js-E1-city-site').click(function(){
		BootstrapDialog.show({
		    title: "企业档案",
		    cssClass: 'dialog-330 dialog-332',
		    message: $("<div></div>").load("./qiye.html")
    	});
	});

	/* ======= 设备档案详情 ======= */
	$('.js-E1-area-site').click(function(){
		BootstrapDialog.show({
		    title: "设备档案详情",
		    cssClass: 'dialog-330 dialog-332',
		    message: $("<div></div>").load("qiye2.html")
    	});
	});

	/* ======= 设备档案详情 ======= */
	$('.js-E1-people-site').click(function(){
		BootstrapDialog.show({
			title: "设备档案详情",
			cssClass: 'dialog-330 dialog-332',
			message: $("<div></div>").load("peo.html")
		});
	});
/*

	/!* ======= 数据分析-工地 ======= *!/
	$('.js-E1-plant-site').click(function(){
		BootstrapDialog.show({
		    title: "河北废气监测点1",
		    cssClass: 'dialog-330',
		    message: $("<div></div>").load("data_ranking_plant_site.html")
    	});
	});

	/!* ======= 数据分析-监测点 ======= *!/
	$('.js-E1-site-site').click(function(){
		BootstrapDialog.show({
		    title: "河北废气监测点1",
		    cssClass: 'dialog-330',
		    message: $("<div></div>").load("data_ranking_site_site.html")
    	});
	});

	/!* ======= 数据分析-对比 ======= *!/
	$('.js-E2-city-add').click(function(){
		BootstrapDialog.show({
		    title: "市添加",
		    cssClass: 'dialog-330',
		    message: $("<div></div>").load("data_contrast_city.html"),
		    buttons: [
				{
	                label: '确定',
	                action: function(dialog){
	                	dialog.close();
	                }
	            }, {
	                label: '返回',
	                action: function(dialogItself){
	                    dialogItself.close();
	                }
	            }
            ]
    	});
	});

	$('.js-E2-area-add').click(function(){
		BootstrapDialog.show({
		    title: "县/区添加",
		    cssClass: 'dialog-330',
		    message: $("<div></div>").load("data_contrast_area.html"),
		    buttons: [
				{
	                label: '确定',
	                action: function(dialog){
	                	dialog.close();
	                }
	            }, {
	                label: '返回',
	                action: function(dialogItself){
	                    dialogItself.close();
	                }
	            }
            ]
    	});
	});

	$('.js-E2-plant-add').click(function(){
		BootstrapDialog.show({
		    title: "工地添加",
		    cssClass: 'dialog-330',
		    message: $("<div></div>").load("data_contrast_plant.html"),
		    buttons: [
				{
	                label: '确定',
	                action: function(dialog){
	                	dialog.close();
	                }
	            }, {
	                label: '返回',
	                action: function(dialogItself){
	                    dialogItself.close();
	                }
	            }
            ]
    	});
	});
*/

/*	$('.js-E2-site-add').click(function(){
		BootstrapDialog.show({
		    title: "监测点添加",
		    cssClass: 'dialog-330',
		    message: $("<div></div>").load("data_contrast_site.html"),
		    buttons: [
				{
	                label: '确定',
	                action: function(dialog){
	                	dialog.close();
	                }
	            }, {
	                label: '返回',
	                action: function(dialogItself){
	                    dialogItself.close();
	                }
	            }
            ]
    	});
	});*/






















});
































