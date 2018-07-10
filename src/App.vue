<template>
  <div id="app">
    <BearHeader/>
    <router-view/>
  </div>
</template>

<script>
import BearHeader from '@/components/common/BearHeader'
export default {
  name: 'App',
  components: {
    BearHeader
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
