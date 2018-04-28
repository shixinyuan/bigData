import axios from 'axios'

// api 路径
const HOST = 'https://cnodejs.org/api/v1'

export function fetch (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: HOST + url
      // params:params
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {

  /**
     * 用户登陆
     * @param {any} username
     * @returns
     */
  Login (username) {
    return fetch(`/login?username=${username}`, 'post')
  }
}
