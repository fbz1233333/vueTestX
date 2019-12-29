import axios from 'axios'
import cookie from "js-cookie"
export default{
  state:{
    collections:{},
    ifCollect:false
  },
  getters:{
    getCollection(state){
      return state.collections
    },
    getIfCollect(state){
      return state.ifCollect
    }
  },
  mutations:{
    setCollection(state,data){
      state.collections=data;
    },
    setIfCollect(state,data){
      state.ifCollect=data;
    }
  },
  actions: {

    ajaxGetCollectionByUid(context){
      axios.get('app/api/collection/getCollectionByUid/'+cookie.get('id'),{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(response=>{
        context.commit('setCollection',response.data.collections)
        console.log('collections',response.data.collections)
      }).catch(error=>{
        console.log(error.errorInfo);
      });
    },
    ajaxCollect(context,collectionInfo){
      axios.post('app/api/collection/insert',collectionInfo,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        console.log(res.data.info);
        context.dispatch('ajaxIfCollect',collectionInfo.mediaid)
      });
    },
    ajaxDeleteCollect(context,id){
      axios.delete('app/api/collection/delete/'+id,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        context.dispatch('ajaxGetCollectionByUid')
      }).catch(error=>{
        console.log(response.error);
      });
    },
    ajaxIfCollect(context,id){
      axios.post('app/api/collection/getByInfo',{
        uid:cookie.get('id'),
        mid:id,
      },{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        context.commit('setIfCollect',res.data.info)
      })
    }
  }
}
