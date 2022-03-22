import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import HelloWorld from '@/components/HelloWorld'
import logout from '@/components/logout'
import view from '@/components/view'
import activity from '@/components/activity'
import status from '@/components/status'
import departmentsLogin from '@/components/departmentsLogin'
import foot from '@/components/foot'
import qa from '@/components/qa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/qa',
      name: 'qa',
      component: qa
    },
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
    },
    {
      path: '/status',
      name: 'status',
      component: status
    },
    {
      path: '/departmentsLogin',
      name: 'departmentsLogin',
      component: departmentsLogin
    },
    {
      path: '/foot',
      name: 'foot',
      component: foot
    }
  ]
})
