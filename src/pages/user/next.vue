<template>
  <div>


    <Row :gutter="100">

      <!--    row中包含row  下面是要浏览的的media信息的col span-->
      <Col span="24">
      <Row>
        <Menu mode="horizontal">
          <MenuItem name="1" to="/user">
            <Icon type="ios-paper"></Icon>
            MUSIC
          </MenuItem>
        </Menu>
        <br>
        <Row :gutter="4">
          <Col span="6" v-for="(item,index) in mixedInfo.musics" :key="index">
          <router-link :to="'/to_user/nextInfo/'+item.id">
            <div style="background:#eee;padding: 1px">
              <Card style="width: auto;">
                <img :src="'app/image/'+item.cover" height="118" width="100%"/>

                <!--                <p>热度{{item.hot}}</p>-->
                <p>{{item.title}}</p>
                <p>{{item.id}}</p>
                <p>{{item.title}}</p>
              </Card>
            </div>
            <br>
          </router-link>
          </Col>
        </Row>
      </Row>
    </Col>
    </Row>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        span:14,
        offset:5,
      }
    },
    computed:{
        mixedInfo(){
          return this.$store.getters.getNextMainInfo
      }
    },
    mounted(){
      this.$store.dispatch('ajaxSetNextMainInfo')
    }
  }
</script>
<style scoped>

</style>
