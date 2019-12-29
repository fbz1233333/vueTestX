import axios from 'axios'
import cookie from "js-cookie"
export default{
  state:{
    MODAL_LOGIN_SEEN:false,
    LOGIN_INFO:""
  },
  getters:{
    getModalLogin(state){
      return state.MODAL_LOGIN_SEEN;
    },
    getLoginInfo(state){
      return state.LOGIN_INFO
    }
  },
  mutations:{
    setModalLoginOn(state,data){
      state.MODAL_LOGIN_SEEN=data.ifSeen
      state.LOGIN_INFO=data.info
    }
  },
  actions: {
    // ajaxGetCollectionByUid(context) {
    //   axios.get('app/api/collection/getCollectionByUid/' + (eval("(" + cookie.get('userInfo') + ")")).id, {
    //     headers: {
    //       'UID': (eval("(" + cookie.get('userInfo') + ")")).id,
    //       'token': cookie.get('token')
    //     }
    //   }).then(response => {
    //     context.commit('setCollection', response.data.collections)
    //     console.log('collections', response.data.collections)
    //   }).catch(error => {
    //     console.log(error.errorInfo);
    //   });
    // }
  }
}
