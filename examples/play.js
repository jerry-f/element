import Vue from 'vue';
import Element from 'main/index.js';
import App from './play/index.vue';
import VueRouter from 'vue-router';
import 'packages/theme-chalk/src/index.scss';
import routes from './test.router';

Vue.use(Element);
Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  routes,
  fallback: false,
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app');
