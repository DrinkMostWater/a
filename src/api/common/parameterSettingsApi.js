import request from '@/utils/request.js'

// const baseApiUrl = '/api30010'; // 本地
const baseApiUrl = import.meta.env.VITE_API_URL + ':30010/api'; // 打包

/**
 * 参数设置api
 *
 * @author zzdz
 * @date  2023/09/05 08:51
 **/

export const parameterSettingsApi = {
  // 模型参数预览 适用飞丝检测场景
  fsmPreview: (params) => {
    return request({
      url: baseApiUrl + '/fsm/preview',
      method: 'get',
      params
    })
  },

  // 模型参数预览 适用火灾检测场景
  hzmPreview: (params) => {
    return request({
      url: baseApiUrl + '/hzm/preview',
      method: 'get',
      params
    })
  },

  // 模型参数预览 适用安全帽检测场景
  aqmPreview: (params) => {
    return request({
      url: baseApiUrl + '/aqm/preview',
      method: 'get',
      params
    })
  },
  // 模型参数预览 适用人员统计场景
  ptmPreview: (params) => {
    return request({
      url: baseApiUrl + '/ptm/preview',
      method: 'get',
      params
    })
  },
  // 模型参数预览 适用车辆统计场景
  ctmPreview: (params) => {
    return request({
      url: baseApiUrl + '/ctm/preview',
      method: 'get',
      params
    })
  },
  // 恢复默认按钮 适用飞丝检测场景
  fsmRestore: (params) => {
    return request({
      url: baseApiUrl + '/fsm/restore',
      method: 'get',
      params
    })
  },
  // 恢复默认按钮 适用火灾检测场景
  hzmRestore: (params) => {
    return request({
      url: baseApiUrl + '/hzm/restore',
      method: 'get',
      params
    })
  },
  // 恢复默认按钮 适用安全帽检测场景
  aqmRestore: (params) => {
    return request({
      url: baseApiUrl + '/aqm/restore',
      method: 'get',
      params
    })
  },
  // 恢复默认按钮 适用人员统计场景
  ptmRestore: (params) => {
    return request({
      url: baseApiUrl + '/ptm/restore',
      method: 'get',
      params
    })
  },
  // 恢复默认按钮 适用车辆统计场景
  ctmRestore: (params) => {
    return request({
      url: baseApiUrl + '/ctm/restore',
      method: 'get',
      params
    })
  },
  // 执行按钮
  // 适用飞丝检测场景
  fsmExecute: (params) => {
    return request({
      url: baseApiUrl + '/fsm/execute',
      method: 'get',
      params
    })
  },
  // 适用火灾检测场景
  hzmExecute: (params) => {
    return request({
      url: baseApiUrl + '/hzm/execute',
      method: 'get',
      params
    })
  },
  // 适用安全帽检测场景
  aqmExecute: (params) => {
    return request({
      url: baseApiUrl + '/aqm/execute',
      method: 'get',
      params
    })
  },
  // 适用人员统计场景
  ptmExecute: (params) => {
    return request({
      url: baseApiUrl + '/ptm/execute',
      method: 'get',
      params
    })
  },
  // 适用车辆统计场景
  ctmExecute: (params) => {
    return request({
      url: baseApiUrl + '/ctm/execute',
      method: 'get',
      params
    })
  },
  // 保存按钮
  // 适用飞丝检测场景
  fsmAlter: (params) => {
    return request({
      url: baseApiUrl + '/fsm/alter',
      method: 'get',
      params
    })
  },
  // 适用火灾检测场景
  hzmAlter: (params) => {
    return request({
      url: baseApiUrl + '/hzm/alter',
      method: 'get',
      params
    })
  },
  // 适用安全帽检测场景
  aqmAlter: (params) => {
    return request({
      url: baseApiUrl + '/aqm/alter',
      method: 'get',
      params
    })
  },
  // 适用人员统计场景
  ptmAlter: (params) => {
    return request({
      url: baseApiUrl + '/ptm/alter',
      method: 'get',
      params
    })
  },
  // 适用车辆统计场景
  ctmAlter: (params) => {
    return request({
      url: baseApiUrl + '/ctm/alter',
      method: 'get',
      params
    })
  }
}
