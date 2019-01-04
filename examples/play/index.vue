<template>
    <div>
      <!-- <loading/>
      <f-dia-log></f-dia-log> -->
      <auto-play></auto-play>
    </div>
</template>

<script>
import fDiaLog from './components/dialog.vue'
import loading from './components/loading.vue'
import autoPlay from './components/auto-play.vue'
export default {
    components: {loading, fDiaLog, autoPlay},
    data () {
        return {}
    },
}
</script>

<style lang="scss">

</style>