<template>
  <div>
    <Row>
      <Col :span="span" :offset="offset">
      <Row>


        <Menu mode="horizontal" active-name="1">

          <div class="layout-nav-left">
            <MenuItem name="1">
              <Icon type="ios-paper"></Icon>
              导航1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-paper"></Icon>
              导航2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-paper"></Icon>
              导航3
            </MenuItem>
          </div>

          <div class="layout-nav-right">
            <div>
              <Button type="primary" @click="handleOpenLogin">LOGIN</Button>
            </div>

          </div>
        </Menu>

      </Row>
    </Col>
<!--      轮播图-->
      <Col span="24">
      <div v-if="seen_carousel">
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
    </Col>

      <Col :span="span" :offset="offset">
      <img src="../../assets/ads2.png" height="100" width="100%"/>
      </Col>
      <Col :span="span" :offset="offset">
      <Row :gutter="50">
        <Col span="18" >
        <router-view @hideCarousel="HandleHideCarousel" @OpenLoginModal="handleOpenLogin"/>
        </Col>
        <Col span="6">

          <br><img src="../../assets/adimage1.png" height="138" width="240"/>
          <br><img src="../../assets/adimage1.png" height="138" width="240"/>
          <br><img src="../../assets/adimage1.png" height="138" width="240"/>
          <br><img src="../../assets/adimage1.png" height="138" width="240"/>
          <br><img src="../../assets/adimage1.png" height="138" width="240"/>
          <br><img src="../../assets/adimage1.png" height="138" width="240"/>
          <br><img src="../../assets/adimage1.png" height="138" width="240"/>
          <br><img src="../../assets/adimage1.png" height="138" width="240"/>
          <br><img src="../../assets/adimage1.png" height="138" width="240"/>
          <br><img src="../../assets/adimage1.png" height="138" width="240"/>

        </Col>
      </Row>
    </Col>
      <Col span="24">

      <img src="../../assets/footer.png" height="277" width="100%"/>
      </Col>
    </Row>

<!--    登录框-->
    <Modal v-model="seen_loginModal" title="LOGIN" okText="提交" @on-ok="handlePostLogin">
      <label>name</label>
      <Input type="text" v-model="userlogin.name"/>
      <label>password</label>
      <Input type="text" v-model="userlogin.password"/>
      <br>
    </Modal>


  </div>
</template>
<script>
export default {

  data(){
    return{
      seen_carousel:true,
      seen_loginModal:false,
      span:14,
      offset:5,
      userlogin:{
        name:'',
        password:''
      }
    }
  },
  methods:{
    HandleHideCarousel(){
      this.seen_carousel=false
    },
    handleOpenLogin(){
      console.log('handleOpenLogin');
      this.seen_loginModal=true;
    },
    handlePostLogin(){
      console.log('post....',this.userlogin)
      this.$store.dispatch('ajaxLogin',this.userlogin)
    }
  }

}
</script>
<style scoped>
  .layout-nav-right{
    width: 150px;
    margin: 0 auto;
    margin-right: 0;
  }
  .layout-nav-left{
    margin: 0 auto;
    margin-left: 0;
  }
</style>
