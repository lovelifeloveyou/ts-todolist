import { message } from 'antd'
import axios from 'axios'
import Config from 'src/config'

const request = axios.create({
  baseURL: Config.API_URI,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

request.interceptors.response.use(response => {
  const res: IRes = response.data
  // 当error_code不为0时，统一弹出错误提示框，并抛出错误
  if (res.error_code) {
    message.warn(res.msg)
    throw new Error(res.msg)
  }
  // 当error_code为0时，继续返回请求
  return response.data
})

export default request
