import axios from 'axios'

export default{
  state:{
    userList:[],
    userCount: 0
  },
  getters:{
    getUserList(state){
      return state.userList;
    },
    getUserCount(state){
      return state.userCount
    }
  },
  mutations:{
    setUserList(state,data){
      state.userList=data;
    },
    setUserCount(state,data){
      state.userCount=data
    }
  },
  actions:{
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
