import Vue from "vue";
import Router from "vue-router";
import IndexPage from "../components/Index/Index.vue";

import Performance from '../components/Index/Performance.vue';

// import News from "../components/Nav/News/News.vue";

import Staff from "../components/Nav/Staff/Member.vue";
// import Fulltime from "../components/Nav/Staff/Fulltime.vue";
// import Parttime from "../components/Nav/Staff/Parttime.vue";
// import Director from "../components/Nav/Staff/Director.vue";
// import Tutor from "../components/Nav/Staff/Tutor.vue";
// import Administrative from "../components/Nav/Staff/Administrative.vue";

import Introduction from "../components/Nav/Introduction/Introduction.vue";
import Vision from "../components/Nav/Introduction/Vision.vue";
import Important from "../components/Nav/Introduction/Important.vue";

// import Class from "../components/Nav/Class/Classin.vue";
// import Auxiliary from "../components/Nav/Class/Auxiliary.vue";
// import Alternative from "../components/Nav/Class/Alternative.vue";
// import Courseinformation from "../components/Nav/Class/Courseinformation.vue";
// import Course from "../components/Nav/Class/Course.vue";
// import Required from "../components/Nav/Class/Required.vue";
// import Relevant from "../components/Nav/Class/Relevant.vue";
// import Credit from "../components/Nav/Class/Credit.vue";

// import Enrollment from "../components/Nav/Enrollment/Enrollment.vue";
// import Answer from "../components/Nav/Enrollment/Answer.vue";
// import Admission from "../components/Nav/Enrollment/Admission.vue";

// import Winning from "../components/Nav/Winning/Winning.vue";

import Teaching100 from '../components/Nav/Teaching/Teaching100.vue';
import Teaching101 from '../components/Nav/Teaching/Teaching101.vue';
import Teaching102 from '../components/Nav/Teaching/Teaching102.vue';
import Teaching from '../components/Nav/Teaching/Teaching.vue';

// import StudentInformation from "../components/SubMenu/StudentInformation.vue";

// import Test from "../components/SubMenu/Test/Test.vue";
// import Testnews from "../components/SubMenu/Test/Testnews.vue";
// import Testannouncement from "../components/SubMenu/Test/Testannouncement.vue";
// import Testintroduction from "../components/SubMenu/Test/Testintroduction.vue";
// import Testtime from "../components/SubMenu/Test/Testtime.vue";
// import Testdownload from "../components/SubMenu/Test/Testdownload.vue";

// import Student from "../components/SubMenu/Student/Studentinformation.vue";
// import Departmenttolearn from "../components/SubMenu/Student/Departmenttolearn.vue";
// import Professional from "../components/SubMenu/Student/Professional.vue";
// import Sar from "../components/SubMenu/Student/Sar.vue";
// import Scholarship from "../components/SubMenu/Student/Scholarship.vue";
// import Sophomore from "../components/SubMenu/Student/Sophomore.vue";
// import Statisticsemployment from "../components/SubMenu/Student/Statisticsemployment.vue";

// import Friends from "../components/SubMenu/Friends/Friends.vue";
// import Activities from "../components/SubMenu/Friends/Activities.vue";
// import Celebrity from "../components/SubMenu/Friends/Celebrity.vue";
// import Highlights from "../components/SubMenu/Friends/Highlights.vue";
// import Latestnews from "../components/SubMenu/Friends/Latestnews.vue";
// import World from "../components/SubMenu/Friends/World.vue";
// import Friendsintroduction from "../components/SubMenu/Friends/Friendsintroduction.vue";

// import Events from "../components/SubMenu/Events/Events.vue";
// import Lecture from "../components/SubMenu/Events/Lecture.vue";
// import Read from "../components/SubMenu/Events/Read.vue";
// import Tea from "../components/SubMenu/Events/Tea.vue";
// import Workshop from "../components/SubMenu/Events/Workshop.vue";
// import Eventsintroduction from "../components/SubMenu/Events/Eventsintroduction.vue";

// import Network from "../components/SubMenu/Network/Network.vue";
// import Friendlylinks from "../components/SubMenu/Network/Friendlylinks.vue";
// import Learning from "../components/SubMenu/Network/Learning.vue";
// import Sister from "../components/SubMenu/Network/Sister.vue";
// import Networkemployment from "../components/SubMenu/Network/Networkemployment.vue";

// import Downloads from "../components/SubMenu/Downloads/Downloads.vue";
// import Order from "../components/SubMenu/Downloads/Order.vue";
// import Downloadsstudent from "../components/SubMenu/Downloads/Student.vue";

import Maintext from '../components/Maintext.vue'
import NewsContent from '../components/NewsContent.vue'
import NewsList from '../components/NewsList.vue'

import EventHighlignt from '../components/EventHighlignt'
import Album from '../components/Album'

import TeachingExcellenceList from '../components/TeachingExcellenceList'
import TeachingExcellenceItem from '../components/TeachingExcellenceItem'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: IndexPage
    },
    {
      path: '/Introduction',
      component: Introduction,
      children: [
        {
          path: 'Important',
          component: Important
        },
        {
          path: 'Vision',
          component: Vision
        }
      ]
    },
    {
      path: "/Staff/:type",
      component: Staff,
      props: true
    },
    {
      path: '/content',
      component: Maintext,
      props (route) {
        return route.query || {}
      }
    },
    {
      path: '/newsList',
      component: NewsList
    },
    {
      path: '/news/:newsId',
      component: NewsContent,
      props: true
    },
    {
      path: '/eventHighlignt',
      component: EventHighlignt
    },
    {
      path: '/album/:albumId',
      component: Album,
      props: true
    },
    {
      path: '/TeachingExcellenceList/:TeachingExcellenceYear',
      component: TeachingExcellenceList,
      props: true
    },
    {
      path: '/TeachingExcellenceItem/:TeachingExcellenceId',
      component: TeachingExcellenceItem,
      props: true
    },
    {
      path: '/Performance',
      component: Performance
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
});
