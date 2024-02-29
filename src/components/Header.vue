<script setup name="Header">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";

import cjjc from '@/assets/icons/cjjc.png';
import cssz from '@/assets/icons/cssz.png';
import jczt from '@/assets/icons/jczt.png';
import sbzt from '@/assets/icons/sbzt.png';
import sjcx from '@/assets/icons/sjcx.png';
import sjhc from '@/assets/icons/sjhc.png';
import sjtj from '@/assets/icons/sjtj.png';
import txyl from '@/assets/icons/txyl.png';


const imgList = {
  'cjjc.png': cjjc,
  'cssz.png': cssz,
  'jczt.png': jczt,
  'sbzt.png': sbzt,
  'sjcx.png': sjcx,
  'sjtj.png': sjtj,
  'txyl.png': txyl,
  'sjhc.png': sjhc
}

const router = useRouter();

const title = ref('');

defineProps({
  navTitle: {
    type: String,
    required: true,
    default: '检测场景'
  },
  imgName: {
    type: String,
    required: true,
    default: 'cjjc.png'
  },
  showImg: {
    type: Boolean,
    required: true,
    default: true
  },
  // title: {
  //   type: String,
  //   required: true,
  //   default: '火灾检测'
  // },
  showTitle: {
    type: Boolean,
    required: true,
    default: true
  }
})

const goRoute = function (path, method = 'push') {
  if (router.currentRoute.value.fullPath === path) return false;
  router[method](path)
}

onMounted(() => {
  title.value = localStorage.getItem('globalTitle');
})
</script>

<template>
  <div class="headerWrap flex">
    <h1 class="flex">
      <img class="logo" src="../assets/logo.png" alt=""/> AI机器视觉目标检测一体机终端系统
    </h1>
    <div class="headerTitle" v-if="showTitle">{{ title }}</div>
    <div class="navList flex">
      <div class="navItem" @click="goRoute(-1, 'go')">
        <img class="navImg" src="../assets/icons/back.png" alt=""/> 返回
      </div>
      <div class="navItem" @click="goRoute(0, 'go')" v-if="showImg">
        <img class="navImg" :src="imgList[imgName]" alt=""/> {{ navTitle }}
      </div>
      <div class="navItem" @click="goRoute('/')">
        <img class="navImg" src="../assets/icons/home.png" alt=""/> 系统首页
      </div>
      <div class="navItem" @click="goRoute('/help')">
        <img class="navImg" src="../assets/icons/help.png" alt=""/> 帮助文档
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
}

.headerWrap {
  height: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, .3);
  justify-content: space-between;

  h1 {
    padding-left: 37px;
    font-size: 30px;
    color: #fff;
    width: 33.3%;
    white-space: nowrap;

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 11px;
    }
  }

  .navList {
    width: 33.3%;

    .navItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 40px;
      cursor: pointer;
      font-size: 18px;
      white-space: nowrap;

      .navImg {
        width: 20px;
        height: 20px;
        margin-right: 3px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
