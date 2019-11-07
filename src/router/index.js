import Vue from 'vue'
import Router from 'vue-router'
import user from  '@/components/user'
import media from  '@/components/media'
import index_admin from  '@/pages/admin/index'
import index_user from  '@/pages/user/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/to_user',
      component: index_user
    },
    {
      path: '/to_admin',
      component: index_admin,
      children:[
        {
          path:'/',
          component: user
        },
        {
          path:'user',
          component:user
        },
        {
          path: 'media',
          component: media
        }

      ]

    },


    {
      path:'/',
    }

  ]
})
