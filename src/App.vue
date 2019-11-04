<template>
  <div id="app">
    <h1>INFO</h1>
    <nav>
    <router-link to="/user">user</router-link>
    <router-link to="/media">media</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
