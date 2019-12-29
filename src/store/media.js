import axios from 'axios'
import cookie from 'js-cookie'

export default{
  state:{
    mediaList:[],
    mediaCount:0,
    mixedMedia:{
    },
    chargeMedia:{},
    myDrafts:[],
    myCompletes:[]
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
    },
    getMyDrafts(state){
      return state.myDrafts
    },
    getMyCompletes(state){
      return state.myCompletes
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
    },
    setMyDrafts(state,data){
      state.myDrafts=data;
    },
    setMyCompletes(state,data){
      state.myCompletes=data;
    }
  },
  actions:{

    ajaxGetMediaById(context,id){
      axios.get('app/api/media/'+id).then(response=>{
        console.log("axios根据id请求media得到",response.data)
        context.commit('setChargeMedia',response.data)
      });
    },
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
      axios.patch('/app/api/media/update',obj
      ).then(function (response) {
        console.log(JSON.stringify(obj))
        context.dispatch('ajaxGetMedia')
      })
        .catch(function (error) {
          console.log(error);
        });
    },
    ajaxDeleteMediaById(context,id){
      axios.delete('/app/api/media/delete/'+id,{
          headers:{
            'UID':cookie.get('id'),
            'token':cookie.get('token')
          }
        }
      ).then(function (response) {
          context.dispatch('ajaxGetDraftsByUid')
      })
        .catch(function (error) {
          console.log(error);
        });
    },
    ajaxInsertMedia(context,obj){
      axios.post('/app/api/media/insert',obj,{
          headers:{
            'UID':cookie.get('id'),
            'token':cookie.get('token')
          }
        }
      ).then(function (response) {
        context.dispatch('ajaxGetDraftsByUid')
      })
        .catch(function (error) {
          console.log(error);
        });
    },
    ajaxGetDraftsByUid(context){
      axios.get('/app/api/media/findDrafts/'+cookie.get('id'),{
          headers:{
            'UID':cookie.get('id'),
            'token':cookie.get('token')
          }
        }
      ).then(function (response) {
        context.commit('setMyDrafts',response.data.myDrafts)
        context.commit('setMyCompletes',response.data.myCompletes)
      })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
}
