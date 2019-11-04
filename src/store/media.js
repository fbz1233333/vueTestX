import axios from 'axios'

export default{
  state:{
    mediaList:[],
  },
  // data(){
  //   return {
  //     state: mediaModule.state
  //   }
  // },
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
        context.commit('setMediaList',response.data.mediaList)
        return response.data.mediaList;
      });
    },
    ajaxDeleteMedia(context,obj) {
      console.log("请求delete的mediaId为", obj.id);
      axios.patch('/app/api/media/update',
        JSON.stringify({
          id: obj.id,
          isDel: obj.toDel
        }),{
          headers:{
            'Content-Type': 'application/json'
          }
        }
      )
        .then(function (response) {
          context.dispatch('ajaxGetMedia')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
