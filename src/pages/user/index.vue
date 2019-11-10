<template>
  <div>
    {{userInfo}}<br>
    {{token}}
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

          <div v-if="userInfo==null" class="layout-nav-right">
              <Button   type="primary" @click="handleOpenLogin">LOGIN</Button>
          </div>
          <div v-else-if="userInfo!=null" class="layout-nav-right-bak">
            <Button type="info" :to="'/to_user/user_info/'+userInfo.id">user:{{userInfo.name}}</Button>
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
      <Input type="text" v-model="loginInfo.name"/>
      <label>password</label>
      <Input type="text" v-model="loginInfo.password"/>
      <br>
    </Modal>

  </div>
</template>
<script>

  import cookies from 'js-cookie'
  import axios from 'axios'

  export default {
    data(){
      return{
        seen_carousel:true,
        seen_loginModal:false,


        span:14,
        offset:5,

        loginInfo:{
          name:'',
          password:''
        }
      }
    },
    computed:{
      token(){
        // console.log(cookies.get('token'))
        let info=this.$store.getters.getToken
        console.log("计算token的值...",info)

        return info
      },
      userInfo(){
        // console.log(cookies.get('userInfo'))
        let info=this.$store.getters.getUserInfo
        let data =info
        console.log("计算userInfo...:",data)
        return data
      }

    },
    methods:{
      handleLoginOut(){
        console.log("logout...")
        cookies.remove('token')
        cookies.remove('userInfo')
        this.$store.commit('setUserInfo')
        this.$store.commit('setToken')
        axios.defaults.headers.common['token'] = ''
        axios.defaults.headers.common['UID'] = ''
      },
      handleIII(){
        console.log("click",this.userInfo)
      },
      HandleHideCarousel(){
        this.seen_carousel=false
      },
      handleOpenLogin(){
        console.log('handleOpenLogin');
        this.seen_loginModal=true;
      },
      handlePostLogin(){
        console.log('post....',this.loginInfo)
        this.$store.dispatch('ajaxLogin',this.loginInfo)
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
  .layout-nav-right-bak{
    width: 200px;
    margin: 0 auto;
    margin-right: 0;
  }
</style>
