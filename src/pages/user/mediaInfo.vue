<template>
<div>
  <br>
  <div style="background:#eee;padding: 20px">

    <Card style="height: 1000px">
      <h1 align="center" slot="title">
        <br>
       {{media.title}}<br><br>
      </h1>

      <img src="../../assets/winter.png" height="91" width="100%"/>
      <br>

      <img src="../../assets/winter.png" height="91" width="100%"/>

      <hr>
      <br>
      <img :src="'app/image/'+mediaInfo" width="100%"/>
      <h2>{{media.h2}}</h2>

      <p style="word-wrap:break-word;font-size: 20px">Content:{{media.h3}}</p>



        <div style="margin-bottom: 0">

          <Button type="default">下载</Button>

          <Button type="primary">收藏</Button>

          <Button type="error">点赞</Button>

        </div>


    </Card>
    <Card>
      <ul>
        <li>本作品是由 爱弹幕 iDanMu.com 会员 asv20301 的搬运作品。</li>
        <li>欢迎转载，但请务必注明来源地址：https://idanmu.at/v15/129076//</li>
        <li>本站资源均来自网友自制或互联网分享的公开引用资源。请勿作任何商业用途！</li>
        <li>如对资源作品版权归属存有异议，请私信up主，或者告知我们，我们将在72小时内做出处理！邮件：idanmu#126.com</li>
      </ul>
    </Card>


  </div>
  <br>

  <img src="../../assets/ad4.png" height="95" width="100%"/>


    <a v-if="userLogin==null">
      <img  @click="OpenLogin" src="../../assets/loginII.png" height="67" width="100%"/>
    </a>
<!--  //标记-->
</div>
</template>
<script>

export default {
  data(){
    return{

    }
  },
  methods:{
    OpenLogin(){
      console.log('openLogin')
      this.$emit('OpenLoginModal')
    }
  },
  computed:{
    userLogin:function(){
      return this.$store.getters.getUserLogin;
    },
    media:function () {
      console.log(this.$store.getters.getChargeMedia)
      return this.$store.getters.getChargeMedia;
    },
    mediaInfo(){
      if (this.media.imageinfo===''){
        return "default.png"
      }
      return "default.png"
    }
  },
  created:function () {
    this.$store.dispatch('ajaxGetMediaById',this.$route.params.id)
  },
  mounted:function () {
    this.$emit('hideCarousel')
  }
}
</script>
<style scoped>
</style>
