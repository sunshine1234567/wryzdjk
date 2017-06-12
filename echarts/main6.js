/**
 * Created by Administrator on 2017/5/31.
 */
var main6 = echarts.init(document.getElementById('main6'));
option09 = {
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

option6 = {
    tooltip: {
        trigger: "axis",
        backgroundColor: 'rgba(0,0,0,0.7)',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',        // 默认为直线，可选为：'line' | 'shadow'
            lineStyle: {
                width: 1,
                type: "dashed"//虚线
            }
        }
    },
    legend: {
        data:['巡检','维修','配件更换'],
        y: 'bottom'
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["4.1", "4.2", "4.3", "4.4","4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: "rgb(224, 224, 224)"
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgb(229, 229, 229)",
                    type: "solid"
                }
            },
            axisLine: {
                lineStyle:{
                    color:'#dedede',
                    width:1//这里是为了突出显示加上的，可以去掉
                }
            }
        }
    ],
    series: [
        {
            name: "巡检",
            type: "line",
            data: [10, 12, 20, 40,32, 40, 60, 70, 75, 80],
            smooth: true,
            symbol: "circle",
            symbolSize:2,
          /*  markPoint:{
                clickable: false,
                symbol: "circle",
                symbolSize: 4
            },*/
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: "solid",
                        width: 1
                    }
                }
            }
        },
        {
            name: "维修",
            type: "line",
            data: [20, 30, 30, 55, 58, 40, 30, 30, 28, 84],
            symbol: "circle",
            symbolSize:2,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: "solid",
                        width: 1
                    }

                }
            }
        },
        {
            type: "line",
            name: "配件更换",
            data: [0, 18, 17, 8, 8, 2, 12, 2, 10, 9],
            symbol: "circle",
            smooth: true,
            symbolSize:2,
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: "solid",
                        width: 1
                    }
                }
            }
        }

    ],
    grid: {
        x: 85,
        y: 30,
        x2:10,
        y2:65
    },
    color: ["#72b5f3", "#535353",  "#32b16c", "#f29b76", "#c490bf", "#e4007f", "#ba55d3", "#cd5c5c", "rgb(255, 165, 0)", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "rgb(255, 215, 0)", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"]
};

main6.setOption(option6);