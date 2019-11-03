<template>
<div>
  <table>
    <tr>
      <th>用户id</th>
      <th>用户名</th>
      <th>用户密码</th>

      <th>删除状态</th>
      <th>修改时间</th>
      <th>删除？</th>
      <th>更新</th>

    </tr>
    <tr v-for="(item ,index) in users">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.password}}</td>
      <td>
        <div v-if="item.isDel===1">已删除</div>
        <div v-else-if="item.isDel===0">正常</div>
      </td>
      <td>{{item.updateTime}}</td>
      <td>

        <button v-if="item.isDel===0" @click="handleDeleteUser(item.id,1)">删除</button>
        <button v-else-if="item.isDel===1" @click="handleDeleteUser(item.id,0)">复原</button>

       </button>
      </td>
      <td>
        <button @click="handlerUpdateUser(item.id)">修改</button>
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
    handleUpdateUser(id){
      console.log(id)
    }
    ,
    handleDeleteUser(id,i){
      console.log(id,i);

      this.$store.dispatch('ajaxDeleteUser',{id:id,i:i})
    }
  },
  created:function () {
    this.$store.dispatch('ajaxGetUser')
  },

  computed:{
    users() {
      return this.$store.getters.getUserList;
    }
  },
}
</script>
<style scoped>
</style>
