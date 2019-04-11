<template>
  <div v-bind:class="['hhhhh',thrID]">
    test {{thrID}} <button v-on:click="$emit('emt-AddToData', Math.random())" type="button">send</button>
  </div>
</template>

<script>


export default {
  name: 'bottom',
  components: {

  },
  props:["thrID"]
}

</script>

<style scoped>
  .bottom {
    background: yellow;
    height: 30px;
    width: 100%;
  }
</style>
