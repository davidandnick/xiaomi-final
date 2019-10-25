<template>
  <div class="header-wrapper">  
    <div class="circular" @click="$emit('back')">
      <img src="./left-arrow18px.png" alt="返回">
    </div>
    <div class="circular">
      <img src="./share18px.png" alt="分享">
    </div>
  </div>
</template>
<script>
export default {
  name: 'header-wrapper'
}
</script>
<style lang="less" scoped>
  .header-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 12.5rem;
    height: 1.66rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    .circular {
      width: 1rem;
      height: 1rem;
      margin: 0 0.33rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      background: rgba(0,0,0,0.6);
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
</style>