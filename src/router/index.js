import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/Index/Index.vue'
import News from '../components/News/News.vue'
import Introduction from '../components/Introduction/Introduction.vue'
import Staff from '../components/Staff/Member.vue'

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
      path: '/Staff',
      component: Staff,
      children: [
        {
          path: 'Fulltime',
          component: Fulltime,
        },
        {
          path: 'Parttime',
          component: Parttime,
        },
        {
          path: 'Director',
          component: Director,
        },
        {
          path: 'Administrative',
          component: Administrative,
        }
      ]
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
