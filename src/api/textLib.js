import request from '@/utils/request'

const group_name = "textlibrary";
export default {
  getTextLibData(lib,page,size=10){
    return request({
      url: `/${group_name}/${lib}/${page}/${size}`,
      method: 'get',
    })
  },

  getAllTextLibData(page,size=10){
    return request({
      url:`/${group_name}/${page}/${size}`,
      method:'get'
    })
  },

  createTextLib(newLibInfor){
    return request({
      url:`/${group_name}`,
      method:'post',
      data:newLibInfor
    })
  },

  deleteTextLib(id){
    return request({
      url:`/${group_name}/${id}`,
      method:'delete'
    })
  },

  editTextLib(id,editLibInfor){
    return request({
      url:`/${group_name}/${id}`,
      method:'put',
      data:editLibInfor
    })
  },

  deleteArticle(lib,id){
    return request({
      url:`/${group_name}/${lib}/${id}`,
      method:'delete',
    })
  },

  getSingleArticle(lib,id){
    return request({
      url:`${group_name}/data/${lib}/${id}`,
      method:'get'
    })
  },

  getRelatedArticle(lib,id){
    return request({
      url:`${group_name}/related/${lib}/${id}`,
      method:'get'
    })
  },

  uploadArticles(lib,formdata){
    return request({
      url:`${group_name}/${lib}`,
      method:'post',
      data: formdata
    })
  }




}
