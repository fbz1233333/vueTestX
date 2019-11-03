<template>
<div>
  <table>
    <tr>
      <th>用户id</th>
      <th>用户名</th>
      <th>用户密码</th>

      <th>删除状态</th>
      <th>修改时间</th>
      <th>操作</th>
    </tr>
    <tr v-for="(item ,index) in users">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.password}}</td>
      <td>
        {{item.isDel}}
      </td>
      <td>{{item.updateTime}}</td>
      <td>

       <button @click="handleDeleteUser(item.id)">删除</button>
      </td>

    </tr>
  </table>
</div>

</template>
<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    handleDeleteUser(id){
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
