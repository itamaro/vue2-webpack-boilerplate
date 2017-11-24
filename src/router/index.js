import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/count',
      name: 'Counter',
      component: Counter
    }
  ]
})
