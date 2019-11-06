<template>
  <div id="app">
    <Row>
      <Col span="16" offset="4">
      <Menu mode="horizontal">
        <MenuItem name="1" to="/user">
          <Icon type="ios-paper"></Icon>
          用户管理
        </MenuItem>
        <MenuItem name="2" to="/media">
          <Icon type="ios-paper"></Icon>
          媒体管理
        </MenuItem>
      </Menu>
      <router-view/>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

</style>
