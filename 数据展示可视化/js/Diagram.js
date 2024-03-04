var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, '', {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'axis',
	confine:true,
    axisPointer: {
      type: 'shadow'
    },
	backgroundColor:'#072456',
	borderColor:'#072355',
	borderWidth:'1',
	textStyle:{
		color:'#ffffff'
		},
	extraCssText:'box-shadow: 0 0 5px #000000;border-radius:0;'
	},

  legend: {
	  textStyle: {
      color: '#ffffff'
	  }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      data: ['数据一', '数据一', '数据一', '数据一'],
      axisLabel: {
        formatter: '{value} ',
        textStyle:{
          color:'#ffffff'
        }
      }, 
      },
  ],
  yAxis: [
    {
      type: 'value',
      name: '',
      min: 0,
      max: 30,
      interval: 10,
      axisLabel: {
        formatter: '{value} ',
        textStyle:{
          color:'#0068ca'
        }
      }, 
      splitLine:{
        show:false,
        lineStyle:{
          color:'#38506f'
        }
      }
    },
    {
      type: 'value',
      name: '',
      min: 0,
      max: 5,
      interval: 5,
      axisLabel: {
        formatter: '{value} ',
        textStyle:{
          color:'#0068ca'
        }
      }, 
      splitLine:{
        show:false,
        lineStyle:{
          color:'#38506f'
        }
      }
    }
  ],
  series: [
    {
      name: '数据一',
      type: 'bar',
	  barWidth:'25%',
      tooltip: {
        valueFormatter: function (value) {
          return value + '';
        }
      },
      itemStyle: {
        borderColor:'#80eaff',
        shadowColor: 'rgba(50, 201, 232)',
        shadowBlur: 10,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#0092b1' },
          { offset: 1, color: '#47e1ff' }
        ])
      },
      emphasis: {
        itemStyle: {
        borderColor:'#00d5ff',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#76e7ff' },
            { offset: 1, color: '#76e7ff' }
          ])
        },
      },
      label:{
          normal:{
            show:true,
            position:"top",
			color:'#ffffff'
          }
        },
      data: [
        2.0, 4.9, 7.0, 23.2
      ]
    },
    {
      name: '数据二',
      type: 'bar',
	  barWidth:'25%',
      tooltip: {
        valueFormatter: function (value) {
          return value + '';
        }
      },
      itemStyle: {
        borderColor:'#ff58e9',
        shadowColor: 'rgba(192, 12, 226)',
        shadowBlur: 10,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#790ea6' },
          { offset: 1, color: '#ff58e9' }
        ])
      },
      emphasis: {
        itemStyle: {
        borderColor:'#e200c4',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#ffbbf6' },
            { offset: 1, color: '#ffbbf6' }
          ])
        }
      },
      label:{
          normal:{
            show:true,
            position:"top",
			color:'#ffffff'
          }
        },
      data: [
        2.6, 5.9, 9.0, 26.4
      ]
    },
    {
      name: '数据三',
      type: 'line',
      yAxisIndex: 1,
      symbolSize: 12,
      tooltip: {
        valueFormatter: function (value) {
          return value + '';
        }
      },
      lineStyle:{
        width:3,
        color:'#fcff00',
      },
      itemStyle:{
        shadowColor: 'rgba(255, 255, 0)',
        shadowBlur: 10,
        borderWidth:3,
        backgroundColor:'#d2a300',
        color:'#d2a300',
        borderColor:'#ffff00'
      },
      label:{
          normal:{
            show:true,
            position:"top",
            color:'#ffea00',
          }
        },
      data: [2.0, 2.2, 3.3, 4.5]
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);