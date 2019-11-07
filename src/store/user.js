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
      return state.userLogin;
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
    }
  },
  actions:{
    ajaxLogin(context,user){
      axios.post('app/api/user/login',user).then(res=>{
        console.log(user)
        console.log(res);
        context.commit('setUserLogin',res.userInfo)
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
