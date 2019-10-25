<template>
  <div class="wrap">
    <div class="header-bar">
      <HeaderWrap/>
      <!-- 导航目录 -->
      <div class="nav-wrap">
        <div 
          v-for="item in items" 
          :key="item.id" 
          class="item"
          :class="{active: activeId===item.id}"
          @click="changeAcitveId(item.id)"
        >
          {{item.message}}
        </div>
      </div>
    </div>
    <!-- 根据导航的activeId值，展示对应的主页面 -->
    <div class="main-wrap">
      <MainPhone class="bodys" v-show="activeId===0" @giveTwo="give3" @sendTwo="send3"/>
      <MainAppliance class="bodys" v-show="activeId===1" @giveTwo="give3" @sendTwo="send3"/>
      <MainTv class="bodys" v-show="activeId===2" @giveTwo="give3" @sendTwo="send3"/>
      <MainNotebook class="bodys" v-show="activeId===3" @giveTwo="give3" @sendTwo="send3"/>
    </div>
  </div>
</template>
<script>
import HeaderWrap from '../header-wrap/HeaderWrap.vue';
import MainPhone from '../main-phone/MainPhone.vue';
import MainAppliance from '../main-appliance/MainAppliance.vue';
import MainTv from '../main-tv/MainTv.vue';
import MainNotebook from '../main-notebook/MainNotebook.vue';

export default {
  name: 'wrap',
  data: function() {
    return {
      items: [
        {id: 0, message: '手机'},
        {id: 1, message: '家电'},
        {id: 2, message: '电视'},
        {id: 3, message: '笔记本'},
      ],
      activeId: 0,  // 设置默认活动状态的id
    }
  },
  methods: {
    // 点击元素时，将该元素的id值传入，并将值赋值给activeId
    changeAcitveId: function(id) {
      this.activeId = id;
    },
    // 继续向父组件传递点击事件，把图片alt信息继续作为参数进行传递
    give3: function(alt) {
      this.$emit('giveThree', alt);
    },
    // 继续向父组件传递点击事件，把产品名称信息继续作为参数进行传递
    send3: function(name) {
      this.$emit('sendThree', name);
    },
  },
  components: {
    HeaderWrap,
    MainPhone,
    MainAppliance,
    MainTv,
    MainNotebook
  }
}
</script>
<style lang="less" scoped>
  .header-bar {
    position: fixed;
    z-index: 99;
    .nav-wrap {
      width: 12.5rem;
      height: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #f2f2f2;
      color: #3c3c3c;
      .item {
        box-sizing: border-box;
        height: 1rem;
        font-size: 0.5rem;
        line-height: 1rem;
        border-bottom: 2px solid #f2f2f2;
      }
      .active {
        color: rgb(237, 91, 0);
        border-color: rgb(237, 91, 0);
      }
    }
  }
  .main-wrap {
    position: relative;
    width: 12.5rem;
    .bodys {
      position: absolute;
      top: 2.5rem;
    }
  }
</style>