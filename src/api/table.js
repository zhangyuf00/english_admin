import request from '@/utils/request'


export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getVideoList(params) {
  return request({
    url: '/admin/question/list',
    method: 'get',
    params
  })
}
