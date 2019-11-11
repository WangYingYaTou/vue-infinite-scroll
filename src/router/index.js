import Vue from 'vue'
import Router from 'vue-router'
import scroll from '@/components/scroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scroll',
      component: scroll,
    },
  ],
})
