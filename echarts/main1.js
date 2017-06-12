/**
 * Created by Administrator on 2017/5/31.
 */
var main1 = echarts.init(document.getElementById('main1'));
var labelTop = {
    lableLine:{
        normal:{show:false}
    },
    lable:{
        normal:{
            show:false
        }
    },
    normal : {
        color: '#54ae7a'
    }
};
var labelBottom = {
    lableLine:{
        normal:{show:false}
    },
    lable:{
        normal:{
            show:false
        }
    },
    normal : {
        color: '#b8b8b8'
    }
};
var labelFromatter = {
    emphasis:{//normal显示阴影,与shadow有关的都是阴影的设置
        shadowBlur:10,//阴影大小
        shadowOffsetX:3,//阴影水平方向上的偏移
        shadowColor:'rgba(0,0,0,1)'//阴影颜色
    }
};

var radius = [30, 50];
option1 = {
    legend: {
        orient : 'vertical',
        x : 'right',
        y : 'bottom',
        data:[
            '停运','启运'
        ]
    },
    title : {
        text: '启运率',
        x: 'center',
        y:10,
        textStyle: {
            fontFamily: 'Arial, Verdana',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 'normal'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {d}%"
    },
    series : [
        {
            type : 'pie',
            center : ['50%', '60%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'停运', value:10, itemStyle : labelBottom},
                {name:'启运', value:90,itemStyle : labelTop}
            ]
        }
    ]
};


main1.setOption(option1);