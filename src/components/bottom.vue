<template>
<div class="row">
  <div class="col">

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">
      test {{thrID}} <button v-on:click="$emit('emt-AddToData', Math.random())" type="button">send</button>
    </p>
  </div>
</div>



  </div>
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
