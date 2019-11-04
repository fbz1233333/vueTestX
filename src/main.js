// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex"
import user from "./store/user"
import media from "./store/media"
import VModal from 'vue-js-modal'

Vue.use(VModal, {
  dialog: true,
  dynamic: true
})

Vue.config.productionTip = false

Vue.use(Vuex)


const store=new Vuex.Store({
  modules:{
    user,media
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
