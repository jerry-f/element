<template>
  <div style="height: 2000px;">
    <el-table
      :data="tableData"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      element-loading-spinner="el-icon-loading"
      element-loading-text="拼命加载中"
      style="width: 100%"
      v-if="show"
      v-loading="loading2"
    >
      <el-table-column label="日期" prop="date" width="180"></el-table-column>
      <el-table-column label="姓名" prop="name" width="180"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
    </el-table>
    <el-table :data="tableData" style="width: 100%" ref="tab">
      <el-table-column label="日期" prop="date" width="180"></el-table-column>
      <el-table-column label="姓名" prop="name" width="180"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
    </el-table>
    <el-button @click="show = !show">show table</el-button>
    <el-button @click="loading2 = !loading2">toggleTable</el-button>
    <el-button @click="openFullScreen" type="primary" ref="btn1" v-loading.fullscreen.lock="fullscreenLoading">指令方式</el-button>
    <el-button @click="openFullScreen2" type="primary">服务方式</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullscreenLoading: false,
      show: false,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      loading2: false
    };
  },
  mounted() {
    window.loading = this
    window.btn1 = this.$refs.btn1.$el
  },
  methods: {
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const tab = this.$refs.tab.$el;
      console.log(tab);
      const loading = this.$loading({
        target: tab,
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        body: true,
        fullscreen: true
      });
      setTimeout(() => {
        loading.close();
      }, 5000000);
    }
  }
};
</script>

<style lang="scss">
</style>