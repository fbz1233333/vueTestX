<template>
  <div id="app">
    <Row>
      <Col span="16" offset="4">
      <Menu mode="horizontal">
        <MenuItem name="1" to="/to_user">
          <Icon type="ios-paper"></Icon>
          普通用户
        </MenuItem>
        <MenuItem name="2" to="/to_admin">
          <Icon type="ios-paper"></Icon>
          管理员
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
