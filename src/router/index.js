import Vue from 'vue'
import Router from 'vue-router'
import Carousel from "@/components/Carousel"
import Card from "@/components/Card"
import Slider from "@/components/Slider"
import Maintext from "@/components/Maintext"
import Member from "@/components/Member"
import Member_add from "@/components/Member_add"
import Director from "@/components/Director"
import Staff from "@/components/Staff"
import StudentInformation from '../components/Introduction/StudentInformation.vue'
import GraduatesInformation from '../components/Introduction/GraduatesInformation.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      components: {
        up:Carousel,
        down:Card
      }
    },
    {
      path: '/Introduction',
      components: {
        left:Slider,
        right:Maintext
      },
      children: [
        {
          path: 'StudentInformation',
          components: {
            content: StudentInformation
          }
        },
        {
          path: 'GraduatesInformation',
          components: {
            content: GraduatesInformation
          }
        }
      ]
    },
    {
      path: '/Member',
      components: {
        up:Member
      }
    },
    {
      path: '/Director',
      components: {
        up:Director,
      }
    },
    {
      path: '/Staff',
      components: {
        up:Staff,
      }
    },
  ]
})
