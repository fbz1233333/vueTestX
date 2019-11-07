<template>
  <div id="app">
<!--    <div>-->
<!--      <Carousel>-->
<!--        <Carousel-item>-->
<!--          <div class="demo-carousel">-->
<!--            <img src="../../assets/img3.png" height="304" width="100%"/>-->
<!--          </div>-->
<!--        </Carousel-item>-->
<!--        <Carousel-item>-->
<!--          <div class="demo-carousel">-->
<!--            <img src="../../assets/img3.png" height="304" width="100%"/>-->
<!--          </div>-->
<!--        </Carousel-item>-->
<!--      </Carousel>-->
<!--    </div>-->
    <Row>
      <Menu mode="horizontal">
        <MenuItem name="1" to="/to_admin/user">
          <Icon type="ios-paper"></Icon>
          用户管理
        </MenuItem>
        <MenuItem name="2" to="/to_admin/media">
          <Icon type="ios-paper"></Icon>
          media管理
        </MenuItem>
      </Menu>
      <router-view/>
    </Row>
  </div>
</template>
<script>

</script>
<style scoped>
</style>
