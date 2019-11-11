import axios from 'axios'
import cookie from "js-cookie"
export default{
  state:{
    collections:{}
  },
  getters:{
    getCollectionByUid(state){
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
      axios.get('app/api/collection/getCollectionByUid'+id).then(response=>{
        context.commit('setCollection',response.collections)
        console.log('info')
      }).catch(error=>{
        console.log(error.errorInfo);
      });
    },
  }
}
