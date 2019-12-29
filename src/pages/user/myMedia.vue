<template>
  <div>
    <Collapse simple  v-model="open">
      <Panel name="1">
        我的草稿
        <p slot="content">
          <Row :gutter="16">
            <Col span="6" v-for="(item,index) in drafts" :key="index">
            <div>
              <div style="background:#eee;padding: 1px">
                <Card style="width: auto;">
                  <img :src="'app/image/'+item.imageinfo" height="118" width="100%"/>
        <p>{{item.id}}</p>
        <Upload :show-upload-list="if_show_list" :action="'/app/api/media/upload/'+item.id" :on-success="handleSuccess">
          <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
        </Card>

  </div>
  <br>
  </div>
  </Col>
  </Row>
  </p>
  </Panel>
  <Panel name="2">
    我的上传

    <p slot="content">
      <Row :gutter="16">
        <Col span="6" v-for="(item,index) in completes" :key="index">

        <div style="background:#eee;padding: 1px">
          <Card style="width: auto;height: 260px">
            <img :src="'app/image/'+item.imageinfo" height="118" width="100%"/>
    <p>{{item.id}}</p>
    <a @click="handleDeleteMediaById(item.id)">删除此media</a>
    </Card>



    </div>

    </Col>
    </Row>
    </p>

  </Panel>
  <Panel name="3">

    上传操作
    <p slot="content">
      <Button @click="handleOpenMedia">上传草稿</Button>
      <Button @click="handleWrite">书写内容</Button>
    </p>

  </Panel>
  </Collapse>

  <Modal v-model="seen_mediaInfo" title="BASICINFO" okText="提交" @on-ok="handlePostMedia">
    <label>TITLE</label><Input v-model="title"/>
    <label>h1</label><Input v-model="h1"/>
    <label>h2</label><Input v-model="h2"/>
    <label>h3</label><Input v-model="h3"/>
    <label>KIND</label>
    <Select v-model="Kind">
      <Option v-for="item in kinds" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>

  </Modal>


  <Modal
    v-model="modal_md_seen"
    fullscreen>
    <Row>
      <Col span="16" offset="4">
      <h1>书写markdown</h1><br>
      <!--    <div v-html="readme"></div>-->
      <b>当前所在 {{ current + 1 }} 步</b>
      <br>
      <Steps :current="current">
        <Step title="步骤1" content="基本信息填写"></Step>
        <Step title="步骤2" content="封面COVER"></Step>
        <Step title="步骤3" content="内容输入"></Step>
        <!--        <mavon-editor v-model="md_value"/>-->

        <Step title="步骤4" content="信息校验"></Step>
      </Steps>
      <br>
      <div v-if="current==0">
        <Label>标题</Label>
        <Input placeholder="enter you title" v-model="title"/>
        <Label>简介</Label>
        <Input placeholder="enter you content" v-model="content"/>
        <label>种类</label>
        <Select v-model="kind" style="width:100%">
          <Option v-for="item in kinds" :value="item.value" :key="item.value">{{item.label}}</Option>
        </Select>
        <Button type="primary" @click="handleNext(current)">下一步</Button>
      </div>
      <div v-if="current==1">
        <Label>封面图片</Label>
        <input type="file" ref="file">
        <br>
        <Button type="primary" @click="handleNext(current)">下一步</Button>
      </div>
      <div v-if="current==2">
        <mavon-editor v-model="md_value"></mavon-editor>
        <Button type="primary" @click="handleNext(current)">下一步</Button>

      </div>
      <div v-if="current==3">请验证您的信息为:
        {{nextInfo}}<br>
        <Button type="primary" @click="handleSubmitNext">提交</Button>
      </div>
      <Button v-else-if="current===3" type="primary" @click="handleSubmit">提交</Button>
      </Col>
    </Row>

  </Modal>

  </div>
</template>
<script>
  import axios from 'axios'
  import cookie from 'js-cookie'
  // import readme from '../../../README.md'
  import cookies from 'js-cookie'
  export default{
    data(){
      return{
        current: 0,
        kind:"",

        md_value:'',
        // readme:this.md2html(readme),
        modal_md_seen:false,
        kinds:[
          {
            label:'音乐',
            value:'MUSIC',
          },
          {
            label:'视频',
            value:'VIDEO',
          },
          {
            label:'图集',
            value:'IMAGE',
          },
        ],


        if_show_list:false,

        title:'',
        h1:'',
        h2:'',
        h3:'',
        imageInfo:'',
        Kind:'',
        file:'',

        content:"",

        open:['1','2','3'],
        seen_mediaInfo:false
      }
    },
    computed:{
      nextInfo(){
        return this.$store.getters.getNextFormData
      },
      completes(){
        return this.$store.getters.getMyCompletes;

      },
      drafts(){
        return this.$store.getters.getMyDrafts;
      },
      myInfo(){
        return this.$store.getters.getMyInfo;
      },
      formData(){
        return{
          title:this.title,
          content:this.content,
          kind:this.kind,
          cover:"",
          markdown:"DEFAULT.md"

        }
      }
    },
    methods:{
      handleSubmitNext(){
        this.$store.dispatch('ajaxAddNext',this.nextInfo)
        this.modal_md_seen=false;
        alert('提交成功')
      },
      handleNext(index){
        console.log('current',index)
        if (index===0){
          console.log('正在进行有关title,cover,kind的提交')
          this.$store.commit('setNextFormData',this.formData)
        }
        if (index===1){
          console.log('正在进行有关cover封面有关的提交')
          let coverForm=new FormData();
          coverForm.append('file',this.$refs.file.files[0])
          this.$store.dispatch('ajaxSetImage',coverForm)
        }
        if (index===2){
          console.log('正在进行有关markdown的提交')
          this.$store.commit('setMarkdown',this.md_value)
        }
        this.current++

        // this.$store.commit()
      },
      handleWrite(){
        console.log("to write...")
        this.modal_md_seen=true
        this.$store.commit('setNextFormData');
        this.current=0
      },
      handleDeleteMediaById(id){
        this.$store.dispatch('ajaxDeleteMediaById',id)
      },
      handlePostMedia(){
        console.log('info')
        this.$store.dispatch( 'ajaxInsertMedia',{
          id:'',
          title:this.title,
          userid:this.myInfo.id,
          userName:this.myInfo.name,
          imageinfo:"",
          isDel:0,
          h1:this.h1,
          h2:this.h2,
          h3:this.h3,
          kindInfo:this.Kind,
        });

      },
      handleSuccess(){
        this.$store.dispatch('ajaxGetDraftsByUid')
      },
      handleOpenMedia(){
        this.seen_mediaInfo=true;
        this.$store.commit('setNextFormData',{})
      },
      handleDeleteCollect(id){
        console.log(id)
        this.$store.dispatch('ajaxDeleteCollect',id)
      }
    },
    created:function () {

    },
    mounted:function () {
      this.$store.dispatch('ajaxGetDraftsByUid')
      this.$store.dispatch('ajaxGetMyInfo',cookies.get('id'))
      this.$emit('hideCarousel')
    }
  }
</script>
<style scoped>
</style>
