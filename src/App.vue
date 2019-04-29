<template>
  <div class="container">

    <headingElm />

    <div class="row">
      <div class="col">
        <top />
     </div>
    </div>

    <div class="row">
      <div class="col">
      <formSubmitElm v-bind:thrID="testItHereClass1" v-on:emt-AddToData="doThis" />
      <ul v-for="x in data" :key="x" class="list-group">
        <li class="list-group-item">{{x}}</li>
      </ul>
     </div>
    </div>

  </div>
</template>

<script>
import top from './components/top'
import formSubmitElm from './components/formSubmitElm'
import headingElm from './components/headingElm'

export default {
  name: 'app',
  components: {
    top,
    formSubmitElm,
    headingElm
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
  .container {
    background: lightgray
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
