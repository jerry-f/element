<template>
  <div>
    <router-link to="/">
      <el-button>Main Page</el-button>
    </router-link>
    <router-link to="/test">
      <el-button>Test Page</el-button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auto: false,
      load: ''
    }
  }
}
</script>

<style lang="scss">
.router-link-exact-active .el-button {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
</style>