import request from '@/utils/request'

const group_name = "dic";
export default {
    getDictionaryData(page, size = 10) {
        return request({
            url: `/${group_name}/${page}/${size}`,
            method: 'get',
        })
    },
    getDictionary(id) {
        return request({
            url: `/${group_name}/data/${id}`,
            method: 'get',
        })
    },
    modifyDictionary(id, name, desc) {
        return request({
            url: `/${group_name}/${id}`,
            method: 'put',
            data: {
                "name": name,
                "desc": desc,
            },
        })
    },
    delDictionary(id) {
        return request({
            url: `/${group_name}/${id}`,
            method: 'delete',
        })
    },
    createDictionary(formData) {
        return request({
            url: `/${group_name}`,
            method: 'post',
            data: formData
        })
    },
    downloadDictionary(id) {
        return request({
            url: `/${group_name}/download/${id}`,
            method: 'get',
        })
    },
    createDictionaryByMyself(json){
      return request({
        url:`/${group_name}/self`,
        method: 'post',
        data: json
      })
    }

}
