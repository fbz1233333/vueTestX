<template>
  <div>

    <Row :gutter="100">

      <!--    row中包含row  下面是要浏览的的media信息的col span-->
      <Col span="24">
      <Row>
        <Menu mode="horizontal">
          <MenuItem name="1" to="/user">
            <Icon type="ios-paper"></Icon>
            视频
          </MenuItem>
        </Menu>
        <br>
        <Row :gutter="4">
          <Col span="6" v-for="(item,index) in videos" :key="index">
          <div>
            <div style="background:#eee;padding: 1px">
              <Card style="width: auto;">
                <img :src="'app/image/'+item.imageinfo" height="118" width="100%"/>
                <router-link :to="'/to_user/mediaInfo/'+item.id">进入此media</router-link>
<!--                <p>热度{{item.hot}}</p>-->
              </Card>
            </div>
            <br>
          </div>
          </Col>
        </Row>
      </Row>

      <!--到此为止一种类型的media-->
      <Row>
        <Menu mode="horizontal">
          <MenuItem name="1" to="/user">
            <Icon type="ios-paper"></Icon>
            音乐
          </MenuItem>
        </Menu>
        <br>
        <Row :gutter="16">
          <Col span="6" v-for="(item,index) in images" :key="index">
          <div>
            <div style="background:#eee;padding: 1px">
              <Card style="width: auto;">
                <img :src="'app/image/'+item.imageinfo" height="118" width="100%"/>
                <router-link :to="'/to_user/mediaInfo/'+item.id">进入此media</router-link>
              </Card>
            </div>
            <br>
          </div>

          </Col>
        </Row>
      </Row>

      <Row>
        <Menu mode="horizontal">
          <MenuItem name="1" to="/user">
            <Icon type="ios-paper"></Icon>
            音乐
          </MenuItem>
        </Menu>
        <br>
        <Row :gutter="16">
          <Col span="6" v-for="(item,index) in musics" :key="index">
          <Card style="width: auto;">
            <img :src="'app/image/'+item.imageinfo" height="118" width="100%"/>
            <router-link :to="'/to_user/mediaInfo/'+item.id">进入此media</router-link>
          </Card>
          </Col>
        </Row>
      </Row>



      </Col>



      </Col>
    </Row>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        limit:8
      }
    },
    computed:{
      videos:function () {
        return this.$store.getters.getMixedMedia.videoList
      },
      musics:function () {
        return this.$store.getters.getMixedMedia.musicList

      },
      images:function () {
        return this.$store.getters.getMixedMedia.imageList
      }
    },
    mounted(){
      this.$store.dispatch('ajaxGetMixMedia',{
        limit:this.limit,
        mixedStr:["VIDEO","MUSIC","IMAGE"]
      })
    }
  }
</script>
