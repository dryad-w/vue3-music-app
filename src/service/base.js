import axios from 'axios'

const EER_OK = 0
const baseURL = '/'

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
