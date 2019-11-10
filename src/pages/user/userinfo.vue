<template>
  <div>
    <br>
    <div style="background:#eee;padding: 20px">

      <Card style="height: 1000px">
        <br>
        <h1>用户id:{{myInfo.id}}</h1>
        <h1>用户名:{{myInfo.name}}</h1>
        <h1>创建时间:{{myInfo.createTime}}</h1>


      </Card>
    </div>
  </div>
</template>
<script>
  export default{
    computed:{
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
