<template>
  <div class="row">
    <div class="col">
      test this
      <br>
      <br>
      {{id}} {{name}} {{title}}
    </div>
  </div>
</template>

<script>
export default {
    name: "headingElm",
    props: ["id", "name", "title"]
};
</script>

<style>
</style>
