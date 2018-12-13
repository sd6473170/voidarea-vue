import Vue from 'vue'
import Router from 'vue-router'
import AuthorDetail from '../pages/AuthorDetail'
import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AuthorDetail',
      name: 'AuthorDetail',
      component: AuthorDetail
    }
  ]
})
