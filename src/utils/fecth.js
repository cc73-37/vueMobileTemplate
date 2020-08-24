import axios from 'axios'
import store from '../store'
// import Vue from 'vue'
const service = axios.create({
  timeout: 30000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 拦截请求
service.interceptors.request.use(config => {
  let token = sessionStorage.token
  store.state.showLoading = true
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
})

// 拦截响应
service.interceptors.response.use(
  response => {
    store.state.showLoading = false
    return response.data
  },
  error => {
    store.state.showLoading = false
    return Promise.reject(error)
  }
)

export default service
