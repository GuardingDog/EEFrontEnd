import request from '@/utils/request'

const group_name = "event_lib";
export default {
    createEventLib(data) {
        return request({
            url: `/${group_name}`,
            method: 'post',
            data: data,
        })
    },
    getTextLibAndDictionary() {
        return request({
            url: `/${group_name}/init`,
            method: 'get',
        })
    },
    getAllEventLib() {
        return request({
            url: `/${group_name}`,
            method: 'get',
        })
    },
    getEventLib(page, size = 10) {
        return request({
            url: `/${group_name}/${page}/${size}`,
            method: 'get',
        })
    },
    delEventLib(id) {
        return request({
            url: `/${group_name}/${id}`,
            method: 'delete',
        })
    },
    getStatus(id) {
        return request({
            url: `/${group_name}/${id}`,
            method: 'get',
        })
    },
    getEventLibDetail(id) {
        return request({
            url: `/${group_name}/detail/${id}`,
            method: 'get',
        })
    }
}