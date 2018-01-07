<template>
<div id="StudentInformation">{{ staff }}</div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      staff: 'staff'
    })
  }
}
</script>
<style lang="sass">
#StudentInformation
</style>
