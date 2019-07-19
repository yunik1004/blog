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
      component: () => import('~components/base/BaseArticle.vue'),
      children: [
        {
          path: '',
          name: 'Article',
          component: () => import('~views/Article.vue')
        },
        {
          path: ':id',
          name: 'ArticleItem',
          component: () => import('~views/ArticleItem.vue')
        }
      ]
    },
    {
      path: '/project',
      component: () => import('~components/base/BaseProject.vue'),
      children: [
        {
          path: '',
          name: 'Project',
          component: () => import('~views/Project.vue')
        },
        {
          path: ':id',
          name: 'ProjectItem',
          component: () => import('~views/ProjectItem.vue')
        }
      ]
    },
    {
      path: '/404',
      alias: '*',
      name: '404',
      component: () => import('~views/NotFound.vue')
    }
  ]
})
