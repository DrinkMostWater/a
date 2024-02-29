<template>
  <!-- 检测场景 -->
  <Header :showTitle="false"/>

  <div class="sceneWrap">
    <div class="sceneItem" @click="goRoute('/sceneType?type=aqsc')">
      <img class="sceneImg" src="@/assets/images/scene/one.png"/>
      <p class="sceneTitle">安全生产类</p>
      <div class="sceneContent">在安全生产中应用，通过图像处理和智能算法，实现对安全隐患的自动识别和预警。</div>
    </div>
    <div class="sceneItem" @click="goRoute('/sceneType?type=xcjc')">
      <img class="sceneImg" src="@/assets/images/scene/two.png"/>
      <p class="sceneTitle">瑕疵检测类</p>
      <div class="sceneContent">通过图像处理和深度学习，实现对产品瑕疵的自动检测与分类，提高生产质量和效率。</div>
    </div>
    <div class="sceneItem" @click="goRoute('/sceneType?type=tjjs')">
      <img class="sceneImg" src="@/assets/images/scene/three.png"/>
      <p class="sceneTitle">统计计数类</p>
      <div class="sceneContent">基于机器视觉检测的统计计数，通过图像处理和智能算法，实现对目标物体数量的自动统计和计数。</div>
    </div>
    <div class="sceneItem">
      <img class="sceneImg" src="@/assets/images/scene/four.png"/>
      <p class="sceneTitle">其他测试类（定制化）</p>
      <div class="sceneContent">定制化场景应用实现个性化需求，提供定制化的图像处理和智能算法，满足特定场景的需求。</div>
    </div>
  </div>

  <p class="copyright">Copyright@山东众志电子有限公司</p>
</template>

<script setup name="testScenario">
// 引入组件
import {defineAsyncComponent} from "vue";
import {useRouter} from "vue-router";


const Header = defineAsyncComponent(() => import('@/components/Header.vue'));
const router = useRouter();

const goRoute = (url) => {
  router.push(url)
}

</script>

<style scoped lang="scss">
.sceneWrap {
  display: flex;
  justify-content: center;
  padding-top: 60px;

  .sceneItem {
    padding: 50px 0;
    background: url("../assets/images/scene/box.png") no-repeat;
    background-size: 100% 100%;
    width: 20%;
    margin-right: 20px;
    cursor: pointer;
    font-size: 22px;
    font-weight: normal;
    line-height: 40px;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      .sceneTitle {
        color: #fff;
      }
    }

    .sceneImg {
      width: 100%;
    }

    .sceneTitle {
      text-align: center;
      height: 60px;
      line-height: 60px;
      color: rgba(255, 255, 255, .6);
      font-size: 28px;
      letter-spacing: 1px;
      transition: color .3s;
      margin-bottom: 10px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 0) 100%);
    }

    .sceneContent {
      padding: 0 30px 30px;
      overflow: hidden;
      height: 120px;
      text-overflow: ellipsis;
      display: -webkit-box;
      /* n 行溢出省略号 */
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
