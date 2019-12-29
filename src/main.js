// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex"

import user from "./store/user"
import media from "./store/media"
import loginInfo from "./store/loginInfo"
import collection from "./store/collection"
import comment from "./store/comment"
import history from "./store/history"
import info from './store/info'
import store3 from './store/store3'
import next from './store/next'


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './theme/index.less'
Vue.use(ViewUI);


import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.use(Vuex);

const store=new Vuex.Store({
  modules:{
   loginInfo, user,media,collection,comment,history
    ,info,store3,next
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
