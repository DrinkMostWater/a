<template>
  <!-- 设备状态 -->
  <Header imgName="sbzt.png" navTitle="设备状态" />
  <div class="deviceStatusWrap">
    <div class="dsTop">
      <div class="topBox topLeft">
        <div class="topItem">
          <div><span>{{ obj.aidays.CARMERA_DAYS }}</span> 天</div>
          <p>视频监控运行周期</p>
        </div>
        <div class="topItem">
          <div><span>{{ obj.aidays.BOX_DAYS }}</span> 天</div>
          <p>AI计算盒运行周期</p>
        </div>
        <div class="topItem">
          <div><span>{{ obj.aidays.SERVICE_DAYS }}</span> 天</div>
          <p>数据服务器运行周期</p>
        </div>
      </div>

      <div class="topBox topRight">
        <div class="topItem">
          <div><span>{{ obj.aicom.NORMAL_TYPE }}</span> 台</div>
          <p>正常状态设备数</p>
        </div>
        <div class="topItem">
          <div><span>{{ obj.aicom.ABNORMAL_TYPE }}</span> 台</div>
          <p>异常状态设备数</p>
        </div>
        <div class="topItem">
          <div><span>{{ obj.aicom.NORMAL_CONNECT }}</span> 台</div>
          <p>在线设备数</p>
        </div>
        <div class="topItem">
          <div><span>{{ obj.aicom.ABNORMAL_CONNECT }}</span> 台</div>
          <p>离线设备数</p>
        </div>
      </div>
    </div>
    <div class="dsContent">
      <div class="dsBox"></div>
      <div class="dsBox dsBox2"></div>
      <div class="dsBox dsBox3"></div>

      <div class="dsTxt">
        <p>设备名称：监控视频</p>
        <p>设备型号：LT-USB 5MP</p>
        <p>运行状态：<span v-if="obj.aitype.CRAMERA_TYPE == '1'">正常</span><span v-else class="abnormal">异常</span></p>
        <p>连接状态：<span v-if="obj.aitype.CARMERA_CONNECT == '1'">正常</span><span v-else class="abnormal">异常</span></p>
      </div>
      <div class="dsTxt dsTxt2">
        <p>设备名称：AI计算盒</p>
        <p>设备型号：Orin Nano</p>
        <p>运行状态：<span v-if="obj.aitype.BOX_TYPE == '1'">正常</span><span v-else class="abnormal">异常</span></p>
        <p>连接状态：<span v-if="obj.aitype.BOX_CONNECT == '1'">正常</span><span v-else class="abnormal">异常</span></p>
      </div>
      <div class="dsTxt dsTxt3">
        <p>设备名称：数据服务器</p>
        <p>设备型号：Data Service</p>
        <p>运行状态：<span v-if="obj.aitype.SERVICE_TYPE == '1'">正常</span><span v-else class="abnormal">异常</span></p>
        <p>连接状态：<span v-if="obj.aitype.SERVICE_CONNECT == '1'">正常</span><span v-else class="abnormal">异常</span></p>
      </div>
    </div>
  </div>

  <p class="copyright">Copyright@山东众志电子有限公司</p>
</template>

<script setup name="deviceStatus">
// 引入组件
import { defineAsyncComponent, ref, onMounted, reactive } from "vue";
import { deviceStatusApi } from '@/api/common/deviceStatusApi.js'
const obj = reactive({
  aicom: '',
  aidays: '',
  aitype: ''
})
onMounted(() => {
  // 硬件运行状态统计
  deviceStatusApi.aicom().then(res => {
    obj.aicom = res[0]
  })
  // 硬件运行天数
  deviceStatusApi.aidays().then(res => {
    obj.aidays = res[0]
  })

  // 硬件连接状态
  deviceStatusApi.aitype().then(res => {
    obj.aitype = res[0]
  })
})
const Header = defineAsyncComponent(() => import('@/components/Header.vue'));
</script>

<style lang="scss" scoped>
.deviceStatusWrap {
  .dsTop {
    display: flex;
    justify-content: space-between;
    width: 83.4%;
    margin: 30px auto 20px;

    .topBox {
      height: 135px;
      border-radius: 10px;
      background: linear-gradient(180deg, rgba(0, 149, 255, 0.8) 0%, rgba(28, 146, 255, 0.26) 100%);
      width: 53.5%;
      display: flex;
      border: 1px solid #4DAAFF;
      align-items: center;

      .topItem {
        height: 68px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 0 80px;
        background-size: 63px 65px;
        width: 33.3%;
        line-height: 24px;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 1px;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(69, 166, 255, 0.84) 50%, rgba(0, 0, 0, 0) 100%);
        }

        &:first-child {
          border: none;

          &::before {
            display: none;
          }
        }

        div {
          line-height: 30px;

          span {
            font-size: 30px;
            font-weight: bold;
          }
        }
      }

      &.topLeft {
        width: 45%;

        @for $i from 1 through 3 {
          .topItem:nth-child(#{$i}) {
            background: url("../assets/images/deviceStatus/left#{$i}.png") no-repeat 10px center,
            url("../assets/images/deviceStatus/bubble.png") no-repeat 10px center;
          }
        }
      }

      &.topRight {
        .topItem {
          width: 25%;
        }

        @for $i from 1 through 4 {
          .topItem:nth-child(#{$i}) {
            background: url("../assets/images/deviceStatus/right#{$i}.png") no-repeat 10px center,
            url("../assets/images/deviceStatus/bubble.png") no-repeat 10px center;
          }
        }
      }
    }
  }

  .dsContent {
    width: 83.4%;
    margin: 0 auto;
    height: 660px;
    border-radius: 4px;
    border: 1px solid #4DAAFF;
    background: url("../assets/images/deviceStatus/line.png") no-repeat center 25%, linear-gradient(180deg, rgba(0, 149, 255, 0.8) 0%, rgba(28, 146, 255, 0.26) 100%);
    background-size: 850px auto;
    position: relative;


    .dsBox {
      width: 340px;
      height: 340px;
      background: url("../assets/images/deviceStatus/box1.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 35%;
      left: 10%;

      &.dsBox2 {
        top: 5%;
        left: 50%;
        width: 446px;
        height: 304px;
        background-image: url("../assets/images/deviceStatus/box2.png");
        transform: translateX(-50%);
      }

      &.dsBox3 {
        top: 39%;
        left: 72%;
        width: 310px;
        height: 310px;
        background-image: url("../assets/images/deviceStatus/box3.png");
      }
    }

    .dsTxt {
      border: 1px solid #4DAAFF;
      position: absolute;
      padding: 8px 20px;
      background: linear-gradient(180deg, rgba(0, 149, 255, 0.4) 0%, rgba(28, 146, 255, 0) 100%);
      font-size: 18px;
      line-height: 28px;
      width: 240px;
      top: 20%;
      left: 11%;

      p {
        font-weight: bold;

        span {
          font-weight: bold;
          color: #00FF22;

          &.abnormal {
            color: #FF0C0C;
          }
        }
      }

      &.dsTxt2 {
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
      }

      &.dsTxt3 {
        top: 20%;
        left: auto;
        right: 4%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
