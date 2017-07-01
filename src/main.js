// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iview from 'iview';
import style from 'iview/dist/styles/iview.css';
import App from './App.vue'

Vue.use(iview)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
