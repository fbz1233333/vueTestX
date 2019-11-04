<template>
  <modal name="as-modal">
    item:{{obj}}
    <table>

      <tr v-for="(value,key,index) in obj">
        <td><label>{{key}}</label></td>
      <td><input type="text" v-model="obj[key]"></td>
      </tr>
    </table>
    <button @click="handleCloseModal">关闭</button>
    <button @click="handlePostModal">提交</button>
  </modal>
</template>
<script>
export default {
  props:['entity'],

  computed:{
    obj(){
      return this.entity
    }
  },
  methods:{
    handleCloseModal(){
      this.$modal.hide('as-modal')
    },
    handlePostModal(){
      this.$emit('postEntity',this.obj);
      this.$modal.hide('as-modal')

    },
  }

}
</script>
<style scoped>
</style>
