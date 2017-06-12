var map = new BMap.Map("map_container",{
    enableHighResolution: true //是否开启高清
});
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 11); //初始化地图
map.enableInertialDragging(); //开启关系拖拽
map.enableScrollWheelZoom();  //开启鼠标滚动缩放


var navCtrl = new BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_LEFT //设置鱼骨控件的位置
});
map.addControl(navCtrl);

