
var sContent =
    "<div class='row' style='margin: 0'>" +
    "<div class='mapcol mapcolblue' style='border: none;'>基础信息</div>" +
    "<div class='mapcol'>数据走势</div>" +
    "<div class='mapcol'>数据传输率</div>" +
    "<div class='tablemap' style='float:left;width: 100%;height: 290px;'>" +
    "<table id='F15-form' class='f15form'>" +
    "<tr><td colspan='4' class='align-center'>运维信息</td></tr>"+
    "<tr><td class='f15td1' width='90'>排放状态</td><td width='110' class='f15td'>排放</td><td class='f15td1' width='70'>联网状态</td><td width='60' class='f15td'>在线</td></tr>"+
    "<tr><td class='f15td1''>最后一次运维时间</td><td  class='f15td'>2017-03-12 12:00:00</td><td class='f15td1'>运维活动</td><td class='f15td'>巡检</td></tr>"+
    "<tr><td class='f15td1''>运维结果</td><td class='f15td'>完成</td><td class='f15td1' width='70'>运维人员</td><td class='f15td'>冯璐</td></tr>"+
    "<tr><td colspan='4' class='align-center'>排放口信息</td></tr>"+
    "<tr><td class='f15td1'>地址</td><td class='f15td' colspan='3'>江苏省无锡市惠山区洛社镇</td></tr>"+
    "<tr><td class='f15td1'>控制类型</td><td class='f15td' colspan='3'>国控</td></tr>"+
    "<tr><td colspan='4' class='align-center'>最新数据</td></tr>"+
    "<tr><td class='f15td1'>时间</td><td  class='f15td'>2017-01-21 12::00:00</td><td class='f15td1 blue-color1'>氨气</td><td  class='f15td blue-color1'>0.456mg/l</td></tr>"+
    "<tr><td class='f15td1 blue-color1'>化学需氧量(CODcr)</td><td class='f15td blue-color1'>38.23</td><td class='f15td1 blue-color1' >废气流量</td><td  class='f15td blue-color1'>0.472mg/l</td></tr>"+
    "</table>"+
    "</div>"+
    "</div>";

map = new BMap.Map("map_container");
map.centerAndZoom(new BMap.Point(121.48,31.22), 5);
/*map.addControl(new BMap.MapTypeControl());*/
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

var data_info = [[121.48,31.22,"hang"], [113.23,23.16,"nan"],[108.95,34.27,"西安"],[104.06,30.67,"cheng"]];
var opts = {
    width : 490,     // 信息窗口宽度
    height: 340,     // 信息窗口高度
    title : "污水出口" , // 信息窗口标题
    left:0,
    top:0
    //enableMessage:true//设置允许信息窗发送短息
};
for(var i=0;i<data_info.length;i++){
    var tl = data_info[i][2];
    if (tl == "hang" || tl=="cheng"){
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon:new BMap.Icon("./img/map_icon_green.png", new BMap.Size(40,55))});  // 创建标注
    }else if(tl=="nan"){
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon:new BMap.Icon("./img/map_icon_red.png", new BMap.Size(40,55))});  // 创建标注
    }else if(tl=="西安"){
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon:new BMap.Icon("./img/map_icon_yellow.png", new BMap.Size(40,55))});  // 创建标注
    }
    var content = sContent;
    map.addOverlay(marker);               // 将标注添加到地图中
    addClickHandler(content,marker);
}
function addClickHandler(content,marker){
    marker.addEventListener("click",function(e){
        openInfo(content,e)}
    );
}
function openInfo(content,e){
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
   // var infoWindow = new BMap.InfoWindow(content);
    map.openInfoWindow(infoWindow,point); //开启信息窗口
}




















/*function ded(){
    alert("kkkkkkk")
}*/
/*
var json_data = [[116.404, 39.915],[116.383752,39.91334],[116.384502,39.932241]];
var pointArray = new Array();
for(var i=0;i<json_data.length;i++){
    var marker = new BMap.Marker(new BMap.Point(json_data[i][0], json_data[i][1]),{icon:new BMap.Icon("./img/link_red.png", new BMap.Size(100,100))}); // 创建点
    map.addOverlay(marker);    //增加点
    pointArray[i] = new BMap.Point(json_data[i][0], json_data[i][1]);
    marker.addEventListener("click",attribute);
}
//让所有点在视野范围内
map.setViewport(pointArray);
//获取覆盖物位置
function attribute(e){
    var p = e.target;
    console.log(p)
    alert("marker的位置是" + p.getPosition().lng + "," + p.getPosition().lat);
}*/
