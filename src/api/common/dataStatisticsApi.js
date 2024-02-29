import request from '@/utils/request.js'

// const baseApiUrl6 = '/api30006'; // 本地
// const baseApiUrl7 = '/api30007'; // 本地
// const baseApiUrl8 = '/api30008'; // 本地
const baseApiUrl6 = import.meta.env.VITE_API_URL + ':30006/api'; // 打包
const baseApiUrl7 = import.meta.env.VITE_API_URL + ':30007/api'; // 打包
const baseApiUrl8 = import.meta.env.VITE_API_URL + ':30008/api'; // 打包

/**
 * 数据统计api
 *
 * @author zzdz
 * @date  2023/09/05 08:51
 **/

export const dataStatisticsApi = {
  // 实时检测数据-统计数量 适用人员统计场景
  ptmPcdata: (params) => {
    return request({
      url: baseApiUrl6 + '/ptm/pcdata',
      method: 'get',
      params
    })
  },
  // 实时检测数据-统计数量 适用车辆统计场景
  ctmPcdata: (params) => {
    return request({
      url: baseApiUrl6 + '/ctm/pcdata',
      method: 'get',
      params
    })
  },
  // 实时检测数据-异常次数 适用飞丝检测场景
  fsmAbcdata: (params) => {
    return request({
      url: baseApiUrl6 + '/fsm/abcdata',
      method: 'get',
      params
    })
  },
  // 实时检测数据-异常次数 适用火灾检测场景
  hzmAbcdata: (params) => {
    return request({
      url: baseApiUrl6 + '/hzm/abcdata',
      method: 'get',
      params
    })
  },
  // 实时检测数据-异常次数 适用安全帽检测场景
  aqmAbcdata: (params) => {
    return request({
      url: baseApiUrl6 + '/aqm/abcdata',
      method: 'get',
      params
    })
  },
  // 实时检测数据-单帧耗时 适用飞丝检测场景
  fsmTdata: (params) => {
    return request({
      url: baseApiUrl6 + '/fsm/tdata',
      method: 'get',
      params
    })
  },
  // 实时检测数据-单帧耗时 适用火灾检测场景
  hzmTdata: (params) => {
    return request({
      url: baseApiUrl6 + '/hzm/tdata',
      method: 'get',
      params
    })
  },
  // 实时检测数据-单帧耗时 适用安全帽检测场景
  aqmTdata: (params) => {
    return request({
      url: baseApiUrl6 + '/aqm/tdata',
      method: 'get',
      params
    })
  },
  // 实时检测数据-单帧耗时 适用人员统计场景
  ptmTdata: (params) => {
    return request({
      url: baseApiUrl6 + '/ptm/tdata',
      method: 'get',
      params
    })
  },
  // 实时检测数据-单帧耗时 适用车辆统计场景
  ctmTdata: (params) => {
    return request({
      url: baseApiUrl6 + '/ctm/tdata',
      method: 'get',
      params
    })
  },
  // 实时检测数据-硬件部分数据 适用全部场景
  hardstat: (params) => {
    return request({
      url: baseApiUrl8 + '/hardstat',
      method: 'get',
      params
    })
  },
  // 异常检测统计（近10日）  适用飞丝检测场景
  fsmD10data: (params) => {
    return request({
      url: baseApiUrl7 + '/fsm/d10data',
      method: 'get',
      params
    })
  },
  // 异常检测统计（近10日）  适用火灾检测场景
  hzmD10data: (params) => {
    return request({
      url: baseApiUrl7 + '/hzm/d10data',
      method: 'get',
      params
    })
  },
  // 异常检测统计（近10日）  适用安全帽检测场景
  aqmD10data: (params) => {
    return request({
      url: baseApiUrl7 + '/aqm/d10data',
      method: 'get',
      params
    })
  },
  // 目标统计计数（近10日）  适用人员统计场景
  ptmD10data: (params) => {
    return request({
      url: baseApiUrl7 + '/ptm/d10data',
      method: 'get',
      params
    })
  },
  // 目标统计计数（近10日）  适用人员统计场景
  ctmD10data: (params) => {
    return request({
      url: baseApiUrl7 + '/ctm/d10data',
      method: 'get',
      params
    })
  }
}
