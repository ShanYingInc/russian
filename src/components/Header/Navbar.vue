<template lang="pug">
  nav#navbar.navbar.navbar-expand-lg.navbar-dark
    button.navbar-toggler(
      type='button',
      data-toggle='collapse',
      data-target='#navbarNav',
      aria-controls='navbarNav',
      aria-expanded='false',
      aria-label='Toggle navigation'
    )
      span.navbar-toggler-icon
    #navbarNav.collapse.navbar-collapse
      ul.navbar-nav
        li.nav-item
          router-link.nav-link.active(
            data-toggle="collapse",
            data-target="#navbarNav.show",
            to="/newsList"
          ) {{ $t('nav.news') }}
        li.nav-item.dropdown
          a#nav1.nav-link.active.dropdown-toggle(
            href='#',
            role='button',
            data-toggle='dropdown',
            aria-haspopup='true',
            aria-expanded='false'
          ) {{ $t('nav.about_us') }}
          .dropdown-menu(aria-labelledby='nav1')
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              to="/Introduction/Important"
            ) 重要記事
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              to="/Introduction/Vision"
            ) 願景及策略
        li.nav-item.dropdown
          a#nav2.nav-link.active.dropdown-toggle(
            href='#',
            role='button',
            data-toggle='dropdown',
            aria-haspopup='true',
            aria-expanded='false'
          ) {{ $t('nav.faculty_and_staff') }}
          .dropdown-menu(aria-labelledby='nav2')
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              to="/Staff/Fulltime"
            ) 專任師資
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              to="/Staff/Parttime"
            ) 兼任師資
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              to="/Staff/Director"
            ) 歷屆系主任
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              to="/Staff/Administrative"
            ) 行政人員
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              to="/Staff/Tutor"
            ) 各班導師
        li.nav-item.dropdown(
          v-for="(nav, index) in navigations",
          :key="index",
          :id="`nav_` + nav.navigation_id"
        )
          a.nav-link.active.dropdown-toggle(
            href='#',
            role='button',
            data-toggle='dropdown',
            aria-haspopup='true',
            aria-expanded='false'
          ) {{ nav.name }}
          .dropdown-menu(:aria-labelledby='`nav_` + nav.navigation_id')
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              v-for="(subNav, subIndex) in nav.subItems",
              :key="subIndex",
              :to="`/content?parent=`+nav.name+`&contentKey=`+subNav.content_key"
            ) {{ subNav.name }}
        li.nav-item.dropdown
          a#nav3.nav-link.active.dropdown-toggle(
            href='#',
            role='button',
            data-toggle='dropdown',
            aria-haspopup='true',
            aria-expanded='false'
          ) {{ $t('nav.project') }}
          .dropdown-menu(aria-labelledby='nav3')
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              v-for="year in teachingExcellenceYears",
              :key="year",
              :to="`/TeachingExcellenceList/` + year"
            ) {{ year }}學年度
        li.nav-item.dropdown
          a#nav4.nav-link.active.dropdown-toggle(
            href='#',
            role='button',
            data-toggle='dropdown',
            aria-haspopup='true',
            aria-expanded='false'
          ) {{ $t('nav.events') }}
          .dropdown-menu(aria-labelledby='nav4')
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              to="/eventHighlignt"
            ) 活動花絮
            router-link.dropdown-item(
              data-toggle="collapse",
              data-target="#navbarNav.show",
              to="/Performance"
            ) 戲劇公演
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: "NavBar",
  computed: {
    ...mapState({
      navigations: 'navigation'
    }),
    ...mapGetters(['teachingExcellenceYears'])
  }
}
</script>
<style lang="sass" scoped>
#navbar
  font-family: 'Noto Sans TC', sans-serif
  color: white
  background-color: rgb(0, 87, 146)
</style>
