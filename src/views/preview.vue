<script setup name='preview'>
// 引入组件
import { defineAsyncComponent, reactive, ref } from 'vue'
import { ImagePreviewApi } from '@/api/common/imagePreviewApi.js'

const Header = defineAsyncComponent(() => import('@/components/Header.vue'))

const apiList = reactive({
  '玻璃纤维丝飞丝检测': ['fsmAbimgs', 'fsmNorimgs'],
  '人员统计计数': ['ptmAbimgs', 'ptmNorimgs'],
  '车辆统计计数': ['ctmAbimgs', 'ctmNorimgs'],
  '安全帽检测': ['aqmAbimgs', 'aqmNorimgs'],
  '火灾检测': ['hzmAbimgs', 'hzmNorimgs']
})

// 正常、异常图片数据
const norImgList = ref([])
const abImgList = ref([])

let title = localStorage.getItem('globalTitle')

ImagePreviewApi[apiList[title][1]]().then(norRes => {
  norImgList.value = [norRes[0].normalimg]
  ImagePreviewApi[apiList[title][0]]().then(abRes => {
    abImgList.value = JSON.parse(abRes[0].abnormalimgs.replace(/\'/g, '"'));
  })
})
</script>
<template>
  <Header navTitle='图像预览' imgName='txyl.png' />
  <div class='helpWrap'>
    <div class='contentTitle'>图像预览</div>
  </div>
  <div class='content'>
    <div class='box' v-for='item in norImgList' :key='item'>
      <img :src='item' alt=''>
      <div class='font'>正常状态图像</div>
    </div>
    <div class='box' v-for='(item, index) in abImgList' :key='item'>
      <img :src='item' alt=''>
      <div class='font'>异常状态图像{{index + 1}}</div>
    </div>
  </div>

  <p class='copyright'>Copyright@山东众志电子有限公司</p>
</template>

<style lang='scss' scoped>
.content {
  width: 83.4%;
  margin: 0 auto 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #0C35CD;
  padding: 30px;
  border-radius: 4px;
  border: 1px solid #1690FF;

  .box {
    width: 49%;

    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 15px;
    }

    img {
      width: 100%;
      height: 292px;
      display: block;
      margin-bottom: 10px;
    }

    .font {
      text-align: center;
      font-size: 24px;
      line-height: 1em;
    }
  }
}
</style>
