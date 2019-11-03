import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import user from  '@/components/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: user
    }
  ]
})
