<template lang="pug">
#vision(v-html='content')
</template>

<script>
export default {
  data () {
    return {
      content: '<p>讀取中</p>'
    }
  },
  mounted () {
    this.$nextTick(async () => {
      const response = await this.$api.content.get()
      this.content = await response.data['願景及策略'][0]
    })
  }
}
</script>

<style lang="sass" scoped>
#vision
  @include main-content
</style>
