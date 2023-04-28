import Request from './request'
import { AxiosResponse } from 'axios'

import { BASE_URL, TIME_OUT } from './config'
const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    }
  }
})

export default request
