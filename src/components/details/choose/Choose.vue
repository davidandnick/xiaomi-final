<template>
  <div class="choose">
    <div class="container">
      <div class="product-section">
        <div class="title">已选</div>
        <div class="content">{{product.choose}}</div>
        <div class="icon-arrow"><img src="./01.png"></div>
      </div>
      <div class="product-section">
        <div class="title">送至</div>
        <div class="content">
          <span class="address">北京市 东城区</span>
          <span class="on">有现货</span>
        </div>
        <div class="icon-arrow"><img src="./01.png"></div>
      </div>
      <div class="product-section"> 
        <div class="item">
          <img src="./02.png">
          <span>小米自营</span>
        </div>
        <div class="item">
          <img src="./02.png">
          <span>小米发货</span>
        </div>
        <div class="item">
          <img src="./02.png">
          <span>7天无理由退货</span>
        </div>
        <div class="icon-arrow"><img src="./01.png"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'choose',
  props: ['product']
}
</script>
<style lang="less" scoped>
  .choose {
    width: 12.5rem;
    height: 3.83rem;
    .container {
      box-sizing: border-box;
      width: 11.36rem;
      height: 3.83rem;
      margin: 0.26rem 0.53rem 0 0.53rem;
      background: #fafafa;
      .product-section {
        box-sizing: border-box;
        width: 11.33rem;
        height: 1.3rem;
        padding: 0.4rem 0.4rem;
        position: relative;
        display: flex;
        font-size: 0.42rem;
        .title {
          margin-right: 0.33rem;
        }
        .icon-arrow {
          position: absolute;
          right: 0.33rem;
        }
        .item {
          margin-right: 0.33rem;
          img {
            width: 0.33rem;
            height: 0.33rem;
          }
        }
      }
    }
  }
</style>