<template>
  <div>
    <table>
<!--      <tr>-->
<!--        <th>用户id</th>-->
<!--        <th>用户名</th>-->
<!--        <th>用户密码</th>-->
<!--        <th>状态</th>-->
<!--        <th>创建时间</th>-->
<!--        <th>修改时间</th>-->
<!--        <th>删除</th>-->
<!--        <th>修改</th>-->
<!--      </tr>-->
      <tr>
        <th v-for="(value,key,index) in medias[0]">{{key}}</th>
      </tr>
      <tr v-for="(item ,index) in medias">
        <td v-for="(value,key,index) in item">
          {{value}}
        </td>
        <td><button @click="handleDeleteMedia(item.id,item.isDel)">
          <div v-if="item.isDel===1">复原</div>
          <div v-else-if="item.isDel===0">删除</div>

        </button></td>
        <td><button @click="handleOpenModal(item)">修改</button></td>
      </tr>
    </table>
    <as-modal :entity="item" @postEntity="handleUpdateMedia"/>

  </div>

</template>
<script>

  export default {
    data(){
      return{
        item:{}
      }
    },
    methods:{
      handleOpenModal(item){
        this.$modal.show('as-modal')
        this.item=item
        console.log("修改的id为",item.id)
      },
      handleUpdateMedia(obj){
        console.log("更新的obj为",obj);
        this.$store.dispatch('ajaxUpdateMedia',obj)
      },
      handleDeleteMedia(id,isDel){
        console.log(id);
        this.$store.dispatch('ajaxUpdateMedia',{
          id:id,
          isDel: 1-isDel
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
