import Vue from "vue";
import Router from "vue-router";
import IndexPage from "../components/Index/Index.vue";

import Performance from '../components/Index/Performance.vue';

// import News from "../components/Nav/News/News.vue";

import Staff from "../components/Nav/Staff/Member.vue";
import Fulltime from "../components/Nav/Staff/Fulltime.vue";
import Parttime from "../components/Nav/Staff/Parttime.vue";
import Director from "../components/Nav/Staff/Director.vue";
import Tutor from "../components/Nav/Staff/Tutor.vue";
import Administrative from "../components/Nav/Staff/Administrative.vue";

import Introduction from "../components/Nav/Introduction/Introduction.vue";
import Vision from "../components/Nav/Introduction/Vision.vue";
import Important from "../components/Nav/Introduction/Important.vue";

import Class from "../components/Nav/Class/Classin.vue";
import Auxiliary from "../components/Nav/Class/Auxiliary.vue";
import Alternative from "../components/Nav/Class/Alternative.vue";
import Courseinformation from "../components/Nav/Class/Courseinformation.vue";
import Course from "../components/Nav/Class/Course.vue";
import Required from "../components/Nav/Class/Required.vue";
import Relevant from "../components/Nav/Class/Relevant.vue";
import Credit from "../components/Nav/Class/Credit.vue";

import Enrollment from "../components/Nav/Enrollment/Enrollment.vue";
import Answer from "../components/Nav/Enrollment/Answer.vue";
import Admission from "../components/Nav/Enrollment/Admission.vue";

import Winning from "../components/Nav/Winning/Winning.vue";

import Teaching100 from '../components/Nav/Teaching/Teaching100.vue';
import Teaching101 from '../components/Nav/Teaching/Teaching101.vue';
import Teaching102 from '../components/Nav/Teaching/Teaching102.vue';
import Teaching from '../components/Nav/Teaching/Teaching.vue';

import StudentInformation from "../components/SubMenu/StudentInformation.vue";

import Test from "../components/SubMenu/Test/Test.vue";
import Testnews from "../components/SubMenu/Test/Testnews.vue";
import Testannouncement from "../components/SubMenu/Test/Testannouncement.vue";
import Testintroduction from "../components/SubMenu/Test/Testintroduction.vue";
import Testtime from "../components/SubMenu/Test/Testtime.vue";
import Testdownload from "../components/SubMenu/Test/Testdownload.vue";

import Student from "../components/SubMenu/Student/Studentinformation.vue";
import Departmenttolearn from "../components/SubMenu/Student/Departmenttolearn.vue";
import Professional from "../components/SubMenu/Student/Professional.vue";
import Sar from "../components/SubMenu/Student/Sar.vue";
import Scholarship from "../components/SubMenu/Student/Scholarship.vue";
import Sophomore from "../components/SubMenu/Student/Sophomore.vue";
import Statisticsemployment from "../components/SubMenu/Student/Statisticsemployment.vue";

import Friends from "../components/SubMenu/Friends/Friends.vue";
import Activities from "../components/SubMenu/Friends/Activities.vue";
import Celebrity from "../components/SubMenu/Friends/Celebrity.vue";
import Highlights from "../components/SubMenu/Friends/Highlights.vue";
import Latestnews from "../components/SubMenu/Friends/Latestnews.vue";
import World from "../components/SubMenu/Friends/World.vue";
import Friendsintroduction from "../components/SubMenu/Friends/Friendsintroduction.vue";

import Events from "../components/SubMenu/Events/Events.vue";
import Lecture from "../components/SubMenu/Events/Lecture.vue";
import Read from "../components/SubMenu/Events/Read.vue";
import Tea from "../components/SubMenu/Events/Tea.vue";
import Workshop from "../components/SubMenu/Events/Workshop.vue";
import Eventsintroduction from "../components/SubMenu/Events/Eventsintroduction.vue";

import Network from "../components/SubMenu/Network/Network.vue";
import Friendlylinks from "../components/SubMenu/Network/Friendlylinks.vue";
import Learning from "../components/SubMenu/Network/Learning.vue";
import Sister from "../components/SubMenu/Network/Sister.vue";
import Networkemployment from "../components/SubMenu/Network/Networkemployment.vue";

import Downloads from "../components/SubMenu/Downloads/Downloads.vue";
import Order from "../components/SubMenu/Downloads/Order.vue";
import Downloadsstudent from "../components/SubMenu/Downloads/Student.vue";

import Maintext from '../components/Maintext.vue'
import NewsContent from '../components/NewsContent.vue'
import NewsList from '../components/NewsList.vue'

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
      path: "/Winning",
      component: Winning
    },
    {
      path: "/Test",
      component: Test,
      children: [
        {
          path: "Testnews",
          component: Testnews
        },
        {
          path: "Testannouncement",
          component: Testannouncement
        },
        {
          path: "Testdownload",
          component: Testdownload
        },
        {
          path: "Testintroduction",
          component: Testintroduction
        },
        {
          path: "Testtime",
          component: Testtime
        }
      ]
    },
    {
      path: "/StudentInformation",
      component: StudentInformation
    },
    {
      path: "/Student",
      component: Student,
      children: [
        {
          path: "Departmenttolearn",
          component: Departmenttolearn
        },
        {
          path: "Professional",
          component: Professional
        },
        {
          path: "Sar",
          component: Sar
        },
        {
          path: "Scholarship",
          component: Scholarship
        },
        {
          path: "Sophomore",
          component: Sophomore
        },
        {
          path: "Statisticsemployment",
          component: Statisticsemployment
        }
      ]
    },
    {
      path: "/Friends",
      component: Friends,
      children: [
        {
          path: "Activities",
          component: Activities
        },
        {
          path: "Celebrity",
          component: Celebrity
        },
        {
          path: "Highlights",
          component: Highlights
        },
        {
          path: "Latestnews",
          component: Latestnews
        },
        {
          path: "World",
          component: World
        },
        {
          path: "Friendsintroduction",
          component: Friendsintroduction
        }
      ]
    },
    {
      path: "/Network",
      component: Network,
      children: [
        {
          path: "Friendlylinks",
          component: Friendlylinks
        },
        {
          path: "Learning",
          component: Learning
        },
        {
          path: "Sister",
          component: Sister
        },
        {
          path: "Networkemployment",
          component: Networkemployment
        }
      ]
    },
    {
      path: "/Downloads",
      component: Downloads,
      children: [
        {
          path: "Order",
          component: Order
        },
        {
          path: "Downloadsstudent",
          component: Downloadsstudent
        }
      ]
    },
    {
      path: "/Events",
      component: Events,
      children: [
        {
          path: "Lecture",
          component: Lecture
        },
        {
          path: "Read",
          component: Read
        },
        {
          path: "Tea",
          component: Tea
        },
        {
          path: "Workshop",
          component: Workshop
        },
        {
          path: "Eventsintroduction",
          component: Eventsintroduction
        }
      ]
    },
    {
      path: "/Introduction",
      component: Introduction,
      children: [
        {
          path: "Important",
          component: Important
        },
        {
          path: "Vision",
          component: Vision
        }
      ]
    },
    {
      path: "/Teaching",
      component: Teaching,
      children: [
        {
          path: "Teaching100",
          component: Teaching100
        },
        {
          path: "Teaching101",
          component: Teaching101
        },
        {
          path: "Teaching102",
          component: Teaching102
        },
      ]
    },
    {
      path: "/Class",
      component: Class,
      children: [
        {
          path: "Alternative",
          component: Alternative
        },
        {
          path: "Auxiliary",
          component: Auxiliary
        },
        {
          path: "Courseinformation",
          component: Courseinformation
        },
        {
          path: "Course",
          component: Course
        },
        {
          path: "Required",
          component: Required
        },
        {
          path: "Relevant",
          component: Relevant
        },
        {
          path: "Credit",
          component: Credit
        }
      ]
    },
    {
      path: "/Staff/:type",
      component: Staff,
      props: true
    },
    {
      path: "/Course"
    },
    {
      path: "/Enrollment",
      component: Enrollment,
      children: [
        {
          path: "Admission",
          component: Admission
        },
        {
          path: "Answer",
          component: Answer
        }
      ]
    },
    {
      path: "/Achievement"
    },
    {
      path: "/Award"
    },
    {
      path: "/Intern"
    },
    {
      path: "/Project"
    },
    {
      path: '/Performance',
      component: Performance
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
      path: '/*',
      redirect: '/'
    }
  ]
});
