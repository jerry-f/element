<template>
  <div class="home">
    <!-- <router-view></router-view> -->
    <!-- <msg-box></msg-box> -->
    <!-- <loading /> -->
    <!-- <Select/> -->
    <!-- <DropDown/> -->
    <!-- <f-dia-log></f-dia-log> -->
    <date></date>
    <!-- <el-button @click="auto = !auto">切换 autoPlay</el-button>
    <auto-play v-if="auto"></auto-play>
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
import Select from '../components/select'
import DropDown from '../components/dropdown'
import MydatePicker from '../components/mydate-picker'
export default {
  components: { loading, fDiaLog, autoPlay, date, MsgBox, Select, DropDown, MydatePicker },
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