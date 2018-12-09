<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'

  export default {
    components: { TheHeader },
  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
