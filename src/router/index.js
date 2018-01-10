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
import Tutor from '../components/Staff/Tutor.vue'
import StudentInformation from '../components/News/SubMenu/StudentInformation.vue'
import Test from '../components/News/SubMenu/Test/Test.vue'
import Testnews from '../components/News/SubMenu/Test/Testnews.vue'
import Testannouncement from '../components/News/SubMenu/Test/Testannouncement.vue'
import Testintroduction from '../components/News/SubMenu/Test/Testintroduction.vue'
import Testtime from '../components/News/SubMenu/Test/Testtime.vue'
import Testdownload from '../components/News/SubMenu/Test/Testdownload.vue'
import Student from '../components/News/SubMenu/Student/Studentinformation.vue'
import Departmenttolearn from '../components/News/SubMenu/Student/Departmenttolearn.vue'
import Professional from '../components/News/SubMenu/Student/Professional.vue'
import Sar from '../components/News/SubMenu/Student/Sar.vue'
import Scholarship from '../components/News/SubMenu/Student/Scholarship.vue'
import Sophomore from '../components/News/SubMenu/Student/Sophomore.vue'
import Statisticsemployment from '../components/News/SubMenu/Student/Statisticsemployment.vue'
import Friends from '../components/News/SubMenu/Friends/Friends.vue'
import Activities from '../components/News/SubMenu/Friends/Activities.vue'
import Celebrity from '../components/News/SubMenu/Friends/Celebrity.vue'
import Highlights from '../components/News/SubMenu/Friends/Highlights.vue'
import Latestnews from '../components/News/SubMenu/Friends/Latestnews.vue'
import World from '../components/News/SubMenu/Friends/World.vue'
import Friendsintroduction from '../components/News/SubMenu/Friends/Friendsintroduction.vue'




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
      children: [
        {
          path: 'StudentInformation',
          component: StudentInformation
        },
        {
          path: 'Test',
          component: Test,
          children: [
            {
              path: 'Testnews',
              component: Testnews
            },
            {
              path: 'Testannouncement',
              component: Testannouncement
            },{
              path: 'Testdownload',
              component: Testdownload
            },{
              path: 'Testintroduction',
              component: Testintroduction
            },{
              path: 'Testtime',
              component: Testtime
            },
          ]
        },
        {
          path: 'Student',
          component: Student,
          children: [
            {
              path: 'Departmenttolearn',
              component: Departmenttolearn
            },
            {
              path: 'Professional',
              component: Professional
            },
            {
              path: 'Sar',
              component: Sar
            },
            {
              path: 'Scholarship',
              component: Scholarship
            },
            {
              path: 'Sophomore',
              component: Sophomore
            },
            {
              path: 'Statisticsemployment',
              component: Statisticsemployment
            }
          ]
        },
        {
          path: 'Friends',
          component: Friends,
          children: [
            {
              path: 'Activities',
              component: Activities
            },
            {
              path: 'Celebrity',
              component: Celebrity
            },
            {
              path: 'Highlights',
              component: Highlights
            },
            {
              path: 'Latestnews',
              component: Latestnews
            },
            {
              path: 'World',
              component: World
            },
            {
              path: 'Friendsintroduction',
              component: Friendsintroduction
            },
          ]
        },
      ]
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
          path: 'Tutor',
          component: Tutor
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
