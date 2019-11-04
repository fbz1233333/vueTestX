<template>
<div>
  <table>
    <tr>
      <th>id</th>
      <th>title</th>

      <th>h1</th>
      <th>h2</th>
      <th>状态</th>
      <th>修改时间</th>
      <th>删除</th>
    </tr>
    <tr v-for="(item,index) in medias">
      <td>{{item.id}}</td>
      <td>{{item.title}}</td>
      <td>{{item.h1}}</td>
      <td>{{item.h2}}</td>
      <td>
        <div v-if="item.isDel===1">已删除</div>
        <div v-else-if="item.isDel===0">未删除</div>
      </td>
      <td>{{item.updateDate}}</td>
      <td>
        <button v-if="item.isDel===1" @click="handleDeleteMedia(item.id,0)">复原</button>
        <button v-else-if="item.isDel===0" @click="handleDeleteMedia(item.id,1)">删除</button>
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
    handleUpdateMedia(id){
      console.log("修改的id为",id)
    },
    handleDeleteMedia(id,i){
      console.log(id);
      this.$store.dispatch('ajaxDeleteMedia',{
        id:id,
        i:i
      })
    }
  },
  created:function () {
    this.$store.dispatch('ajaxGetMedia')
  },

  computed:{
    medias:function (){
      return this.$store.getters.getMediaList;
    }
  },
}
</script>
<style scoped>
</style>
