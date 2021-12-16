import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/styles/mescss.less"
import "@/assets/styles/test.less"
import "@/assets/styles/menu.less"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

