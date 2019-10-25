<template>
  <div class="header-wrap">
    <div class="header">
      <div class="logo">
        <img src="./logo32px.png" alt="小米图标">
      </div>
      <div class="search">
        <div class="search-icon">
            <img src="./search16px.png" alt="搜索icon">
        </div>
        搜索商品名称
      </div>
      <div class="person-center-icon">
        <img src="./person-center32px.png" alt="个人中心">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header-wrap'
}
</script>

<style lang="less" scoped>
  .header-wrap {
    width: 12.5rem;
    height: 1.5rem;
    background: #f2f2f2;
    font-size: 0.53rem;
    .header {
      display: flex;
      margin: 0 .3rem;
      .logo {
        margin: .3rem 0 0 0;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
      .search {
        display: flex;
        width: 9rem;
        height: 1.1rem;
        margin: .15rem .3rem 0 .3rem;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        color: rgba(0,0,0,.3);
        background: #fff;
        align-items: center;
        .search-icon {
          margin: 0.03rem .15rem 0 .15rem;
          img {
          width: 0.6rem;
          height: 0.6rem;
          }
        }
      }
      .person-center-icon {
        margin: 0.25rem 0 0 0;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
</style>