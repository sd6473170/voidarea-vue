<template>
  <div class="top_navigator">
    <div class="top_actionbar"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .top_navigator {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 150px;
    position: absolute;
    background-color: aquamarine;
    z-index: 0;
  }
  .top_actionbar {
    width: 100%;
    height: 50px;
    bottom: 0px;
    background-color: black;
    position: relative;
    z-index: 1;
  }
</style>
