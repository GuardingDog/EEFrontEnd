import request from '@/utils/dictRequest'

export default {
    init() {
        return request({
            url: '/init',
            method: 'get'
        })
    },
    setCategory(id) {
        return request({
            url: '/setCategory',
            method: 'post',
            data: {
                category: id
            }
        })
    },
    getTransData() {
        return request({
            url: '/upload',
            method: 'get'
        })
    },
    sendResult(data) {
        return request({
            url: '/results',
            method: 'post',
            data: data
        })
    },
    end(id) {
        return request({
            url: '/end',
            method: 'post',
            data: {
                category: id
            }
        })
    },
    downloadDictionary(){
        return request({
            url: '/return_file',
            method: 'get',
        })
    }
}
