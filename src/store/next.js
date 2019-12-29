import axios from "axios"
import cookie from 'js-cookie'

export default {
  state:{
    nextInfo:{},
  },
  getters:{
    getNextFormData(state){
      return state.nextInfo
    }
  },
  mutations:{
    setNextFormData(state,data){
      state.nextInfo=data
    },
    setCover(state,cover){
      state.nextInfo.cover=cover
    },
    setMarkdown(state,md){
      state.nextInfo.markdown=md
    }
  },
  actions:{
    ajaxAddNext(context,info){

      console.log('开始上传...',info)

      axios.post('app/api/next/insert',info,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        console.log(res.data)
      })
    },
    ajaxSetImage(context,file){
      axios.post('app/api/next/upload',file,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        console.log('文件上传',res.data.fileName)
        context.commit('setCover',res.data.fileName)
      })
    }
  }
}
