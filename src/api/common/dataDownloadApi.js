import request from '@/utils/request.js'

// const baseApiUrl = '/api60000'; // 本地
const baseApiUrl = import.meta.env.VITE_API_URL + ':60000/api'; // 打包

/**
 * 数据回传Api
 *
 * @author zzdz
 * @date  2023/09/05 08:51
 **/

export const dataDownloadApi = {
  datadownload: (params) => {
    return request({
      url: baseApiUrl + '/datadownload',
      method: 'get',
      params
    })
  }
}
