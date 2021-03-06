import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/count',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
