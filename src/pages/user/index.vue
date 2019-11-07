<template>
  <div>
    <Row>
      <Menu mode="horizontal" theme="light">
        <MenuItem name="1" to="/to_user/ex">
          <Icon type="ios-paper"></Icon>
          导航1
        </MenuItem>
        <MenuItem name="2" to="/to_user/er">
          <Icon type="ios-paper"></Icon>
          导航2
        </MenuItem>
      </Menu>
      <div>
        <Carousel>
          <Carousel-item>
            <div class="demo-carousel">
              <img src="../../assets/img3.png" height="304" width="100%"/>
            </div>
          </Carousel-item>
          <Carousel-item>
            <div class="demo-carousel">
              <img src="../../assets/img3.png" height="304" width="100%"/>
            </div>
          </Carousel-item>
        </Carousel>
      </div>

      <img src="../../assets/ads2.png" height="100" width="100%"/>
      <Row :gutter="50">
        <Col span="18">
        <router-view/>
        </Col>
        <Col span="6">

          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
          <br><img src="../../assets/adimage1.png" height="138" width="280"/>
        </Col>
      </Row>



    </Row>

  </div>
</template>
<script>
export default {}
</script>
<style scoped>
</style>
