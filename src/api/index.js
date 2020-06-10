import fetch from '../utils/fecth'
/**
 * params:  一般用于get请求的Url请求头
 * data:    一般用于post请求的body报文
 */

// 获取信息
export function getUsers() {
  return fetch({
    url: `/api/users`,
    method: 'get'
  })
}