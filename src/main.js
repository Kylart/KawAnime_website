import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

store.dispatch('getReleases')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
