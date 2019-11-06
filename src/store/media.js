import axios from 'axios'

export default{
  state:{
    mediaList:[],
  },
  getters:{
    getMediaList(state){
      return state.mediaList;
    },
  },
  mutations:{
    setMediaList(state,data){
      state.mediaList=data;
    }
  },
  actions:{
    ajaxGetMedia(context){
      axios.get('app/api/medias').then(response=>{
        console.log("axios请求mediaList得到",response.data)
        // context.commit('setMediaList',response.data.mediaList)
        return response.data.mediaList;
      });
    },
    ajaxGetMediaByPage(context,pageInfo){
      axios.post('app/api/media/getByPage',pageInfo).then(response=>{
        console.log("axios请求mediaList得到",response.data)
        context.commit('setMediaList',response.data.mediaList)
        return response.data.mediaList;
      });
    },
    ajaxUpdateMedia(context,obj) {
      console.log("请求update的mediaId为", obj);
      axios.patch('/app/api/media/update',
        JSON.stringify(obj),{
          headers:{
            'Content-Type': 'application/json'
          }
        }
      )
        .then(function (response) {
          console.log(JSON.stringify(obj))
          context.dispatch('ajaxGetMedia')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
