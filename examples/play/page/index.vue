<template>
  <div>
    <router-view></router-view>
    <msg-box></msg-box>
    <loading />
    <!-- <f-dia-log></f-dia-log> -->
    <!-- <el-button @click="auto = !auto">切换 autoPlay</el-button>
    <auto-play v-if="auto"></auto-play>
    <date></date>
    <el-button @click="tryLoading">试试是有用没</el-button> -->
  </div>
</template>

<script>
import fDiaLog from '../components/dialog.vue'
import loading from '../components/loading.vue'
import autoPlay from '../components/auto-play.vue'
import date from '../components/date.vue'
import myloading from '../../../packages/loading/src/index.js'
import MsgBox from '../components/message-box'
export default {
  components: { loading, fDiaLog, autoPlay, date, MsgBox },
  data() {
    return {
      auto: false,
      load: ''
    }
  },
  mounted() {
    window.loading = this
  },
  methods: {
    tryLoading() {
      this.load = myloading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  }
}
</script>

<style lang="scss">
</style>