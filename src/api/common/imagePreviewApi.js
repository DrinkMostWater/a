import request from '@/utils/request.js'

// const baseApiUrl = '/api30004'; // 本地
const baseApiUrl = import.meta.env.VITE_API_URL + ':30004/api'; // 打包

/**
 * 图像预览Api
 *
 * @author zzdz
 * @date  2023/09/05 08:51
 **/

export const ImagePreviewApi = {
  // 异常图片
  // 适用飞丝检测场景
  fsmAbimgs: (params) => {
    return request({
      url: baseApiUrl + '/fsm/abimgs',
      method: 'get',
      params
    })
  },
  // 适用火灾检测场景
  hzmAbimgs: (params) => {
    return request({
      url: baseApiUrl + '/hzm/abimgs',
      method: 'get',
      params
    })
  },
  // 适用安全帽检测场景
  aqmAbimgs: (params) => {
    return request({
      url: baseApiUrl + '/aqm/abimgs',
      method: 'get',
      params
    })
  },
  // 适用人员统计场景
  ptmAbimgs: (params) => {
    return request({
      url: baseApiUrl + '/ptm/abimgs',
      method: 'get',
      params
    })
  },
  // 适用车辆统计场景
  ctmAbimgs: (params) => {
    return request({
      url: baseApiUrl + '/ctm/abimgs',
      method: 'get',
      params
    })
  },
  // 正常图片
  // 适用飞丝检测场景
  fsmNorimgs: (params) => {
    return request({
      url: baseApiUrl + '/fsm/norimgs',
      method: 'get',
      params
    })
  },
  // 适用火灾检测场景
  hzmNorimgs: (params) => {
    return request({
      url: baseApiUrl + '/hzm/norimgs',
      method: 'get',
      params
    })
  },
  // 适用安全帽检测场景
  aqmNorimgs: (params) => {
    return request({
      url: baseApiUrl + '/aqm/norimgs',
      method: 'get',
      params
    })
  },
  // 适用人员统计场景
  ptmNorimgs: (params) => {
    return request({
      url: baseApiUrl + '/ptm/norimgs',
      method: 'get',
      params
    })
  },
  // 适用车辆统计场景
  ctmNorimgs: (params) => {
    return request({
      url: baseApiUrl + '/ctm/norimgs',
      method: 'get',
      params
    })
  }
}
