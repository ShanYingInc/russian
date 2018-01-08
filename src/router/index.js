import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/Index/Index.vue'
import News from '../components/News/News.vue'
import Introduction from '../components/Introduction/Introduction.vue'
import Staff from '../components/Staff/Member.vue'
import Fulltime from '../components/Staff/Fulltime.vue'
import Parttime from '../components/Staff/Parttime.vue'
import Director from '../components/Staff/Director.vue'
import Administrative from '../components/Staff/Administrative.vue'
import Vision from '../components/Introduction/Vision.vue'
import Important from '../components/Introduction/Important.vue'
import Class from '../components/Class/Classin.vue'
import Auxiliary from '../components/Class/Auxiliary.vue'
import Alternative from '../components/Class/Alternative.vue'
import Courseinformation from '../components/Class/Courseinformation.vue'
import Course from '../components/Class/Course.vue'
import Required from '../components/Class/Required.vue'
import Relevant from '../components/Class/Relevant.vue'
import Credit from '../components/Class/Credit.vue'
import Enrollment from '../components/Enrollment/Enrollment.vue'
import Answer from '../components/Enrollment/Answer.vue'
import Admission from '../components/Enrollment/Admission.vue'
import Winning from '../components/Winning/Winning.vue'

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
      path: '/Winning',
      component: Winning
    },
    {
      path: '/News',
      component: News,
      children: []
    },
    {
      path: '/Introduction',
      component: Introduction,
      children:[
        {
        path: 'Important',
        component: Important,
      },
      {
        path: 'Vision',
        component: Vision,
      },
    ]
    },
    {
      path: '/Class',
      component: Class,
      children:[
        {
        path: 'Alternative',
        component: Alternative,
      },
      {
        path: 'Auxiliary',
        component: Auxiliary,
      },
      {
        path: 'Courseinformation',
        component: Courseinformation,
      },
      {
        path: 'Course',
        component: Course,
      },
      {
        path: 'Required',
        component: Required,
      },
      {
        path: 'Relevant',
        component: Relevant,
      },
      {
        path: 'Credit',
        component: Credit,
      },
    ]
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
          component: Parttime
        },
        {
          path: 'Director',
          component: Director
        },
        {
          path: 'Administrative',
          component: Administrative
        },
        {
          path: '*',
          redirect: 'Fulltime'
        }
      ]
    },
    {
      path: '/Course',
    },
    {
      path: '/Enrollment',
      component: Enrollment,
      children:[
        {
        path: 'Admission',
        component: Admission,
      },
      {
        path: 'Answer',
        component: Answer,
      },
    ]
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
