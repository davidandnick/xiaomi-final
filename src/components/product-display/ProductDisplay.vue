<template>
  <div class="product-display">
    <div 
      v-for="product in products" 
      :key="product.id"
      class="wrap"
      @click="send1(product.name)"
    >
      <img :src="product.src" :alt="product.alt" >
      <div class="description">
        <div class="name">{{product.name}}</div>
        <div class="information">{{product.information}}</div>
        <div class="price">{{product.price}}<span class="price-old">{{product.oldPrice}}</span></div>
        <div class="button">{{product.button}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product-display',
  props: ['products'],
  methods: {
    // 点击产品组件时，向父组件传递点击事件，并把产品的名称作为参数进行传递，来判断是哪个被点击
    send1: function(name) {
      this.$emit('sendOne', name);
    }
  }
}
</script>
<style lang="less" scoped>
  .product-display {
    font-size: 0;
    .wrap {
      display: inline-block;
      width: 5.93rem;
      height: 8.5rem;
      margin: 0.13rem;
      img {
        width: 5.93rem;
        height: 4.83rem;
      }
      .description {
        box-sizing: border-box;
        width: 5.93rem;
        height: 3.66rem;
        padding: 0.35rem 0.46rem;
        background: #fff;
        text-align: center;
        .name {
          color: rgba(0,0,0,0.8);
          font-size: 0.48rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .information {
          color: rgba(0,0,0,0.5);
          font-size: 0.4rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price {
          color: #ea625b;
          font-size: 0.48rem;
          .price-old {
            padding-left: 0.2rem;
            color: rgba(0,0,0,0.5);
            font-size: 0.4rem;
            text-decoration: line-through;
          }
        }
        .button {
          width: 3.46rem;
          height: 0.46rem;
          padding: 0.26rem 0;
          margin: 0 0.76rem;
          color: #fff;
          background: #ea625b;
          font-size: 0.42rem;
          font-weight: 700;
        }
      }
    }
  }
</style>