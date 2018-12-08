<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <Episodes />
    </main>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'
  import Episodes from './views/Episodes.vue'

  export default {
    components: { TheHeader, Episodes },
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
