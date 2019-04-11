<template>
  <div id="app">
    test <br /><br />
    {{id}} {{name}} {{title}}
    <top />
    <bottom v-bind:thrID="testItHereClass1" v-on:emt-AddToData="doThis" />
    <ul v-for="x in data" :key="x">
      <li>{{x}}</li>
    </ul>
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
  },
  props: {
    thrID: String
  },
  data() {
    return {
      id: 1,
      name: 'test',
      title: 'the title',
      data: ['a','b']
    }
  },
  methods:{
    doThis(x) {
      console.log(x)
      this.data.push(x)
    }
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
