import request from '@/utils/request'

const group_name = "user";
export default {
  login(username,password){
    return request({
      url: `/${group_name}/login`,
      method: 'post',
      data: {
        "username": username,
        "password": password
      }
    })
  }
}
