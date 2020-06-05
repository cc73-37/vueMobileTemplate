import axios from 'axios'
// import Vue from 'vue'
const service = axios.create({
  // baseURL: process.env.BASE_URL, // api的base_url
  timeout: 30000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 拦截请求
service.interceptors.request.use(config => {

  let token = sessionStorage.token
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
})

// 拦截响应
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
