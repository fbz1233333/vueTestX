<template>
  <div>
    <div style="background:#eee;padding: 20px">
      <Card style="height: auto">
        <Menu mode="horizontal">
          <MenuItem name="1" :to="'/to_user/user_info/'+myInfo.id+'/myHistory'">
            <Icon type="ios-paper"></Icon>
            HISTORY
          </MenuItem>
          <MenuItem name="2" :to="'/to_user/user_info/'+myInfo.id+'/myMedia'">
            <Icon type="ios-paper"></Icon>
            MEDIA
          </MenuItem>
        </Menu>

        <router-view/>



      </Card>
    </div>
  </div>
</template>
<script>
  import cookies from 'js-cookie'
  export default{
    data(){
      return{
        open:['1','2','3']
      }
    },
    computed:{
      collections(){
        return this.$store.getters.getCollection;
      },
      myInfo(){
        return this.$store.getters.getMyInfo;
      }
    },
    methods:{
      handleDeleteCollect(id){
        console.log(id)
        this.$store.dispatch('ajaxDeleteCollect',id)
      }
    },
    created:function () {
      this.$store.dispatch('ajaxGetCollectionByUid')
    },
    mounted:function () {
      this.$store.dispatch('ajaxGetMyInfo',cookies.get('id'))
      this.$emit('hideCarousel')
    }
  }
</script>
<style scoped>
</style>
