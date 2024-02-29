import request from '@/utils/request.js'

// const baseApiUrl = '/api30000'; // 本地
// const baseApiUrl1 = '/api30001'; // 本地
// const baseApiUrl3 = '/api30003'; // 本地
// const baseApiUrl6 = '/api30006'; // 本地
const baseApiUrl = import.meta.env.VITE_API_URL + ':30000/api'; // 打包
const baseApiUrl1 = import.meta.env.VITE_API_URL + ':30001/api'; // 打包
const baseApiUrl3 = import.meta.env.VITE_API_URL + ':30003/api'; // 打包
const baseApiUrl6 = import.meta.env.VITE_API_URL + ':30006/api'; // 打包

/**
 * 检测状态Api
 *
 * @author zzdz
 * @date  2023/09/05 08:51
 **/

export const detectionStatusApi = {
  // 终端运行状态 适用所有检测场景-检测状态页面
  mactype: (params) => {
    return request({
      url: baseApiUrl + '/mactype',
      method: 'get',
      params
    })
  },
  // 实时统计计数 适用人员统计场景-检测状态页面
  ptmCurdata: (params) => {
    return request({
      url: baseApiUrl6 + '/ptm/curdata',
      method: 'get',
      params
    })
  },
  // 实时统计计数 适用车辆统计场景-检测状态页面
  ctmCurdata: (params) => {
    return request({
      url: baseApiUrl6 + '/ctm/curdata',
      method: 'get',
      params
    })
  },

  // 异常检测记录（图片） 适用飞丝检测-检测状态页面
  fsmAbimg: (params) => {
    return request({
      url: baseApiUrl1 + '/fsm/abimg',
      method: 'get',
      params
    })
  },
  // 异常检测记录（图片） 适用火灾检测-检测状态页面
  hzmAbimg: (params) => {
    return request({
      url: baseApiUrl1 + '/hzm/abimg',
      method: 'get',
      params
    })
  },
  // 异常检测记录（图片） 适用安全帽检测-检测状态页面
  aqmAbimg: (params) => {
    return request({
      url: baseApiUrl1 + '/aqm/abimg',
      method: 'get',
      params
    })
  },
  //异常检测记录（异常时间）  适用飞丝检测-检测状态页面
  fsmAbtimes: (params) => {
    return request({
      url: baseApiUrl3 + '/fsm/abtimes',
      method: 'get',
      params
    })
  },
  //异常检测记录（异常时间）  适用火灾检测-检测状态页面
  hzmAbtimes: (params) => {
    return request({
      url: baseApiUrl3 + '/hzm/abtimes',
      method: 'get',
      params
    })
  },
  //异常检测记录（异常时间）  适用安全帽检测-检测状态页面
  aqmAbtimes: (params) => {
    return request({
      url: baseApiUrl3 + '/aqm/abtimes',
      method: 'get',
      params
    })
  }
}
