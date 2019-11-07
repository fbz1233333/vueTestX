<template>
<div>
  <Row>
    <Col>
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

}
</script>
<style scoped>
</style>
