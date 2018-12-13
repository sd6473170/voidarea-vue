import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AuthorDetail from '../pages/AuthorDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/AuthorDetail',
      name: 'AuthorDetail',
      component: AuthorDetail
    }
  ]
})
