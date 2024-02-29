import request from '@/utils/request.js'

// const baseApiUrl = '/api30009'; // 本地
const baseApiUrl = import.meta.env.VITE_API_URL + ':30009/api'; // 打包

/**
 * 数据查询Api
 *
 * @author zzdz
 * @date  2023/09/05 08:51
 **/

export const dataQueryApi = {
  // 异常图片
  // 适用飞丝检测场景
  fsmAlldata: (params) => {
    return request({
      url: baseApiUrl + '/fsm/alldata',
      method: 'get',
      params
    })
  },
  // 适用火灾检测场景
  hzmAlldata: (params) => {
    return request({
      url: baseApiUrl + '/hzm/alldata',
      method: 'get',
      params
    })
  },
  // 适用安全帽检测场景
  aqmAlldata: (params) => {
    return request({
      url: baseApiUrl + '/aqm/alldata',
      method: 'get',
      params
    })
  },
  // 适用人员统计场景
  ptmAlldata: (params) => {
    return request({
      url: baseApiUrl + '/ptm/alldata',
      method: 'get',
      params
    })
  },
  // 适用车辆统计场景
  ctmAlldata: (params) => {
    return request({
      url: baseApiUrl + '/ctm/alldata',
      method: 'get',
      params
    })
  }
}
