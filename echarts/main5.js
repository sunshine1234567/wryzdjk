/**
 * Created by Administrator on 2017/5/31.
 */
var main5 = echarts.init(document.getElementById('main5'));
option5 = {
    title : {
        text: '运维活动次数',
        show:false
    },
    tooltip: {
        trigger: "axis",
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['完成','未完成'],
        y: 'bottom'
    },

    calculable: true,
    xAxis: [
        {
            type: "category",
            data: ["巡检", "维修", "配件更换", "试剂更换", "校准", "比对/质控", "废液回收", "标气更换"],
            axisLine: {
                show: true,
                lineStyle: {
                    width:0,
                    color: "rgb(224, 224, 224)"
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            show : true,//追加这一段可以强制x轴显示全部项
            axisLabel:{//追加这一段可以强制x轴显示全部项
                interval:0 ,
                formatter:function(val){
                    return val.split("0").join("\n");
                }
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            'name':'GDP（亿元）',
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgb(229, 229, 229)",
                    type: "solid"
                }
            },
            axisLine: {
                lineStyle:{
                    color:'#ffffff',
                    width:1//这里是为了突出显示加上的，可以去掉
                }
            }
        }
    ],
    series: [
        {
            name: "完成",
            type: "bar",
            barWidth : 28,
            data: [12, 14.9, 17, 23.2, 25.6, 36.7, 47, 62],
            barGap: 0.3,
            barCategoryGap: "50%"
        },
        {
            name: "未完成",
            type: "bar",
            barWidth : 28,
            data: [22.6, 25.9, 29, 26.4, 28.7, 20.7, 65, 34]
        }

    ],
    grid: {
        x: 85,
        y: 30,
        x2:0,
        y2:65
    },
    color: ["rgb(130, 200, 127)", "rgb(242, 156, 91)", "rgb(194, 53, 49)", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "rgb(255, 165, 0)", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "rgb(255, 215, 0)", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"]
};


main5.setOption(option5);