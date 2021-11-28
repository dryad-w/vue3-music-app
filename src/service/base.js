import axios from 'axios'
import axiosRetry from 'axios-retry'

axiosRetry(axios, { retries: 5 })

const EER_OK = 0
// todo 加自己域名
// const baseURL = process.env.NODE_ENV === 'production' ? 'http://dryad.ink/music/' : '/'
const baseURL = process.env.NODE_ENV === 'production' ? 'http://101.43.55.151/music/' : '/'
// const baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:9000/' : '/'

axios.defaults.baseURL = baseURL

export function get (url, params) {
  return axios.get(url, {
    params
  }).then((res) => {
    const serviceData = res.data
    if (serviceData.code === EER_OK) {
      return serviceData.result
    }
  }).catch((err) => {
    console.log(err)
  })
}
