import Vue from 'vue'
import Router from 'vue-router'
import admin_user from  '@/pages/admin/user'
import admin_media from  '@/pages/admin/media'
import admin_index from  '@/pages/admin/index'
import user_index from  '@/pages/user/index'
import user_media from '@/pages/user/media'
import media_info from '@/pages/user/mediaInfo'
import index from '@/pages/index'
import user_info from '@/pages/user/userInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/to_user'
    },
    {
      path:'/index',
      component:index
    },
    {
      path: '/to_user',
      component: user_index,
      children:[
        {
          path:'mediaInfo/:id',
          component: media_info
        },
        {
          path:'index',
          component: user_media
        },
        {
          path:'/',
          component: user_media
        },
        {
          path:'user_info/:id',
          component: user_info
        }
      ]
    },
    {
      path: '/to_admin',
      component: admin_index,
      children:[
        {
          path:'/',
          component: admin_user
        },
        {
          path:'user',
          component:admin_user
        },
        {
          path: 'media',
          component: admin_media
        }

      ]

    },

  ]
})
