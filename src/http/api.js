/*
    接口配调用文件
    by:David 2018.6.14
*/
import fly from './config'
import qs from 'qs'

import config from '../config'
const host = config.host;
const appKey = config.appKey;
const appid = config.appid;

/**
 * 接口模版====post
 *
 * export const test = params => {return fly.post(`${root}/xx/xx`, qs.stringify(params))};
 *
 * 接口模版====get
 *
 * export const test1 = function(){return fly.get(`${root}/api/getNewsList`)}
 *
 *
 * 用法：
 * 在 页面用引入 test
 * import {test} from '../../http/api.js'
 *
 * test(params).then(res=>{ console.log(res) })
 */

// export const test = params => {
//     return fly.post(`${host}/xx/xx`, qs.stringify(params))
// };

// 通用的get请求
export const get = (params) => {
    return fly.get(`${host}${params.url}`, qs.stringify(params.data))
};

// 通用的post请求
export const post = (params) => {
    return fly.post(`${host}${params.url}`, qs.stringify(params.data))
};


// 获取banner列表
export const getBanner = () => {
    return fly.get(`${host}/mini/banner/list?appKey=${appKey}`)
};

// 获取店铺优惠券
export const getClassify = () => {
    return fly.get(`${host}/mini/banner/list?appKey=${appKey}`)
};

// 获取猜你喜欢
export const getGuess = () => {
    return fly.get(`${host}/mini/banner/list?appKey=${appKey}`)
};

// 获取推荐列表
export const getRecommend = () => {
    return fly.get(`${host}/mini/banner/list?appKey=${appKey}`)
};