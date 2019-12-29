<template>
  <div>
    {{S}}<br>
    {{myInfo}}<br>
    {{token}}
    <Row>
      <Col :span="span" :offset="offset">
      <Row>


        <Menu mode="horizontal" active-name="0" >

          <div class="layout-nav-left">
            <MenuItem name="1" to="/to_user">
              <Icon type="ios-paper"></Icon>
              首页
            </MenuItem>
            <MenuItem name="2" to="/to_user/next">
              <Icon type="ios-paper"></Icon>
              主页
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-paper"></Icon>
              导航2
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              导航3
            </MenuItem>
          </div>

          <div v-if="S=='OUT'" class="layout-nav-right">
              <Button   type="primary" @click="handleOpenLogin">LOGIN</Button>
          </div>
          <div v-else-if="S=='ON'" class="layout-nav-right-bak">
            <Button type="info" :to="'/to_user/user_info/'+myInfo.id">user:{{myInfo.name}}</Button>
            <Button type="error" @click="handleLoginOut">logout</Button>
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
        <router-view @hideCarousel="HandleHideCarousel" @OpenLoginModal="handleOpenLogin" @OpenMediaModal="handleOpenMedia"/>
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
    <Modal v-model="seen_loginModal" :title="'LOGIN'" okText="提交" @on-ok="handlePostLogin">
      <label v-if="login_info!=''">{{login_info}}</label>
      <label>name</label>
      <Input type="text" v-model="loginInfo.name"/>
      <label>password</label>
      <Input type="text" v-model="loginInfo.password"/>
      <br>
    </Modal>



  </div>
</template>
<script>

  import cookies from 'js-cookie'

  export default {
    data(){
      return{

        seen_carousel:true,


        span:14,
        offset:5,

        loginInfo:{
          name:'',
          password:''
        },
        seen_loginModal:this.$store.getters.getModalLogin
      }
    },
    computed:{

      login_info(){
        return this.$store.getters.getLoginInfo
      },
      handleSuccess(){
        console.log('success')
      },
      S(){
        return this.$store.getters.getS;
      },
      token(){
        return this.$store.getters.getToken
      },
      myInfo(){
        // console.log(cookies.get('userInfo'))
        return this.$store.getters.getMyInfo || {id:"",name:""}
      }
    },
    methods:{

      handleLoginOut(){
        console.log("logout...")
        cookies.remove('token')
        cookies.remove('id')
        this.$store.commit('setUID')
        this.$store.commit('setToken')
        this.$store.commit('setS','OUT')
        this.$store.commit('setMyInfo')
      },
      handleOpenMedia(){
        this.seen_mediaInfo=true
      },
      HandleHideCarousel(){
        this.seen_carousel=false
      },
      handleOpenLogin(){
        console.log('handleOpenLogin');
        this.$store.commit('setModalLoginOn',{
          ifSeen:true,
          info:''
        });
        this.seen_loginModal=true
      },
      handlePostLogin(){
        console.log('post....',this.loginInfo)
        this.$store.dispatch('ajaxLogin',this.loginInfo)
      }
    },
    created(){
      this.$store.dispatch('ajaxGetMyInfo',cookies.get('id'))
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
  .layout-nav-right-bak{
    width: 200px;
    margin: 0 auto;
    margin-right: 0;
  }
</style>
