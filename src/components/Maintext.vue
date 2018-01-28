<template lang="pug">
#maintext
  .switch
    .link(v-for="key in switchList.subItems")
      router-link(:to='`/content?parent=`+parent+`&contentKey=`+key.name') {{ key.name }}
  .content-container
    .content(v-html="contentText")


</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['parent', 'contentKey'],
  computed: {
    ...mapState({
      navigations: state => state.navigation,
      contents: state => state.content
    }),
    switchList () {
      if (this.navigations.length !== 0) {
        return this.navigations.filter(nav => {
          return nav.name == this.parent
        })[0]
      }
      return {subItems: []}
    },
    contentText () {
      if (this.contents[this.contentKey])
        return this.contents[this.contentKey][0]
      return ''
    }
  }
}
</script>


<style lang="sass">
.switch
    display: flex
    flex-direction: row
    justify-content: center
    margin: 30px 0
    .link
        display: inline-block
        a
            box-shadow: 1px 2px 4px rgba(0, 0, 0, .5)
            text-decoration: none
            color: #333
            padding: 10px 20px
            background: #ccc
            transition: color 0.1s, background-color 0.1s
            letter-spacing: 1px
            font-weight: 900
            position: relative
            &:hover, &:focus, &:active
                background: #eee
                // color: #999
            &::before
                content: ''
                display: block
                position: absolute
                bottom: 0px
                left: 0
                height: 3px
                width: 100%
                background-color: #000
                transform-origin: right top
                transform: scale(0, 1)
                transition: color 0.1s,transform 0.2s ease-out
            &:active::before
                background-color: #000
            &:hover::before, &:focus::before
                transform-origin: left top
                transform: scale(1, 1)
.content-container
    width: 70%
    height: 100%
    text-align:left
    animation: fadein 2s
    margin: 20px auto
    .content
        padding: 20px 50px
        // border: 1px solid #ccc
        border-radius: 5px
        background: rgba(255, 255, 255, 0.8)
        box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
</style>
