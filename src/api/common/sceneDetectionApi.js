import request from '@/utils/request.js'

// const baseApiUrl = '/api29999'; // 本地
const baseApiUrl = import.meta.env.VITE_API_URL + ':29999/api'; // 打包


/**
 * 检测场景api
 *
 * @author zzdz
 * @date  2023/09/05 08:51
 **/

export const sceneDetectionApi = {
    // 飞丝模型启动
    fsmStart: (params) => {
        return request({
            url: baseApiUrl + '/fsm/start',
            method: 'get',
            params
        })
    },
    // 火灾模型启动
    hzmStart: (params) => {
        return request({
            url: baseApiUrl + '/hzm/start',
            method: 'get',
            params
        })
    },
    // 安全帽启动
    aqmStart: (params) => {
        return request({
            url: baseApiUrl + '/aqm/start',
            method: 'get',
            params
        })
    },
    // 人员统计启动
    ptmStart: (params) => {
        return request({
            url: baseApiUrl + '/ptm/start',
            method: 'get',
            params
        })
    },
    // 车辆统计启动
    ctmStart: (params) => {
        return request({
            url: baseApiUrl + '/ctm/start',
            method: 'get',
            params
        })
    }
}
