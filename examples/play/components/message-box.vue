<template>
  <div>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
    <el-button type="text" @click="open4">点击打开 Message Box</el-button>
    <br/>
    <el-button type="text" @click="showMsg">点击打开 1 条 Message 消息</el-button>
    <div id="mount-point" ref="mountPoint">我现在就这么点儿</div>
    <el-button type="text" @click="createComponents">挂载一个组件</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Message from './message'
var Profile = Vue.extend(Message)
export default {
  data () {
    return {
      alert:'',
      msgbox: '',
      proComponent: '',
      msg: ''
    }
  },
  mounted() {
    window.box = this
    this.proComponent = new Profile({
      propsData: {
        name: 'jerry'
      },
      data: {test: 'hello'}
    })
  },
  methods: {
    createComponents () {
      // this.proComponent.$mount('#mount-point')
      this.proComponent.$mount(this.$refs.mountPoint)
      // console.log(ProCom)
      let html = this.proComponent.$el
      console.log(html)
    },
    showMsg () {
      this.msg = this.$message({
        dangerouslyUseHTMLString: true,
        message: '<h1>hello message</h1><p style="text-align:right;color:red;">... Of Jerry</p>',
        type: 'warning',
        showClose: true,
        center: true,
        duration: 0
      })
    },
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