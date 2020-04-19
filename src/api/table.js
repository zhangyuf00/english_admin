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

export function updateVideoList(params) {
  return request({
    url: '/admin/question/update',
    method: 'post',
    params
  })
}

export function addVideo(params) {
  return request({
    url: '/admin/question/add',
    method: 'post',
    params
  })
}
