/**
 * Created by Administrator on 2017/5/31.
 */
var main4 = echarts.init(document.getElementById('main4'));
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
        color: '#bc0505'
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
        color: '#df0404'
    }
};
var labelW = {
    lableLine:{
        normal:{show:false}
    },
    lable:{
        normal:{
            show:false
        }
    },
    normal : {
        color: '#e5004f'
    }
};
var labelT = {
    lableLine:{
        normal:{show:false}
    },
    lable:{
        normal:{
            show:false
        }
    },
    normal : {
        color: '#db6b73'
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
option4 = {
    legend: {
        orient : 'vertical',
        x : 'right',
        y : 'bottom',
        data:[
            '联网报警','数据超标报警','数采仪故障报警','分析仪器故障报警'
        ]
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {d}%"
    },
/*    title : {
        text: '数据传输率',
        x: 'center',
        y:10,
        textStyle: {
            fontFamily: 'Arial, Verdana',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 'normal'
        }
    },*/
    series : [
        {
            type : 'pie',
            center : ['50%', '60%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'联网报警', value:20, itemStyle : labelBottom},
                {name:'数据超标报警', value:30,itemStyle : labelTop},
                {name:'数采仪故障报警', value:35, itemStyle : labelW},
                {name:'分析仪器故障报警', value:15,itemStyle : labelT}
            ]
        }
    ]
};

main4.setOption(option4);