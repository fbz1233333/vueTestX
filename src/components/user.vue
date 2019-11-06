<template>
  <div>
    <Table :data="users" :columns="userColumns">
    </Table>
    <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> Export source data</Button>
    <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> Export sorting and filtered data</Button>
    <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> Export custom data</Button>
  </div>

</template>
<script>
  export default {
    data(){
      return{

      }
    },
    components:{
    },
    methods: {
      show(index){
        console.log('show...'+JSON.stringify(this.users[index]))
        this.$Modal.info({
          title:'UserInfo',
          content:`Name：${this.users[index].name}<br> Password: ${this.users[index].password}`
        });
      },
      update(index){
        console.log('show...'+JSON.stringify(this.users[index]))
        this.$Modal.info({
          title:'updateInfo',
          content:'Name:<Input>'
        })
      }
    },
    created:function () {
      this.$store.dispatch('ajaxGetUser')
    },

    computed:{
      users:function (){
        return this.$store.getters.getUserList;
      },
      userColumns:function () {
        return[
          {
            title:"id",
            key:"id"
          },
          {
            title:"用户名",
            key:"name"
          },
          {
            title:'密码',
            key:'password'
          },
          {
            title:"状态",
            key:'isDel'
          },
          {
            title:"创建时间",
            key:'createTime'
          },{
            title:'操作',
            key:'action',
            width:150,
            align:'center',
            render:(h,params)=>{
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, 'View'),
                h('Button',{
                  props:{
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                  },
                  on:{
                    click:()=>{
                      this.update(params.index)
                    }
                  }
                },'Update')
              ]);
            }
          }
        ]
      }
    },
  }
</script>
<style scoped>
</style>
