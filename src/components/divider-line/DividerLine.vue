<template>
  <div id="divider-line" :style="{background: background}"></div>
</template>
<script>
export default {
  name: 'divider-line',
  props: ['background']
}
</script>
<style lang="less" scoped>
  #divider-line {
    width: 12.5rem;
    height: 0.2rem;
    background: rgb(230, 231, 251);
  }
</style>