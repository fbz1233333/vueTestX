<template>
  <div>
    <div>
      <Carousel>
        <Carousel-item>
          <div class="demo-carousel">
            <img src="../../assets/img3.png" height="304" width="100%"/>
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="demo-carousel">
            <img src="../../assets/img3.png" height="304" width="100%"/>
          </div>
        </Carousel-item>
      </Carousel>
    </div>

    <Row :gutter="100">

      <!--    row中包含row  下面是要浏览的的media信息的col span-->
      <Col span="18">
      <Row>
        <br>
        <Menu mode="horizontal">
          <MenuItem name="1" to="/user">
            <Icon type="ios-paper"></Icon>
            视频
          </MenuItem>
        </Menu>
        <br>
        <Row :gutter="16">
          <Col span="6" v-for="(item,index) in videos" :key="index">
          <Card style="width: 245px;">
            <img src="app/image/default.png" height="118" width="210"/>
          </Card>
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
          <Col span="6">
          <Card>
            <img src="../../assets/img6.png" height="118" width="213"/></Card>

          </Card>
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
          <Col span="6">
          <Card>
            <img src="../../assets/img6.png" height="118" width="213"/></Card>

          </Card>
          </Col>
        </Row>
      </Row>



      </Col>

      <!--下面是广告的span-->
      <Col span="6">

      <br><img src="../../assets/adimage1.png" height="138" width="240"/>
      <br><img src="../../assets/adimage1.png" height="138" width="240"/>
      <br><img src="../../assets/adimage1.png" height="138" width="240"/>
      <br><img src="../../assets/adimage1.png" height="138" width="240"/>


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
