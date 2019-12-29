<template>
  <div>
      <Collapse simple  v-model="open">
        <Panel name="1">
          我的收藏
          <p slot="content">
            <Row :gutter="16">
              <Col span="6" v-for="(item,index) in collections" :key="index">
              <div v-if="index<70">
                <div style="background:#eee;padding: 1px">
                  <Card style="width: auto;">
                    <img :src="'app/image/'+item.pic" height="118" width="100%"/>
                    <router-link :to="'/to_user/mediaInfo/'+item.mediaid">进入此media</router-link>
                    <a @click="handleDeleteCollect(item.id)">取消收藏</a>
                  </Card>
                </div>
              </div>
              <div v-else-if="index<8">
                <div style="background:#eee;padding: 1px">
                  <Card style="width: auto;">
                    <img src="../../assets/sl.png" height="118" width="100%"/>
                  </Card>
                </div>
              </div>
              </Col>
            </Row>
          </p>
        </Panel>
        <Panel name="2">
          浏览记录
          <p slot="content">
            <Row :gutter="16">
              <Col span="6" v-for="(item,index) in historys" :key="index">
              <div v-if="index<70">
                <div style="background:#eee;padding: 1px">
                  <Card style="width: auto;">
                    <img :src="'app/image/'+item.pic" height="118" width="100%"/>
                    <router-link :to="'/to_user/mediaInfo/'+item.mediaid">进入此media</router-link>
                    <a @click="handleDeleteHistory(item.id)">消除此纪录</a>
                  </Card>
                </div>
              </div>
              <div v-else-if="index<8">
                <div style="background:#eee;padding: 1px">
                  <Card style="width: auto;">
                    <img src="../../assets/sl.png" height="118" width="100%"/>
                  </Card>
                </div>
              </div>
              </Col>
            </Row>
          </p>
        </Panel>
        <Panel name="3">
          我的收藏
          <p slot="content">
          </p>
        </Panel>

      </Collapse>
    <!--  //标记-->
  </div>
</template>
<script>
  import cookies from 'js-cookie'
  export default{
    data(){
      return{
        open:['1','2','3']
      }
    },
    computed:{
      historys(){
        return this.$store.getters.getHistory;
      },
      collections(){
        return this.$store.getters.getCollection;
      },
      myInfo(){
        return this.$store.getters.getMyInfo;
      }
    },
    methods:{
      handleDeleteHistory(id){
        this.$store.dispatch('ajaxDeleteHistory',id)
      },
      handleOpenMedia(){
        this.$emit('OpenMediaModal')
      },
      handleDeleteCollect(id){
        console.log(id)
        this.$store.dispatch('ajaxDeleteCollect',id)
        alert('取消成功')
      }
    },
    created:function () {
      this.$store.dispatch('ajaxGetCollectionByUid')
      this.$store.dispatch('ajaxGetHistoryByUid')
    },
    mounted:function () {
      this.$store.dispatch('ajaxGetMyInfo',cookies.get('id'))
      this.$emit('hideCarousel')
    }
  }
</script>
<style scoped>
</style>
