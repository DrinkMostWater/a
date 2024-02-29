<template>
  <!-- 检测状态 -->
  <Header imgName="jczt.png" navTitle="检测状态" />
  <div class="sceneWrap">
    <div class="contentTitle">终端运行状态</div>
    <div class="state">
      <div class="item">
        <div class="img img1"></div>
        <div>{{ runData.MAC_ID }}</div>
        <div>设备型号</div>
      </div>
      <div class="item">
        <div class="img img2"></div>
        <div>{{ runData.MACHINE_TEMP }}</div>
        <div>主机温度</div>
      </div>
      <div class="item">
        <div class="img img3"></div>
        <div>{{ runData.CPU_TEMP }}</div>
        <div>CPU温度</div>
      </div>
      <div class="item">
        <div class="img img4"></div>
        <div>{{ runData.GPU_TEMP }}</div>
        <div>GPU温度</div>
      </div>
    </div>

    <div class="contentTitle" v-if="title == '火灾检测' || title == '安全帽检测' || title == '玻璃纤维丝飞丝检测'">异常检测记录</div>
    <div class="record" v-if="title == '火灾检测' || title == '安全帽检测' || title == '玻璃纤维丝飞丝检测'">
      <div class="content">
        <div class="left">
          <!-- <img src="../assets/images/state/record.png" alt=""> -->
          <img :src="imgUrl" alt="">
        </div>
        <div class="right">
          <div class="time" v-for="item  in abtimes" :key="item">
            <div class="lable">异常时间</div>
            <div class="val">{{ item }}</div>
          </div>

        </div>
      </div>
    </div>
    <div v-if="title == '车辆统计计数' || title == '人员统计计数'" class="contentTitle">实时统计计数</div>
    <div class="statisticalCount" v-if="title == '人员统计计数' || title == '车辆统计计数'">
      <el-table :data="tableData" stripe style="width: 100%" border :header-cell-style="headerStyle"
        :cell-style="cellStyle">
        <el-table-column type="index" label="序号" width="80" />
        <el-table-column prop="m_id" label="统计区域" />
        <el-table-column prop="det_datetime" label="统计时间" />
        <el-table-column prop="result" :label="title == '人员统计计数' ? '人员数量' : '车辆数量'" />
        <el-table-column prop="image" label="类别名称" />
        <el-table-column prop="time" label="检测耗时" />
      </el-table>
    </div>
  </div>

  <p class="copyright">Copyright@山东众志电子有限公司</p>
</template>

<script setup name="sceneType">
// 引入组件
import { defineAsyncComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { detectionStatusApi } from '@/api/common/detectionStatusApi.js'

const title = localStorage.getItem('globalTitle')
const runData = ref({ MAC_ID: '', MACHINE_TEMP: '', CPU_TEMP: '', GPU_TEMP: '' })
const abtimes = ref('')
const imgUrl = ref('')
onMounted(() => {
  //终端运行状态
  detectionStatusApi.mactype().then(res => {
    runData.value = res[0]
  })

  if (title == '车辆统计计数')
  {
    detectionStatusApi.ctmCurdata().then(res => {
      tableData.value = res
    })
  }
  if (title == '人员统计计数')
  {
    detectionStatusApi.ptmCurdata().then(res => {
      tableData.value = res
    })
  }
  if (title == '火灾检测')
  {
    detectionStatusApi.hzmAbimg().then(res => {
      imgUrl.value = res[0].result
    })
    detectionStatusApi.hzmAbtimes().then(res => {
      let str = res[0].result.replace(/\'/g, '\"')
      abtimes.value = JSON.parse(str)
    })
  }

  if (title == '安全帽检测')
  {
    detectionStatusApi.aqmAbimg().then(res => {
      imgUrl.value = res[0].result
    })
    detectionStatusApi.aqmAbtimes().then(res => {
      let str = res[0].result.replace(/\'/g, '\"')
      abtimes.value = JSON.parse(str)
    })
  }
  if (title == '玻璃纤维丝飞丝检测')
  {
    detectionStatusApi.fsmAbimg().then(res => {
      imgUrl.value = res[0].result
    })
    detectionStatusApi.fsmAbtimes().then(res => {
      let str = res[0].result.replace(/\'/g, '\"')
      abtimes.value = JSON.parse(str)
    })

  }


})
const headerStyle = { background: '#0D86FF', color: '#fff', textAlign: 'center' }

const cellStyle = (row) => {

  if (row.rowIndex % 2)
  {
    return {
      background: 'rgba(30, 60, 202, 1)', color: '#fff', textAlign: 'center'

    }
  } else
  {
    return {
      background: 'rgba(11,43,193, 1)', color: '#fff', textAlign: 'center'

    }
  }

}
const tableData = ref([])

const Header = defineAsyncComponent(() => import('@/components/Header.vue'));


</script>
<style scoped lang="scss">
.sceneWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .state {
    display: flex;
    width: 83.4%;
    justify-content: space-between;

    .item {
      font-size: 24px;
      box-sizing: border-box;
      width: 24%;
      height: 197px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: url('../assets/images/state/top.png') no-repeat top center, linear-gradient(to bottom, rgba(0, 149, 255, 0.8), rgba(28, 146, 255, 0.26));
      border-radius: 4px;
      border: 1px solid #1690FF;

      .img {
        width: 66px;
        height: 66px;
        background: url('../assets/images/state/img1.png') no-repeat top center;
        background-size: 100% 100%;
      }

      @for $i from 2 through 4 {
        .img#{$i} {
          background-image: url('../assets/images/state/img#{$i}.png');
        }
      }
    }
  }

  .record {
    width: 83.4%;
    height: 434px;

    .content {
      display: flex;
      padding: 33px 20px;
      background: #0C35CD;
      justify-content: space-between;
      border: 1px solid #1690FF;
      border-radius: 4px;
    }

    .left {
      width: 53%;
      /* 调整容器宽度 */
      height: auto;

      /* 自动计算高度 */
      img {
        width: 100%;
        height: 368px;
      }

    }

    .right {
      width: 45%;
      display: flex;
      flex-direction: column;

      .time {
        display: flex;
        border: 1px solid #1690FF;
        height: 40px;
        line-height: 40px;

        .lable {
          width: 30%;
          text-align: center;
          border-right: 1px solid #1690FF;
        }

        .val {
          width: 70%;
          text-align: center;
        }
      }
    }
  }

  .statisticalCount {
    width: 83.4%;
    padding: 30px;
    background: #0C35CD;
    border: 1px solid #1690FF;
    border-radius: 4px;
  }
}
</style>
