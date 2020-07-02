import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import element from '@/plugins/element'
import '@/styles/index.scss' //菜单栏
import '@/components/Sidebar/style/sidebar.scss' //菜单栏
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
