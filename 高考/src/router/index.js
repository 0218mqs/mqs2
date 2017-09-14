import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import list from '@/components/list'
import loading from '@/components/loading'
import notice from '@/components/notice'
import noticeLoad from '@/components/noticeLoad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loading',
      component: loading
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/list/:id',
      name: 'list',
      component: list
    },
    {
      path: '/noticeLoad',
      name: 'noticeLoad',
      component: noticeLoad
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    }
  ]
})
