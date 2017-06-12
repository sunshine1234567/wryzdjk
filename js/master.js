/**
 * Created by Administrator on 2017/5/28.
 */
$(document).ready(function(){

    var contentHeight = $(".content").height();
    contentHeight = (contentHeight - 70 - 30) + 'px';//.content的高
    $(".content").css({"height":contentHeight});

    var contentboxHeight =$(".content").height();
    var containerboxHeight = (contentboxHeight -32 -4) + 'px';
    $(".container-box").css({"height":containerboxHeight});

    var w50h50 = $(".w50h50").height();
    w50h50 = (w50h50 -30-55)+'px';
    $(".text-col12").css({"height":w50h50});

    /****************tab切换效果开始*****************/
    $(".remoteul-li-tab1").addClass("remoteul-li-tabactive");
    $(".zhediebox2").hide();

    /****************tab切换效果结束*****************/

})
/****************tab切换效果开始*****************/
    function zhefc(){
        $(".zhediebox2").hide();
        $(".zhediebox1").show();
        $(".remoteul-li-tab1,.remoteul-li-tab2").removeClass("remoteul-li-tabactive");
        $(".remoteul-li-tab1").addClass("remoteul-li-tabactive");
    }
function zhefc2(){
    $(".zhediebox1").hide();
    $(".zhediebox2").show();
    $(".remoteul-li-tab1,.remoteul-li-tab2").removeClass("remoteul-li-tabactive");
    $(".remoteul-li-tab2").addClass("remoteul-li-tabactive");
}
/****************tab切换效果结束*****************/






