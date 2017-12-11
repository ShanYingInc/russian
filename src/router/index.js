import Vue from 'vue'
import Router from 'vue-router'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Carousel from "@/components/Carousel"
import Card from "@/components/Card"
import Slider from "@/components/Slider"
import Maintext from "@/components/Maintext"
import Member from "@/components/Member"

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
      }
    },
    {
      path: '/Member',
      components: {
        up:Member,
      }
    },
  ]
})
