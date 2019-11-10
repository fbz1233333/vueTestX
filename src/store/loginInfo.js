import axios from 'axios'
import cookie from "js-cookie"
export default{
  state:{
    userInfo:eval ("(" + cookie.get('userInfo') + ")"),
    token:cookie.get('token'),
    myInfo:{}
  },
  getters:{
    getUserInfo(state){
      return state.userInfo;
    },
    getToken(state){
      return state.token
    },
    getMyInfo(state){
      return state.myInfo
    }
  },
  mutations:{
    setUserInfo(state,data){
      console.log('setUserInfo')
      state.userInfo=data;
      cookie.set("userInfo",data);
    },
    setToken(state,data){
      state.token=data;
      cookie.set("token",data)
    },
    setMyInfo(state,data){
      state.myInfo=data
    }
  },
  actions:{
    ajaxLogin(context,loginInfo){
      axios.post('app/api/user/login',loginInfo).then(response=>{

        console.log("axios请求userList得到",response.data)

        if (response.data.userInfo!=null){
          console.log("登陆成功")
          context.commit('setUserInfo',response.data.userInfo)
          context.commit('setToken',response.data.token)
          axios.defaults.headers.common['token'] = response.data.token;
          axios.defaults.headers.common['UID'] = response.data.userInfo.id;
        }else {
          console.log('失败:no such user')
        }

        });
    },
    ajaxGetMyInfo(context,id){
      axios.get('app/api/user/myInfo/'+id).then(response=>{
        console.log(response.data)
        context.commit('setMyInfo',response.data.myInfo)
      })
    },

  }
}
