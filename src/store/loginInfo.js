import axios from 'axios'
import cookie from "js-cookie"
export default{
  state:{
    id:cookie.get('id') || "",
    token:cookie.get('token') || "",
    S:cookie.get('S') || "OUT",

    myInfo:{

    },
    ifLike:false
  },
  getters:{
    getIfLike(state){
return state.ifLike
    },
    getToken(state){
      return state.token
    },
    getMyInfo(state){
      return state.myInfo
    },
    getS(state){
      return state.S
    }
  },
  mutations:{
    setUID(state,data){
      state.id=data;
      cookie.set("id",data,{ expires: 1 });
    },
    setToken(state,data){
      state.token=data;
      cookie.set("token",data,{ expires: 1 })
    },
    setIfLike(state,data){
      state.ifLike=data
    },
    setS(state,data){
      cookie.set('S',data)
      state.S=data
    },
    setMyInfo(state,data){
      cookie.set('myInfo',data)
      state.myInfo=data
    },
  },
  actions:{
    ajaxLike(context,info){
      axios.post('app/api/like',info,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        console.log(res.data)
        context.dispatch('ajaxGetIfLike',info)
      })
    },
    ajaxDeleteLike(context,info){
      axios.post('app/api/like/delete',info,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        console.log('deletesuccess')
        context.dispatch('ajaxGetIfLike',info)
      })
    },
    ajaxGetIfLike(context,info){
      axios.post('app/api/like/get',info,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(res=>{
        console.log("ifLike",res.data.result)
        context.commit('setIfLike',res.data.result)
      })
    },
    ajaxLogin(context,loginInfo){
      axios.post('app/api/user/login',loginInfo).then(response=>{
        console.log("axios请求userList得到",response.data)
        if (response.data.result==="LOGIN_SUCCESS"){
          // console.log("登陆成功")
          // 设置登陆成功
          context.commit('setUID',response.data.id)
          context.commit('setToken',response.data.token)
          context.commit('setS',"ON")

          //获取用户信息
          context.dispatch('ajaxGetMyInfo',response.data.id)
        }
        }).catch(error=>{
          console.log(error.data.result)
      });
    },
    ajaxGetMyInfo(context,id){
      axios.get('app/api/user/myInfo/'+id,{
        headers:{
          'UID':cookie.get('id'),
          'token':cookie.get('token')
        }
      }).then(response=>{
        console.log("myInfo",response.data)
        context.commit('setMyInfo',response.data.myInfo)
      }).catch(error=>{
        console.log(error.errorInfo)
      })
    },

  }
}
