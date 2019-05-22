import * as echarts from '../../components/ec-canvas/echarts';

const app = getApp();


Page({
  onShareAppMessage: function (res) {

  },
  data: {
    toView: 'red',
    scrollTop: 100,
    toView2: 'red',
    scrollTop2: 100,
    echarts:echarts,
    ec: {
     
    }
  },
  init(){
    
    this.ecComponent.init((canvas, width, height) => {
        // 获取组件的 canvas、width、height 后的回调函数
        // 在这里初始化图表
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        chart.setOption(this.getOption());
  
        // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
        this.chart = chart;
  
       
  
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
  },
  init2(){
    
    this.ecComponent2.init((canvas, width, height) => {
        // 获取组件的 canvas、width、height 后的回调函数
        // 在这里初始化图表
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        chart.setOption(this.getOption2());
  
        // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
        this.chart2 = chart;
  
       
  
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
  },
  init3(){
    
    this.ecComponent3.init((canvas, width, height) => {
        // 获取组件的 canvas、width、height 后的回调函数
        // 在这里初始化图表
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        chart.setOption(this.getOption3());
  
        // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
        this.chart2 = chart;
  
       
  
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
  },
  init4(){
    
    this.ecComponent4.init((canvas, width, height) => {
        // 获取组件的 canvas、width、height 后的回调函数
        // 在这里初始化图表
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        chart.setOption(this.getOption4());
  
        // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
        this.chart2 = chart;
  
       
  
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
  },
  getOption4(){
   var option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            itemStyle: {
                normal: {
                    color: this.data.echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    color: this.data.echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        
    ]
};
    return option
  },
  getOption2(){
    var option = {
      
        tooltip: {
            trigger: 'item',
            formatter: "{a} \n {b}: {c} ({d}%)"
        },
        color:['#ffa300', "#1979FF"],
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                ]
            }
        ]
    };
    return option
  },
  getOption(){
    var option = {
        grid: {
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          // show: false
        },
        yAxis: {
          x: 'center',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
          // show: false
        },
        series: [{
          name: 'A',
          type: 'line',
          smooth: true,
        //   areaStyle: {},
          itemStyle: {
            normal: {
                color: '#eff5ff',
                lineStyle:{    
                    color:'#1979FF'    
                }   
            }
        },
        areaStyle: {
            normal: {
                color:  this.data.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'red'
                }, {
                    offset: 1,
                    color: 'yellow'
                }])
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 1,
                shadowOffsetY: 1
            }
        },
          data: [18, 36, 65, 30, 78, 40, 33]
        }]
      };
      return option
  },
  getOption3(){
    var option = {
        grid: {
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          // show: false
        },
        yAxis: {
          x: 'center',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
          // show: false
        },
        series: [{
          name: 'A',
          type: 'line',
          smooth: true,
        //   areaStyle: {},
          itemStyle: {
            normal: {
                color: '#c8fad1',
                lineStyle:{    
                    color:'#24C445'    
                }   
            }
        },
        areaStyle: {
            normal: {
                color:  this.data.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'red'
                }, {
                    offset: 1,
                    color: 'yellow'
                }])
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 1,
                shadowOffsetY: 1
            }
        },
          data: [18, 36, 65, 30, 78, 40, 33]
        }]
      };
      return option
  },
  onShow(){
     
      this.ecComponent = this.selectComponent('#mychart-dom-line');
      this.ecComponent3 = this.selectComponent('#mychart-dom-line3');
      this.ecComponent2 = this.selectComponent('#mychart-dom-line2');
      this.ecComponent4 = this.selectComponent('#mychart-dom-line4');
      this.init()
      this.init3()
      this.init2()
      this.init4()
       
  },
  click(){
   
  },
  onReady() {
  
  },
  upper(){
        console.log("upper")
  },
  lower(){
    console.log("lower")
  },
  scroll(){
    console.log("scroll")
  },
  upper2(){
    console.log("upper")
},
lower2(){
console.log("lower")
},
scroll2(){
console.log("scroll")
}
});
