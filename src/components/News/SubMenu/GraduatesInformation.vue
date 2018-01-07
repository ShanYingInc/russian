<template>
<div id="GraduatesInformation">{{ slidebar }}</div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      slidebar: 'slidebar'
    })
  }
}
</script>
<style lang="sass">
#GraduatesInformation
</style>
