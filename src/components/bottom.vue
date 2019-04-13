<template>
<div class="row">
  <div class="col">

<div class="card mb-4">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <div class="card-text">
      <form v-on:submit="formSubmit">
        <input v-model="msgInput" />
        test {{thrID}} <button type="submit">send</button>
        {{msgInput}}
      </form>
    </div>
  </div>
</div>
<!-- v-on:click="$emit('emt-AddToData', Math.random())" -->


  </div>
</div>
</template>

<script>


export default {
  name: 'bottom',
  components: {

  },
  props:["thrID"],
  data() {
    return {
      msgInput: 'bvbvvc'
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      console.log(e)
      this.$emit('emt-AddToData', Math.random())
    }
  }
}

</script>

<style scoped>
  .bottom {
    background: yellow;
    height: 30px;
    width: 100%;
  }
</style>
