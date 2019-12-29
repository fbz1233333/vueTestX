<template>
  <div>
    <br>
    <div style="background:#eee;padding: 20px">

      <Card style="height: auto">
        <h1 align="center" slot="title">
          <br>
          {{media.title}}<br><br>
        </h1>

        <img src="../../assets/winter.png" height="91" width="100%"/>
        <br>

        <img src="../../assets/winter.png" height="91" width="100%"/>

        <hr>
        <br>
        <img :src="'app/image/'+media.imageinfo" width="100%"/>
        <h2>{{media.h2}}</h2>

        <p style="word-wrap:break-word;font-size: 20px">Content:{{media.h3}}</p>



        <div style="margin-bottom: 0">


<div v-if="S=='ON'">

  <a :href="'app/image/'+media.imageinfo" :download="media.imageinfo">
    <Button type="default" >
      下载
    </Button>
  </a>

  <Button v-if="!ifCollect" type="primary" @click="handleCollect(media.id)" >收藏</Button>
  <Button v-if="ifLike" type="error" @click="handleLike">点赞</Button>
  <Button v-else-if="!ifLike" type="error" @click="handleDeleteLike">取消点赞</Button>
</div>


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


    <a v-if="S=='OUT'">
      <img  @click="OpenLogin" src="../../assets/loginII.png" height="67" width="100%"/>
    </a>
    <div v-else>
      <br>
      <div>
        <h1>评论列表</h1>
        <div  style="background:#eee;padding: 20px">
          <Card >
            <Row v-for="(item,index) in comments" :key="index">
              <Col span="5">
              <img :src="'app/image/'+item.userpic" width="60px" height="60px">
              用户名:{{item.username}}
              </Col>
              <Col span="18" offset="1">
              <p>评论内容:{{item.comment}}</p>
              <p style="font-size: 10px">{{item.createTime}}</p>
              <Button style="margin-right: 10px" v-if="item.userid===myInfo.id" type="error" @click="handleDeleteComment(item.id)">删除</Button>

              <Button style="margin-right: 20px;" type="primary" @click="handleOpenComment(item)">回复</Button>
              <Modal v-model="modal_comment_seen"  title="CommentInfo" @on-ok="handleSubCom">
                <Input v-model="content" type="textarea" :autosize="{minRows: 7,maxRows: 20}" placeholder="Enter something..." />
              </Modal>
              </Col>
            </Row>
          </Card>

          <h1>评论</h1>
          <Input v-model="content" type="textarea" :autosize="{minRows: 7,maxRows: 20}" placeholder="Enter something..." />
          <br><br>
          <Button @click="handleSubCom" type="primary">提交</Button>
          <br><br>
        </div>

      </div>


    </div>
    <br><br>
    <!--  //标记-->
  </div>
</template>
<script>
  import cookie from 'js-cookie'
  export default {
    data(){
      return{
        modal_comment_seen:false,
        content:""
      }
    },
    methods:{
      handleOpenComment(comment){
        this.modal_comment_seen=true
        console.log('针对这条信息进行回复',comment)
      },
      handleDeleteLike(){
        this.$store.dispatch('ajaxDeleteLike',{
          uid:this.myInfo.id,
          mid:this.media.id
        })
      },
      handleDeleteComment(id){
        console.log(id)
        this.$store.dispatch('ajaxDeleteComment',id)
      },
      handleSubCom(){
        // console.log(this.comment);
        console.log("commentInfo",this.commentEntity);
        this.$store.dispatch('ajaxAddComment',this.commentEntity)
        //希望清空评论栏  并发表一个alert
        this.content="";
        alert('发布成功')
      },
      OpenLogin(){
        console.log('openLogin')
        this.$emit('OpenLoginModal')
      },
      handleCollect(id){
        console.log('collect...',id)
        this.$store.dispatch('ajaxCollect',this.collectionInfo)
        alert('收藏成功')
      },
      handleLike(){
        console.log('handleLike...')
        this.$store.dispatch('ajaxLike',{
          uid:this.myInfo.id,
          mid:this.media.id
        })
      }
    },
    computed:{
      ifLike(){
        return this.$store.getters.getIfLike
      },
      S(){
        return this.$store.getters.getS;
      },
      collectionInfo(){
        return{

          id:'',
          userid:this.myInfo.id,
          mediaid:this.media.id,
          h1:this.media.h1,
          username:this.myInfo.name,
          pic:this.media.imageinfo
        }
      },
      historyInfo(){
        return{
          id:'',
          userid:this.myInfo.id,
          mediaid:this.media.id,
          h1:this.media.h1,
          username:this.myInfo.name,
          pic:this.media.imageinfo
        }
      },
      commentEntity(){
        return{
          id:"",
          userid:this.myInfo.id,
          username:this.myInfo.name,
          userpic:this.myInfo.headPic,
          comment:this.content,
          belongto:"",
          repeattoId:"",
          repeattoname:"",
          mediaid:this.media.id
        }

      },
      comments(){
        console.log('计算comments:',this.$store.getters.getComments)
        return this.$store.getters.getComments
      },
      token(){
        // console.log(cookies.get('token'))
        let info=this.$store.getters.getToken
        console.log("计算token的值...",info)

        return info
      },
      myInfo(){
        // console.log(cookies.get('userInfo'))
        return this.$store.getters.getMyInfo
      },
      media() {
        return this.$store.getters.getChargeMedia;
      },
      ifCollect(){
        return this.$store.getters.getIfCollect
      }
    },
    created:function () {
      this.$store.dispatch('ajaxGetMediaById',this.$route.params.id);
      this.$store.dispatch('ajaxIfCollect',this.$route.params.id);
      this.$store.dispatch('ajaxGetComments',this.$route.params.id)
      // console.log('dddd',this.historyInfo)
      // this.$store.dispatch('ajaxAddHistory',this.historyInfo)
      this.$store.dispatch('ajaxGetIfLike',{
        uid:this.myInfo.id,
        mid:this.media.id
      })
      this.$emit('hideCarousel')
    },
    mounted:function () {
      cookie.set('mediaId',this.$route.params.id)
    }
  }
</script>
<style scoped>
</style>
