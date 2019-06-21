import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './assets/tailwind.css'
import './assets/global.css'
import store from './store'

Vue.config.productionTip = false

store.dispatch('getReleases')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
