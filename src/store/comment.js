import axios from 'axios'
import cookie from "js-cookie"
export default{
  state:{
    comments:[]
  },
  getters:{
    getComments(state){
      return state.comments
    }
  },
  mutations:{
    setComments(state,data){
      state.comments=data
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
    ajaxAddComment(context,obj){
      axios.post('app/api/comment/insert',obj,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        console.log(res.data)
        context.dispatch('ajaxGetComments',obj.mediaid)
      })
    },
    ajaxGetComments(context,id){
      console.log('info')
      axios.get('app/api/comment/getByMid/'+id,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        console.log('res:{}',res.data.comments)
        context.commit('setComments',res.data.comments)
      }).catch(error=>{
        console.log(error.errorInfo)
      })
    },
    ajaxDeleteComment(context,id){
      axios.delete('app/api/comment/delete/'+id,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        context.dispatch('ajaxGetComments',cookie.get('mediaId'))
      }).catch(error=>{
        console.log(response.error);
      });

  }
  }

}
