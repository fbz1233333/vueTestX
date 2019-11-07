<template>
<div>
  <br>
  <div style="background:#eee;padding: 20px">

    <Card style="height: 1000px">
      <h1>INFO</h1>
      <h2>{{media.id}}</h2>
    </Card>
  </div>


</div>
</template>
<script>
import media from '../../store/media'

export default {
  data(){
    return{
      media:{}
    }
  },
  created:function () {
    let media_route=this.$route.params.media;
    let media_store=this.$store.getters.getChargeMedia;
    this.media=media_route==null?media_store:media_route

    this.$store.commit('setChargeMedia',media_route)
  }
}
</script>
<style scoped>
</style>
