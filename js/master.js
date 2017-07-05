/**
 * Created by Administrator on 2017/5/28.
 */
$(document).ready(function(){

$(window).resize(function(){
    sized();
   });

   $(function(){
        sized();
   })


    var w50h50 = $(".w50h50").height();
    w50h50 = (w50h50 -30-55)+'px';
    $(".text-col12").css({"height":w50h50});

    /****************tab切换效果开始*****************/
    $(".remoteul-li-tab1").addClass("remoteul-li-tabactive");
    /*$(".zhediebox2").hide();*/

    /****************tab切换效果结束*****************/

})


function sized(){
     var contentHeight = $(".content").height();
    contentHeight = (contentHeight - 70 - 30) + 'px';//.content的高
    $(".content").css({"height":contentHeight});

    var contentboxHeight =$(".content").height();
    function myBrowser(){
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (isOpera) {
            return "Opera"
        }; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        if (userAgent.indexOf("Chrome") > -1){
            return "Chrome";
        }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }; //判断是否IE浏览器
    }
    var mb = myBrowser();
        if ("IE" == mb) {
            var containerboxHeight = (contentboxHeight -32 -4) + 'px';
            $(".container-box").css({"height":containerboxHeight});
     }
     if ("FF" == mb) {
         var containerboxHeight = (contentboxHeight -32 -4) + 'px';
         $(".container-box").css({"height":containerboxHeight});
     }
    if ("Chrome" == mb) {
        var containerboxHeight = (contentboxHeight -20) + 'px';
        $(".container-box").css({"height":containerboxHeight});
        var containerboxHeight1 = (contentboxHeight -40) + 'px';
        $(".borrderno").css({"height":containerboxHeight1})
    }
        if ("Opera" == mb) {
            var containerboxHeight = (contentboxHeight -32 -4) + 'px';
            $(".container-box").css({"height":containerboxHeight});
     }
     if ("Safari" == mb) {
         var containerboxHeight = (contentboxHeight -32 -4) + 'px';
         $(".container-box").css({"height":containerboxHeight});
     }
}



