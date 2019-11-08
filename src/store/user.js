import axios from 'axios'

export default{
  state:{
    userList:[],
    userCount: 0,
    userLogin: {}
  },
  getters:{
    getUserList(state){
      return state.userList;
    },
    getUserCount(state){
      return state.userCount
    },
    getUserLogin(state){
      return state.userLogin.userInfo;
    }
  },
  mutations:{
    setUserList(state,data){
      state.userList=data;
    },
    setUserCount(state,data){
      state.userCount=data
    },
    setUserLogin(state,data){
      state.userLogin=data
    },
  },
  actions:{
    ajaxLogin(context,user){
      console.log("认证的用户信息为",user);
      axios.post('app/api/user/login',user).then(response=>{
        let userInfo=response.data.userInfo;
        let Token=response.data.Token
        // console.log("返回的用户信息为",response.data.userInfo);
        if (userInfo===undefined){
          console.log(response.data.errorInfo)
        }else {
          context.commit('setUserLogin',response.data);
        }
      })
    },
    ajaxGetUser(context){
      axios.get('app/api/users').then(response=>{
        console.log("axios请求userList得到",response.data)
        // context.commit('setUserList',response.data.userList)
        return response.data.userList;
      });
    },
    ajaxGetUserByPage(context,pageInfo){
      axios.post('app/api/user/getByPage',pageInfo).then(response=>{
        console.log("axios请求userList得到",response.data)
        context.commit('setUserList',response.data.userList)
        context.commit('setUserCount',response.data.userCount)
      });
    },
    ajaxUpdateUser(context,obj) {
      console.log("请求update的userId为", obj);
      axios.patch('/app/api/user/update',obj
      )
        .then(function (response) {
          console.log(JSON.stringify(obj))
          context.dispatch('ajaxGetUser')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
