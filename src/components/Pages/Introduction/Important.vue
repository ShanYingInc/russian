<template lang="pug">
#important(v-html='content')
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
      this.content = await response.data['重要記事'][0]
    })
  }
}
</script>

<style lang="sass">
#important
  @include main-content
</style>
