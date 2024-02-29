import request from '@/utils/request.js'

// const baseApiUrl = '/api30005'; // 本地
const baseApiUrl = import.meta.env.VITE_API_URL + ':30005/api'; // 打包

/**
 * 设备状态Api
 *
 * @author zzdz
 * @date  2023/09/05 08:51
 **/

export const deviceStatusApi = {
  // 硬件连接状态 适用全部检测场景
  aitype: (params) => {
    return request({
      url: baseApiUrl + '/aitype',
      method: 'get',
      params
    })
  },
  // 硬件运行天数 适用全部检测场景
  aidays: (params) => {
    return request({
      url: baseApiUrl + '/aidays',
      method: 'get',
      params
    })
  },
  // 硬件运行状态统计  适用全部检测场景
  aicom: (params) => {
    return request({
      url: baseApiUrl + '/aicom',
      method: 'get',
      params
    })
  }
}
