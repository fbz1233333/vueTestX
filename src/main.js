// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex"
import axios from "axios"
Vue.config.productionTip = false

Vue.use(Vuex)

const userModule={
  state:{
    userList:[],
  },
  // data(){
  //   return {
  //     state: userModule.state
  //   }
  // },
  getters:{
    getUserList(state){
      return state.userList;
    },
  },
  mutations:{
    setUserList(state,data){
      state.userList=data;
    }
  },
  actions:{
    ajaxGetUser(context){
      axios.get('app/api/users').then(response=>{
        console.log("axios请求userList得到",response.data)
        context.commit('setUserList',response.data.userList)
        return response.data.userList;
      });
    },
    ajaxDeleteUser(context,obj) {
      console.log("请求delete的userid为", obj.id);
      axios.post('/app/api/user/update',
        JSON.stringify({
          id: obj.id,
          isDel: obj.i
        }),{
          headers:{
            'Content-Type': 'application/json'
          }
        }
      )
        .then(function (response) {
          context.dispatch('ajaxGetUser')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
const store=new Vuex.Store({
  modules:{
    userModule
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
