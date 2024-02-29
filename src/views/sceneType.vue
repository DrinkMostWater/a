<template>
  <!-- 检测场景 -->
  <Header :showTitle='false' />

  <div class='sceneWrap'>
    <div class='sceneItem' v-for='item in list' :key='item.title' @click="goRoute('/', {title: item.title}, item.api)">
      <img class='sceneImg' src='@/assets/images/scene/four.png' />
      <div class='sceneText'>
        <p class='sceneTitle'>{{ item.title }}</p>
        <div class='sceneContent'>{{ item.content }}</div>
      </div>
    </div>
  </div>

  <p class='copyright'>Copyright@山东众志电子有限公司</p>
</template>

<script setup name='sceneType'>
// 引入组件
import { defineAsyncComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { sceneDetectionApi } from '@/api/common/sceneDetectionApi.js'

const Header = defineAsyncComponent(() => import('@/components/Header.vue'))
const router = useRouter()
const list = ref([])

const typeList = reactive({
  // 安全生产类
  'aqsc': [
    {
      title: '火灾检测',
      content: '火灾检测场景利用深度学习技术，实时检测目标区域，并输出检测结果，以确保第一时间获取着火信息，及时采取救援和安全疏散。',
      imageUrl: '',
      api: 'hzmStart'
    }, {
      title: '安全帽检测',
      content: '安全帽佩戴检测利用深度学习技术，实现监控检测人员是否佩戴安全帽，广泛应用于建筑、电力、煤矿等行业，实时预警安全生产管理。',
      imageUrl: '',
      api: 'aqmStart'
    }
  ],
  // 统计计数类
  'tjjs': [
    {
      title: '人员统计计数',
      content: '基于机器视觉的人数统计，利用图像处理和深度学习技术，实现对人群中人数的自动统计和实时监测，广泛应用于人流量管理、安防监控等领域。',
      imageUrl: '',
      api: 'ptmStart'
    }, {
      title: '车辆统计计数',
      content: '利用图像处理和深度学习技术，实现对道路上车辆数量自动统计和监测，广泛应用于交通管理、智能停车等领域。',
      imageUrl: '',
      api: 'ctmStart'
    }
  ],
  // 瑕疵检测类
  'xcjc': [
    {
      title: '玻璃纤维丝飞丝检测',
      content: '拉丝过程易出现飞丝，传统人工巡检周期长、处置慢。飞丝检测，可实时告警飞丝状态，缩短故障处理时间，提高生产能力和产品质量。',
      imageUrl: '',
      api: 'fsmStart'
    }
    // , {
    //   title: '钢板缺陷检测',
    //   content: '利用图像处理和深度学习技术，实现对钢板表面缺陷的自动检测和分类，提高生产质量和效率。',
    //   imageUrl: ''
    // }
  ]
})


const goRoute = (url, query, api) => {
  sceneDetectionApi[api]().then(() => {
    router.push({
      path: url,
      query
    })
  })
}

let q = router.currentRoute.value.query
list.value = typeList[q.type]


</script>
<style scoped lang='scss'>
.sceneWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 60px;

  .sceneItem {
    width: 41%;
    display: flex;
    background: url("../assets/images/scene/box.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 20px 20px 0;
    height: 355px;
    padding: 49px 34px;
    border-radius: 4px;
    cursor: pointer;

    &:nth-child(2n) {
      margin-right: 0;
    }

    &:nth-child(n+3) {
      margin-bottom: 0;
    }

    .sceneImg {
      width: 265px;
      height: 258px;
      margin-right: 36px;
    }

    .sceneText {
      font-size: 24px;
      line-height: 40px;
      overflow: hidden;


      .sceneTitle {
        font-size: 30px;
        line-height: 45px;
        margin-bottom: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .sceneContent {
        height: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /* n 行溢出省略号 */
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
