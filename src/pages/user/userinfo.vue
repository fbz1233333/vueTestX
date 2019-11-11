<template>
  <div>
    <br>
    <div style="background:#eee;padding: 20px">

      <Card style="height: 1000px">
        <br>
        <div v-if="myInfo!=null">
          <h1>用户id:{{myInfo.id}}</h1>
          <h1>用户名:{{myInfo.name}}</h1>
          <h1>创建时间:{{myInfo.createTime}}</h1>
          <h1>头像:{{myInfo.headPic}}</h1>
        </div>
        <Table :data="collections" :columns="collectionsColumns">
        </Table>



      </Card>
    </div>
  </div>
</template>
<script>
  export default{
    computed:{
      collections(){
        return this.$store.getters.getCollectionsByUid;
      },
      myInfo(){
        return this.$store.getters.getMyInfo;
      }
    },
    created:function () {
      this.$store.dispatch('ajaxGetMyInfo',this.$route.params.id)
    },
    mounted:function () {
      this.$emit('hideCarousel')
    }
  }
</script>
<style scoped>
</style>
