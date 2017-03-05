import Vue from 'vue'
import Router from 'vue-router'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'History',
      component: History
    }
  ]
})
