import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('~views/Home.vue')
    },
    {
      path: '/article',
      name: 'Article',
      component: () => import('~views/Article.vue')
    },
    {
      path: '/article/:id',
      name: 'ArticleItem',
      component: () => import('~views/ArticleItem.vue')
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('~views/Project.vue')
    },
    {
      path: '/404',
      alias: '*',
      name: '404',
      component: () => import('~views/404.vue')
    }
  ]
})
