<template>
  <div>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
    <el-button type="text" @click="open4">点击打开 Message Box</el-button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      alert:'',
      msgbox: ''
    }
  },
  mounted() {
    window.box = this
  },
  methods: {
    open() {
      // this.alert = this.$alert('这是一段内容', '标题名称', {
      //   confirmButtonText: '确定',
      //   callback: action => {
      //     // this.$message({
      //     //   type: 'info',
      //     //   message: `action: ${action}`
      //     // })
      //   }
      // })
      this.alert = this.$msgbox({
        title: '标题名称',
        message: '这是一段内容',
        showCancelButton: true
      }).then((res) => {
      }).catch(() => {})
    },
    open4() {
      const h = this.$createElement
      this.msgbox = this.$msgbox({
        title: '消息',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    }
  },
  watch: {
          // $route({ path, meta }) {
      //   console.log(path, meta);
      // },
      $route: function(to, from) {
        console.log(to, from);
      },
  }
}
</script>