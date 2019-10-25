<template>
  <div class="description">
    <div class="name">{{product.name}}</div>
    <div class="information">
      <span class="stress">{{product.extraInformation}}</span>{{product.information}}
    </div>
    <div class="price">{{product.price}}<span class="price-old">{{product.oldPrice}}</span></div>
  </div>
</template>
<script>
export default {
  name: 'description',
  props: ['product']
}
</script>
<style lang="less" scoped>
  .description {
    box-sizing: border-box;
    width: 12.5rem;
    height: 5.73rem;
    padding: 0.55rem;
    .name {
      height: 1rem;
      font-size: 0.66rem;
      color: #3c3c3c;
    }
    .information {
      font-size: 0.42rem;
      color: rgba(0,0,0,0.54);
      word-break: break-all;
      .stress {
        color: rgb(255, 74, 0);
      }
    }
    .price {
      font-size: 0.83rem;
      color: #ff6700;
      .price-old {
        font-size: 0.42rem;
        color: rgba(0,0,0,0.54);
        text-decoration: line-through;
      }
    }
  }
</style>