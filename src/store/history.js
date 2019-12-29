import axios from 'axios'
import cookie from "js-cookie"
export default{
  state:{
    historys:{},
  },
  getters:{
    getHistory(state){
      return state.historys
    },
  },
  mutations:{
    setHistory(state,data){
      state.historys=data;
    },
  },
  actions: {
    ajaxDeleteHistory(context,id){
      axios.delete('app/api/history/'+id,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(response=>{
        context.dispatch('ajaxGetHistoryByUid')
      }).catch(error=>{
        console.log(error.errorInfo);
      });
    },
    ajaxGetHistoryByUid(context){
      axios.get('app/api/history/getHistoryByUid/'+cookie.get('id'),{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(response=>{
        context.commit('setHistory',response.data.historys)
        console.log('historys',response.data.historys)
      }).catch(error=>{
        console.log(error.errorInfo);
        context.commit('setModalLoginOn',{
          ifSeen:true,
          info:"您尚未登录 请先登录"
        })
      });
    },
    ajaxAddHistory(context,info){
      axios.post('app/api/history',info,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(response=>{
        console.log('增加一条记录...')
        context.dispatch('ajaxGetHistoryByUid')
      }).catch(error=>{
        console.log(error.errorInfo);
      });
    }
  }
}
