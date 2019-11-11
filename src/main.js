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

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

Vue.config.productionTip = false
Vue.use(Vuex);


const store=new Vuex.Store({
  modules:{
   loginInfo, user,media,collection
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
