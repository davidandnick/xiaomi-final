<template>
  <div class="configuration">
    <div 
      class="item" 
      v-for="config in product.configurations"
      :key="config.id"
    >
      <div class="img"><img :src="config.image"></div>
      <div class="name">{{config.name}}</div>
      <div class="value">{{config.value}}</div>
    </div>
  </div> 
</template>
<script>
export default {
  name: 'configuration',
  props: ['product']
}
</script>
<style lang="less" scoped>
  .configuration {
    width: 12.5rem;
    height: 1.86rem;
    padding: 0 0 0.26rem 0;
    display: flex;
    overflow-x: auto;
    flex: 0 0 auto;
    .item {
      width: 2.63rem;
      height: 1.86rem;
      padding: 0 0.13rem;
      border-right: 1px solid rgba(0,0,0,0.3);
      text-align: center;
      font-size: 0;
      &:last-child {
        border-right: 0;
      }
      img {
        width: 0.66rem;
        height: 0.66rem;
      }
      .name {
        width: 2.63rem;
        height: 0.43rem;
        padding: 0.13rem 0;
        color: #3c3c3c;
        font-size: 0.42rem;
        white-space: nowrap;
      }
      .value {
        width: 2.63rem;
        height: 0.46rem;
        color: #676767;
        font-size: 0.4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>