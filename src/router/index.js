import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/help',
      name: 'help',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/help.vue')
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('../views/preview.vue')
    },
    // 检测场景-1
    {
      path: '/testScenario',
      name: 'testScenario',
      component: () => import('../views/testScenario.vue')
    },
    {
      path: '/sceneType',
      name: 'sceneType',
      component: () => import('../views/sceneType.vue')
    },
    // 运行状态
    {
      path: '/runningState',
      name: 'runningState',
      component: () => import('../views/runningState.vue')
    },
    // 数据统计
    {
      path: '/dataCount',
      name: 'dataCount',
      component: () => import('../views/dataCount.vue')
    },
    // 数据查询
    {
      path: '/dataQuery',
      name: 'dataQuery',
      component: () => import('../views/dataQuery.vue')
    },
    // 数据回传
    {
      path: '/backhaul',
      name: 'backhaul',
      component: () => import('../views/backhaul.vue')
    },
    // 设备状态
    {
      path: '/deviceStatus',
      name: 'deviceStatus',
      component: () => import('../views/deviceStatus.vue')
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    // 参数预览 设置
    {
      path: '/parameterSettings',
      name: 'parameterSettings',
      component: () => import('../views/parameterSettings.vue')
    }
  ]
})

export default router
