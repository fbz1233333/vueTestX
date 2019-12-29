import axios from 'axios'
import cookie from "js-cookie"
export default{
  state:{
    nextMainInfo:{}
  },
  getters:{
    getNextMainInfo(state){
      return state.nextMainInfo
    }
  },
  mutations:{
    setNextMainInfo(state,data){
      state.nextMainInfo=data
    }
  },
  actions: {
    ajaxSetNextMainInfo(context){
      axios.get('app/api/next/mixedInfo').then(res=>{

        context.commit('setNextMainInfo',res.data)
      })

    }
  }

}
