import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'
import VueLazyload from 'vue-lazyload'
import Components from 'components/_index'

import { createStore } from 'store/index'
import { createRouter } from 'router/index'
import { sync } from 'vuex-router-sync'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  lazyComponent: true
})
Vue.use(VueScrollTo, {
  offset: -48
})
Vue.use(Vuetify)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp (ssrContext) {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  store.dispatch('init')

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
