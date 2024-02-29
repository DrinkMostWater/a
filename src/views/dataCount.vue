<template>
  <Header imgName="sjtj.png" navTitle="数据统计" />
  <div class="countWrap">
    <div class="contentTitle">实时检测数据</div>
    <div class="dataList">
      <div class="dataItem" v-show="title == '人员统计计数' || title == '车辆统计计数'">
        <div class="num">{{ count }}</div>
        <div class="txt">统计次数</div>
      </div>
      <div class="dataItem" v-show="title == '火灾检测' || title == '玻璃纤维丝飞丝检测' || title == '安全帽检测'">
        <div class="num">{{ abcData }}</div>
        <div class="txt">异常次数</div>
      </div>

      <div class="dataItem">
        <div class="num" v-if="Number(tdata)">{{ Number(tdata).toFixed(3) }}</div>
        <div class="num" v-else>{{ tdata }}</div>
        <div class="txt">单帧耗时（S）</div>
      </div>
      <div class="dataItem">
        <div class="num">{{ deviceData.RUN_TIME }}</div>
        <div class="txt">运行天数</div>
      </div>
      <div class="dataItem">
        <div class="num">{{ deviceData.CPU_RATE }}</div>
        <div class="txt">CPU占有率（%）</div>
      </div>
      <div class="dataItem">
        <div class="num">{{ deviceData.GPU_RATE }}</div>
        <div class="txt">GPU占有率（%）</div>
      </div>
      <div class="dataItem">
        <div class="num">{{ deviceData.RAM_RATE }}</div>
        <div class="txt">RAM占有率（%）</div>
      </div>
    </div>
    <div class="contentTitle">{{ ecTitle }} </div>
    <div class="chartWrap">
      <div id="myEcharts" style="width: 100%;height: 100%;"></div>
    </div>
  </div>

  <p class="copyright">Copyright@山东众志电子有限公司</p>
</template>

<script setup name="dataCount">
import * as echarts from "echarts";

// 引入组件
import { defineAsyncComponent, nextTick, onMounted, ref } from "vue";
import { dataStatisticsApi } from '@/api/common/dataStatisticsApi.js'

const Header = defineAsyncComponent(() => import('@/components/Header.vue'));
const ecTitle = ref('')
const ecName = ref('')
const echart = echarts;
const title = localStorage.getItem('globalTitle')
const abcData = ref('')
const count = ref('')
const tdata = ref('')
const deviceData = ref('')
const name = ref([])
const val = ref([])
onMounted(() => {
  if (title == '玻璃纤维丝飞丝检测' || title == '火灾检测' || title == '安全帽检测')
  {
    ecTitle.value = '异常检测统计（近10日）'
    ecName.value = '异常次数'
  } else if (title == '人员统计计数')
  {
    ecName.value = '人员数量'
  } else
  {
    ecTitle.value = '目标统计计数（近10日）'
    ecName.value = '车辆数量'
  }
  if (title == '玻璃纤维丝飞丝检测')
  {
    // 异常次数
    dataStatisticsApi.fsmAbcdata().then(res => {
      abcData.value = res[0].num
    })
    // 单帧耗时
    dataStatisticsApi.fsmTdata().then(res => {
      tdata.value = res[0].time
    })
    // 异常检测统计（近10日）
    dataStatisticsApi.fsmD10data().then(res => {
      if (res !== 'NULL')
      {
        handle(res[0])
      }
    })
  }
  if (title == '火灾检测')
  {
    // 异常次数
    dataStatisticsApi.hzmAbcdata().then(res => {
      abcData.value = res[0].num
    })
    // 单帧耗时
    dataStatisticsApi.hzmTdata().then(res => {
      tdata.value = res[0].time
    })
    // 异常检测统计（近10日）
    dataStatisticsApi.hzmD10data().then(res => {
      if (res !== 'NULL')
      {
        handle(res[0])
      }
    })
  }
  if (title == '安全帽检测')
  {  // 异常次数
    dataStatisticsApi.aqmAbcdata().then(res => {
      abcData.value = res[0].num
    })
    // 单帧耗时
    dataStatisticsApi.aqmTdata().then(res => {
      tdata.value = res[0].time
    })
    // 异常检测统计（近10日）
    dataStatisticsApi.aqmD10data().then(res => {
      if (res !== 'NULL')
      {
        handle(res[0])
      }
    })
  }

  if (title == '车辆统计计数')
  {   // 统计次数
    dataStatisticsApi.ctmPcdata().then(res => {
      count.value = res[0].num
    })
    // 单帧耗时
    dataStatisticsApi.ctmTdata().then(res => {
      tdata.value = res[0].time
    })
    // 异常检测统计（近10日）
    dataStatisticsApi.ctmD10data().then(res => {
      if (res !== 'NULL')
      {
        handle(res[0])
      }
    })
  }
  if (title == '人员统计计数')
  { // 统计次数
    dataStatisticsApi.ptmPcdata().then(res => {
      count.value = res[0].num
    })
    // 单帧耗时
    dataStatisticsApi.ptmTdata().then(res => {
      tdata.value = res[0].time
    })
    // 异常检测统计（近10日）
    dataStatisticsApi.ptmD10data().then(res => {
      if (res !== 'NULL')
      {
        handle(res[0])
      }
    })
  }
  // 硬件数据
  dataStatisticsApi.hardstat().then(res => {
    deviceData.value = res[0]
  })


});

const handle = (data) => {
  name.value = []
  val.value = []
  const arr = [];
  for (const key in data)
  {
    if (data.hasOwnProperty(key))
    {
      arr.push({ key, value: data[key] });
    }
  }

  let arr1 = bubbleSort(arr)

  arr1.forEach(element => {
    name.value.push(element.key)
    val.value.push(element.value)
  });

  initChart();
}

function bubbleSort (arr) {
  var len = arr.length;

  for (var i = 0; i < len - 1; i++)
  {
    for (var j = 0; j < len - 1 - i; j++)
    {
      if (arr[j].key > arr[j + 1].key)
      { // 比较相邻元素大小并交换位置
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}



// 基础配置一下Echarts
function initChart () {
  let chart = echart.init(document.getElementById("myEcharts"));
  // 把配置和数据放这里
  chart.setOption({
    backgroundColor: 'rgba(255, 255, 255, 0)',
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: "18%",
      left: '3%',
      right: '3%',
      bottom: '5%',
      containLabel: true,
    },
    legend: { // 图示例样式
      show: true,
      top: 10,
      right: 20,
      itemGap: 20,
      itemWidth: 20,
      itemHeight: 5,
      textStyle: {
        color: '#fff',
      },
    },
    xAxis: [{
      type: 'category',
      data: name.value,
      axisTick: {
        // 其他可选属性，如对齐方式等
        alignWithLabel: true // 刻度线是否与标签对齐，默认false
      },
      axisLabel: {
        padding: [3, 0, 0, 0],
        formatter: '{value}',
        color: 'rgba(95, 187, 235, 1)',
        textStyle: {
          fontSize: 12,
          color: '#fff'
        },
      },
      // 设置 X 轴线条粗细
      axisLine: {
        lineStyle: {
          width: 1, // 根据需求调整数值大小，单位是像素
          color: '#1690FF',
        }
      }
    }],
    yAxis: [{
      name: '次数',
      nameTextStyle: {
        color: '#fff',
        padding: [0, 40, 10, 0],
      },
      type: 'value',
      axisLabel: {
        // padding: [3, 0, 0, 0],
        formatter: '{value}',
        color: 'rgba(95, 187, 235, 1)',
        textStyle: {
          fontSize: 12,
          color: '#fff'
        },
      },
      axisTick: {
        show: false, // 默认为true，如果要隐藏，则改为 false
      },
      splitLine: {
        lineStyle: {
          width: 1,
          color: '#1690FF',
        },
      },
    }],
    series: [{
      name: ecName.value,
      data: val.value,
      type: 'bar',
      barWidth: 60, // 根据需求调整数值大小，单位是像素
      itemStyle: {
        color: '#1890FF',
      }
    }],
  });
  window.onresize = function () {
    //自适应大小
    chart.resize();
  };
}
</script>

<style lang="scss" scoped>
.dataList {
  width: 83.4%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .dataItem {
    border-radius: 4px;
    width: 16%;
    height: 290px;
    text-align: center;
    color: rgba(255, 255, 255, .7);
    box-sizing: border-box;
    border: 1px solid #1690FF;

    .num {
      margin-top: 70%;
      font-size: 36px;
      font-weight: bold;
      line-height: 50px;
    }

    .txt {
      line-height: 1em;
    }
  }

  @for $i from 1 through 7 {
    .dataItem:nth-child(#{$i}) {
      background: url('../assets/images/dataCount/data#{$i}.png') no-repeat center 18%,
      linear-gradient(180deg, rgba(0, 149, 255, 0.8) 0%, rgba(28, 146, 255, 0.26) 100%);
      background-size: 100% auto;
    }
  }
}

.chartWrap {
  width: 83.4%;
  height: 360px;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(0, 149, 255, 0.8) 0%, rgba(28, 146, 255, 0.26) 100%);
  border: 1px solid #1690FF;
  border-radius: 4px;
}
</style>
