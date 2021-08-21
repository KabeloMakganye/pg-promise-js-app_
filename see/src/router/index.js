import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import HelloWorld from '@/components/HelloWorld'
import logout from '@/components/logout'
import view from '@/components/view'
import activity from '@/components/activity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout
    },
    {
      path: '/view',
      name: 'view',
      component: view
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    }
  ]
})
