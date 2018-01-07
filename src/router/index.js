import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/Index/Index.vue'
import News from '../components/News/News.vue'
import Introduction from '../components/Introduction/Introduction.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/News',
      component: News,
      children: []
    },
    {
      path: '/Introduction',
      component: Introduction
    },
    {
      path: '/Course',
    },
    {
      path: '/Enrollment'
    },
    {
      path: '/Achievement'
    },
    {
      path: '/Award'
    },
    {
      path: '/Intern'
    },
    {
      path: '/Project'
    }
  ]
})
