import Vue from "vue";
import Router from "vue-router";
import IndexPage from "../components/Pages/Index";
import NewsList from "../components/Pages/NewsList";
import NewsContent from "../components/Pages/NewsContent";
import Introduction from "../components/Pages/Introduction";
import Important from "../components/Pages/Introduction/Important.vue";
import Vision from "../components/Pages/Introduction/Vision.vue";
import Staff from "../components/Pages/Staff";
import Maintext from "../components/Pages/Maintext";
import TeachingExcellenceList from "../components/Pages/TeachingExcellence/TeachingExcellenceList";
import TeachingExcellenceItem from "../components/Pages/TeachingExcellence/TeachingExcellenceItem";
import EventHighlignt from "../components/Pages/EventHighlignt";
import Album from "../components/Pages/Album";
import Performance from "../components/Pages/Index/Performance.vue";

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
      path: "/Staff/:type",
      component: Staff,
      props: true
    },
    {
      path: "/content",
      component: Maintext,
      props(route) {
        return route.query || {};
      }
    },
    {
      path: "/newsList",
      component: NewsList
    },
    {
      path: "/news/:newsId",
      component: NewsContent,
      props: true
    },
    {
      path: "/eventHighlignt",
      component: EventHighlignt
    },
    {
      path: "/album/:albumId",
      component: Album,
      props: true
    },
    {
      path: "/TeachingExcellenceList/:TeachingExcellenceYear",
      component: TeachingExcellenceList,
      props: true
    },
    {
      path: "/TeachingExcellenceItem/:TeachingExcellenceId",
      component: TeachingExcellenceItem,
      props: true
    },
    {
      path: "/Performance",
      component: Performance
    },
    {
      path: "/*",
      redirect: "/"
    }
  ]
});
