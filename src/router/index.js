import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Carousel from "@/components/Carousel"
import Card from "@/components/Card"

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      name: '',
    }
  ]
})
