import Vue from 'vue'
import Router from 'vue-router'

// The meta data for your routes
const meta = require('./meta.json')

// Function to create routes
// Is default lazy but can be changed
function route (path, view) {
  return {
    path: path,
    meta: meta[path],
    component: resolve => import(`pages/${view}.vue`).then(resolve)
  }
}

Vue.use(Router)

export function createRouter () {
  const router = new Router({
    base: __dirname,
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      route('/', 'index'),
        // Global redirect for 404
        { path: '*', redirect: '/' }
    ]
  })

  router.beforeEach((to, from, next) => {
    next()
  })

  return router
}
