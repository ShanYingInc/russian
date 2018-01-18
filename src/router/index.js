import Vue from "vue";
import Router from "vue-router";
import IndexPage from "../components/Index/Index.vue";
import News from "../components/News/News.vue";
import Introduction from "../components/Introduction/Introduction.vue";
import Staff from "../components/Staff/Member.vue";
import Fulltime from "../components/Staff/Fulltime.vue";
import Parttime from "../components/Staff/Parttime.vue";
import Director from "../components/Staff/Director.vue";
import Administrative from "../components/Staff/Administrative.vue";
import Vision from "../components/Introduction/Vision.vue";
import Important from "../components/Introduction/Important.vue";
import Class from "../components/Class/Classin.vue";
import Auxiliary from "../components/Class/Auxiliary.vue";
import Alternative from "../components/Class/Alternative.vue";
import Courseinformation from "../components/Class/Courseinformation.vue";
import Course from "../components/Class/Course.vue";
import Required from "../components/Class/Required.vue";
import Relevant from "../components/Class/Relevant.vue";
import Credit from "../components/Class/Credit.vue";
import Enrollment from "../components/Enrollment/Enrollment.vue";
import Answer from "../components/Enrollment/Answer.vue";
import Admission from "../components/Enrollment/Admission.vue";
import Winning from "../components/Winning/Winning.vue";
import Tutor from "../components/Staff/Tutor.vue";
import StudentInformation from "../components/News/SubMenu/StudentInformation.vue";
import Test from "../components/News/SubMenu/Test/Test.vue";
import Testnews from "../components/News/SubMenu/Test/Testnews.vue";
import Testannouncement from "../components/News/SubMenu/Test/Testannouncement.vue";
import Testintroduction from "../components/News/SubMenu/Test/Testintroduction.vue";
import Testtime from "../components/News/SubMenu/Test/Testtime.vue";
import Testdownload from "../components/News/SubMenu/Test/Testdownload.vue";
import Student from "../components/News/SubMenu/Student/Studentinformation.vue";
import Departmenttolearn from "../components/News/SubMenu/Student/Departmenttolearn.vue";
import Professional from "../components/News/SubMenu/Student/Professional.vue";
import Sar from "../components/News/SubMenu/Student/Sar.vue";
import Scholarship from "../components/News/SubMenu/Student/Scholarship.vue";
import Sophomore from "../components/News/SubMenu/Student/Sophomore.vue";
import Statisticsemployment from "../components/News/SubMenu/Student/Statisticsemployment.vue";
import Friends from "../components/News/SubMenu/Friends/Friends.vue";
import Activities from "../components/News/SubMenu/Friends/Activities.vue";
import Celebrity from "../components/News/SubMenu/Friends/Celebrity.vue";
import Highlights from "../components/News/SubMenu/Friends/Highlights.vue";
import Latestnews from "../components/News/SubMenu/Friends/Latestnews.vue";
import World from "../components/News/SubMenu/Friends/World.vue";
import Friendsintroduction from "../components/News/SubMenu/Friends/Friendsintroduction.vue";
import Events from "../components/News/SubMenu/Events/Events.vue";
import Lecture from "../components/News/SubMenu/Events/Lecture.vue";
import Read from "../components/News/SubMenu/Events/Read.vue";
import Tea from "../components/News/SubMenu/Events/Tea.vue";
import Workshop from "../components/News/SubMenu/Events/Workshop.vue";
import Eventsintroduction from "../components/News/SubMenu/Events/Eventsintroduction.vue";
import Network from "../components/News/SubMenu/Network/Network.vue";
import Friendlylinks from "../components/News/SubMenu/Network/Friendlylinks.vue";
import Learning from "../components/News/SubMenu/Network/Learning.vue";
import Sister from "../components/News/SubMenu/Network/Sister.vue";
import Networkemployment from "../components/News/SubMenu/Network/Networkemployment.vue";
import Downloads from "../components/News/SubMenu/Downloads/Downloads.vue";
import Order from "../components/News/SubMenu/Downloads/Order.vue";
import Downloadsstudent from "../components/News/SubMenu/Downloads/Student.vue";
import Performance from '../components/Index/Performance.vue'

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
      path: "Test",
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
      path: "/News",
      component: News
    },
    {
      path: "StudentInformation",
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
      path: "/Staff",
      component: Staff,
      children: [
        {
          path: "Fulltime",
          component: Fulltime
        },
        {
          path: "Parttime",
          component: Parttime
        },
        {
          path: "Director",
          component: Director
        },
        {
          path: "Administrative",
          component: Administrative
        },
        {
          path: "Tutor",
          component: Tutor
        }
      ]
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
    }
  ]
});
