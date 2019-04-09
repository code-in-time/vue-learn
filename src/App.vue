<template>
  <div id="app">
    test
    <top />
    <bottom />
  </div>
</template>

<script>
import top from './components/top'
import bottom from './components/bottom'

export default {
  name: 'app',
  components: {
    top,
    bottom
  }
}
</script>

<style scoped>
  #app {
    background: red;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    padding: 10px;
  }
</style>

<style>
  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>
