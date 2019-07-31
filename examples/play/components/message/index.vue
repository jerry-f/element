<template>
    <div>
      <h1>{{name}}</h1>
      <p>{{firstName}} {{lastName}} aka {{alias}}</p>
      <el-button @click="count++">{{count}}</el-button>
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'default name : feifei'
    }
  },
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg',
      count: 0
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>