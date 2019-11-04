<template>
<div>
  <table>
<!--    <tr>-->
<!--      <th>用户id</th>-->
<!--      <th>用户名</th>-->
<!--      <th>用户密码</th>-->
<!--      <th>状态</th>-->
<!--      <th>创建时间</th>-->
<!--      <th>修改时间</th>-->
<!--      <th>删除</th>-->
<!--      <th>修改</th>-->
<!--    </tr>-->
    <tr>
      <th v-for="(value,key,index) in users[0]">{{key}}</th>
    </tr>
    <tr v-for="(item ,index) in users">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.password}}</td>
      <td>
        {{item.isDel}}
      </td>
      <td>{{item.createTime}}</td>
      <td>{{item.updateTime}}</td>
      <td>

       <button @click="handleDeleteUser(item.id)">删除</button>
      </td>

    </tr>
  </table>
  <as-modal :entity="item" @postEntity="handleUpdateUser"/>

</div>

</template>
<script>
  import asModal from '@/components/entitymodel'


  export default {
  data(){
    return{
      item:{}
    }
  },
    components:{
      asModal
    },
  methods:{
    handleOpenModal(item){
      this.$modal.show('as-modal')
      this.item=item
      console.log("修改的id为",item.id)
    },
    handleUpdateUser(obj){
      console.log("更新的obj为",obj);
      this.$store.dispatch('ajaxUpdateUser',obj)
    },
    handleDeleteUser(id,isDel){
      console.log(id);
      this.$store.dispatch('ajaxDeleteUser',id)
    }
  },
  created:function () {
    this.$store.dispatch('ajaxGetUser')
  },

  computed:{
    users() {
      // return this.$store.getters.getQuestionList;
      let _data=this.$store.getters.getUserList;
      return _data;
    }
  },
}
</script>
<style scoped>
</style>
