import axios from 'axios'

export default{
  state:{
    userList:[],
  },
  // data(){
  //   return {
  //     state: userModule.state
  //   }
  // },
  getters:{
    getUserList(state){
      return state.userList;
    },
  },
  mutations:{
    setUserList(state,data){
      state.userList=data;
    }
  },
  actions:{
    ajaxGetUser(context){
      axios.get('app/api/users').then(response=>{
        console.log("axios请求userList得到",response.data)
        context.commit('setUserList',response.data.userList)
        return response.data.userList;
      });
    },
    ajaxUpdateUser(context,obj) {
      console.log("请求update的userId为", obj);
      axios.patch('/app/api/user/update',
        JSON.stringify(obj),{
          headers:{
            'Content-Type': 'application/json'
          }
        }
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
