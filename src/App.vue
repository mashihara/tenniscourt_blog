<template>
  <div id="app">
    <Main/>
    <router-view/>
  </div>
</template>

<script>
import Main from '@/components/common/Main'
export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
