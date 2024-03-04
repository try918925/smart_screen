var dom = document.getElementById('chart-container2');
var myChart = echarts.init(dom, '', {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};
var option;
option = {
  tooltip: {
    trigger: 'axis',
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
	  }},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
	  axisLabel: {
        formatter: '{value} ',
        textStyle:{
          color:'#ffffff'
        },
        rotate : -45 
      },
      data: ['数据一', '数据一', '数据一', '数据一', '数据一', '数据一', '数据一','数据一','数据一','数据一','数据一']
    }
  ],
  yAxis: [
    {
      type: 'value',
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
  ],
  series: [
    {
      name: '数据一',
      type: 'bar',
	  barWidth:'40%',
      stack: 'Ad',
      itemStyle: {
        borderColor:'#ffa462',
        shadowColor: 'rgba(29, 231, 144)',
        shadowBlur: 10,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#e83700' },
          { offset: 1, color: '#e36d04' }
        ])
      },
      emphasis: {
        itemStyle: {
          shadowColor: 'rgba(0, 0, 0)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#803916' },
            { offset: 1, color: '#803916' }
          ])
        },
      },
      data: [120, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210]
    },
    {
      name: '数据二',
      type: 'bar',
	  barWidth:'40%',
      stack: 'Ad',
      itemStyle: {
        borderColor:'#fff585',
        shadowColor: 'rgba(29, 231, 144)',
        shadowBlur: 10,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#ffc600' },
          { offset: 1, color: '#ef9801' }
        ])
      },
      emphasis: {
        itemStyle: {
          shadowColor: 'rgba(0, 0, 0)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#816512' },
            { offset: 1, color: '#816512' }
          ])
        },
      },
      data: [220, 182, 191, 234, 290, 330, 310, 234, 290, 330, 310]
    },
    {
      name: '数据三',
      type: 'bar',
	  barWidth:'40%',
      stack: 'Ad',
      itemStyle: {
        borderColor:'#52ffb5',
        shadowColor: 'rgba(29, 231, 144)',
        shadowBlur: 10,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#03c571' },
          { offset: 1, color: '#038a56' }
        ])
      },
      emphasis: {
        itemStyle: {
          shadowColor: 'rgba(0, 0, 0)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#031e1b' },
            { offset: 1, color: '#031e1b' }
          ])
        },
      },
      data: [150, 232, 201, 154, 190, 330, 410, 234, 290, 330, 310]
    },{                               //新的一个柱子 注意不设stack
name: '',       
type: 'bar',  
barWidth:'40%',
barGap: '-100%',         // 左移100%，stack不再与上面两个在一列
label: {                 
normal: {
show: true, //显示数值
position: 'top',       //  位置设为top
formatter: '{c}',
textStyle: { color: '#ffffff' } //设置数值颜色
}
},
itemStyle: {
normal: {
color: 'rgba(128, 128, 128, 0)'  // 设置背景颜色为透明
}
},
data: [490, 550, 490, 520, 580, 900, 940, 600, 680, 900, 830],
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);