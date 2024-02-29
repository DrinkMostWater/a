<template>
  <div class='home'>
    <div class='img'>
      <img width='65' height='67' src='../assets//images/home/icon.png' alt=''>
      <img style='margin-left:18px' width='934' height='69' src='../assets//images/home/text.png' alt=''>
    </div>
    <div class='choseScene'>
      <div class='sel cup' @click="goRoute('/testScenario', true)">{{ title || '请选择检测场景' }}</div>
    </div>

    <div class='content'>
      <div class='cont-top'>
        <div class='box box1' @click="goRoute('/runningState')">
          <div class='img_all img1'></div>
          <div class='font'>检测状态</div>
        </div>
        <div class='box' @click="goRoute('/dataCount')">
          <div class='img2 img_all'></div>
          <div class='font'>数据统计</div>
        </div>
        <div class='box' @click="goRoute('/login')">
          <div class='img3 img_all'></div>
          <div class='font'>参数设置</div>
        </div>
      </div>
      <div class='cont-top'>
        <div class='box' @click="goRoute('/preview')">
          <div class='img4 img_all'></div>
          <div class='font'>图像预览</div>
        </div>
        <div class='box' @click="goRoute('/backhaul')">
          <div class='img5 img_all'></div>
          <div class='font'>数据回传</div>
        </div>
        <div class='box' @click="goRoute('/dataQuery')">
          <div class='img6 img_all'></div>
          <div class='font'>数据查询</div>
        </div>
        <div class='box' @click="goRoute('/deviceStatus')">
          <div class='img7 img_all'></div>
          <div class='font'>设备状态</div>
        </div>
      </div>
    </div>
    <div class='bottom-text'>Copyright@山东众志电子有限公司</div>

  </div>
</template>

<script setup name='home'>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'

const router = useRouter()

const title = ref('')

onMounted(() => {
  let query = router.currentRoute.value.query
  if (query.title) {
    title.value = query.title
    if (!localStorage.getItem('globalTitle')) {
      localStorage.setItem('globalTitle', title.value)
    } else {
      if (localStorage.getItem('globalTitle') !== title.value) {
        localStorage.setItem('globalTitle', title.value)
      }
    }
  } else {
    title.value = localStorage.getItem('globalTitle')
  }
})

const goRoute = (url, key) => {
  if (!key && !title.value) {
    ElMessage.error('请选择检测场景')
    return
  }
  if (url === '/login') {
    if (!localStorage.getItem('token')) {
      ElMessage.error('请先登录')
    }
    // else {
    //   return router.push('/parameterSettings')
    // }
  }
  router.push(url)
}

</script>


<style lang='scss' scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  .img {
    padding-top: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .choseScene {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 20px 40px;
    background: url("../assets/images/home/shine.png") no-repeat 44% 25%;
    background-size: 60% auto;

    .sel {
      border: 1px solid rgba(93, 159, 253, .6);
      box-shadow: 0 0 4px rgba(93, 159, 253, .8), 0 0 4px rgba(93, 159, 253, .8) inset;
    }
  }

  .font {
    margin-top: 20px;
    font-weight: 500;
    height: 31px;
    font-size: 32px;
    text-align: center;
    color: #FFFFFF;
  }

  .content {
    //height: 100%;
    width: 83.4%;

    .cont-top {
      display: flex;
      //height: 50%;
      margin: 0 0 1%;

      &:last-child {
        margin: 0;
      }

      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 24.25%;
        height: 220px;
        background-image: url('../assets/images/home/item1.png');
        background-size: 100% 100%;
        margin-right: 1%;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }

        .img_all {
          width: 64px;
          height: 64px;
          background-size: 100% 100%;
        }

        @for $i from 1 through 7 {
          .img#{$i} {
            background-image: url('../assets/images/home/icon#{$i}.png');
          }
        }
      }

      .box1 {
        width: 49.5%;
        height: 220px;
      }
    }
  }

  .bottom-text {
    margin-top: 60px;
    font-size: 18px;
    text-align: center;
    height: 42px;
    line-height: 42px;
  }
}
</style>
