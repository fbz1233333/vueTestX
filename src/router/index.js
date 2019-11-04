import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import user from  '@/components/user'
import media from  '@/components/media'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: user
    }
  ]
})
