import axios from 'axios'

export default{
  state:{
    mediaList:[],
    mediaCount:0,
    mixedMedia:{
    },
    chargeMedia:{}
  },
  getters:{
    getMediaList(state){
      return state.mediaList;
    },
    getMediaCount(state){
      return state.mediaCount
    },
    getMixedMedia(state){
      return state.mixedMedia;
    },
    getChargeMedia(state){
      return state.chargeMedia
    }
  },
  mutations:{
    setChargeMedia(state,data){
      state.chargeMedia=data
    },
    setMediaList(state,data){
      state.mediaList=data;
    },
    setMediaCount(state,data){
      state.mediaCount=data
    },
    setMixMedia(state,data){
      state.mixedMedia=data;
    }
  },
  actions:{
    ajaxGetMedia(context){
      axios.get('app/api/medias').then(response=>{
        console.log("axios请求mediaList得到",response.data)
        // context.commit('setMediaList',response.data.mediaList)
      });
    },
    ajaxGetMixMedia(context,info){
      axios.post('app/api/media/getMixedMediaLimit',info).then(response=>{
        console.log("axios请求mediaList得到",response.data)
        context.commit('setMixMedia',response.data)
      })
    },

    ajaxGetMediaByPage(context,pageInfo){
      axios.post('app/api/media/getByPage',pageInfo).then(response=>{
        console.log("axios请求mediaList得到",response.data)
        context.commit('setMediaList',response.data.mediaList)
        context.commit('setMediaCount',response.data.mediaCount)
        return response.data.mediaList;
      });
    },
    ajaxUpdateMedia(context,obj) {
      console.log("请求update的mediaId为", obj);
      axios.patch('/app/api/media/update',obj
      ).then(function (response) {
          console.log(JSON.stringify(obj))
          context.dispatch('ajaxGetMedia')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
