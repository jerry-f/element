<template>
  <i ref="reference" class="date-icon" v-clickoutside="handleClose" :class="triggerClass" @click="handleFocus"></i>
</template>

<script>
import DatePicker from '../../../packages/date-picker/index'
export default {
  mixins: [DatePicker],
  name: 'MyDatePicker',
  mounted() {
    window.d = this
  },
  data() {
    return {}
  },
  methods: {
    __show() {
      this.handleFocus()
    }
  },
}
</script>

<style lang="scss">
.date-icon {
  margin: 5px 0 0 20px;
}
</style>