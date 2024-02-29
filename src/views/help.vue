<script setup name='Help'>
// 引入组件
import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('@/components/Header.vue'))
</script>
<template>
  <Header :showImg='false' headerTitle='帮助文档' />
  <div class='helpWrap'>
    <div class='contentTitle'>帮助文档</div>

    <div class='helpContent'>
      <div class='helpTxt'>
        <h2>版本信息</h2>
        <h3>设备硬件版本信息</h3>
        <p>核心模组：NVIDIA Jetson Orin Nano</p>
        <p>CPU：Arm® Cortex®-A78AE v8.2(6-core)</p>
        <p>GPU：搭载16 个 Tensor Core 的 512 核 NVIDIA Ampere 架构 GPU（20TOPS）</p>
        <h3>算法版本信息</h3>
        <p>安全生产类-火灾检测模型V1.0</p>
        <p>安全生产类-安全帽佩戴检测模型V1.0</p>
        <p>瑕疵检测类-玻璃纤维飞丝检测模型V1.0</p>
        <p>统计计数类-车辆统计计数模型V1.0</p>
        <p>统计计数类-人员统计计数模型V1.0</p>
        <h3>软件版本信息</h3>
        <p>系统版本号：Ubuntu 20.04</p>
      </div>
      <div class='helpCode'>
        <div>
          <p>联系方式(业务)：137XXXXXXXX</p>
          <p>联系方式(技术)：400-621-2456</p>
        </div>
        <div class='codeImg'>
          <img src='../assets/icons/code.png' alt='' />
        </div>
        <div>二维码（扫码查看教程）</div>
      </div>
    </div>
  </div>

  <p class='copyright'>Copyright@山东众志电子有限公司</p>
</template>

<style lang='scss' scoped>
.helpContent {
  display: flex;
  width: 83.4%;
  margin: 0 auto;
  justify-content: space-between;

  .helpCode,
  .helpTxt {
    width: 51%;
    background: linear-gradient(180deg, rgba(0, 149, 255, 0.8) 0%, rgba(28, 146, 255, 0.26) 100%);
    border-radius: 4px;
    font-size: 18px;
    line-height: 30px;
    border: 1px solid #4DAAFF;
  }

  .helpCode {
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .codeImg {
      padding: 10px;
      border: 1px solid #fff;
      margin: 40px 0 20px;
    }
  }

  .helpTxt {
    padding: 55px 60px;

    h3 {
      margin: 20px 0;
      line-height: 1em;
    }
  }
}
</style>
