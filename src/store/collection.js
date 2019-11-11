import axios from 'axios'
import cookie from "js-cookie"
export default{
  state:{
    collections:{}
  },
  getters:{
    getCollection(state){
      return state.collections
    }
  },
  mutations:{
    setCollection(state,data){
      state.collections=data;
    }
  },
  actions: {
    ajaxGetCollectionByUid(context,id){
      axios.get('app/api/collection/getCollectionByUid/'+id,{
        headers:{
          'UID':(eval ("(" + cookie.get('userInfo') + ")")).id,
          'token':cookie.get('token')
        }
      }).then(response=>{
        context.commit('setCollection',response.data.collections)
        console.log('collections',response.data.collections)
      }).catch(error=>{
        console.log(error.errorInfo);
      });
    },
  }
}
