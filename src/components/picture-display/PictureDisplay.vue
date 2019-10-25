<template>
  <div class="picture-display" :style="{height: sliderHeight + 'px'}">
    <div 
      class="picture-wrapper" 
      @touchstart.stop="getStartEvent"
      @touchmove.stop="moveSlider"
      @touchend.stop="toggleSlider"
      @transitionend.stop="init"
      :class="{toggle: isToggle}"
      :style="{left: leftValue + 'px', height: sliderHeight + 'px'}"
    >
      <img 
        v-for="image in images" 
        :key="image.id" 
        :src="image.src" 
        :alt="image.alt"
        :style="{height: sliderHeight + 'px'}"
        @click="give1(image.alt)"
      >
    </div>
    <div  class="bullets">
      <!-- 根据滑块来改变活动小球的样式 -->
      <span 
        v-for="image in images" 
        :key="image.id" 
        class="bullet" 
        :class="{activeBullet: index===image.id}"
      >
      </span>
    </div>
  </div>
</template>
<script>
// 解决动态绑定图片路径时，webpack无法编译打包图片，导致无法显示图片
// 所以先把需要引用的图片先import进来，这样webpack一开始时就可以将图片进行打包

export default {
  name: 'picture-display',
  // 通过父组件动态传入滑块的宽度和高度、滑块的数量、图片的信息和路径
  props: ['sliderWidth', 'sliderHeight', 'sliderNumber', 'images'],
  data: function() {
    return {
      startEvent: null, // 记录触摸的初始位置
      oldEvent: null, // 记录触摸的上一次位置
      index: 0, // 初始滑块(从0开始)
      leftValue: 0, // 初始偏移量
      isToggle: false, // 设置初始切换滑块的状态
    }
  },
  methods: {
    // 当触摸开始，获取初始的位置
    getStartEvent: function(event) {
      this.startEvent = this.oldEvent = event;
    },
    // 触摸移动时，不断获取触摸的位置和保存上次位置的值
    // 通过现在位置和上次位置比较，判断是左滑动还是右滑动，最后计算滑动距离来进行左右移动
    // 移动实际上是指包裹滑块的容器移动，而不是实际的滑块
    moveSlider: function(event) {
      // 如果event.targetTouches[0].clientX小于oldEvent.targetTouches[0].clientX,向左滑动
      // 偏移值left要减去滑动的距离
      if (event.targetTouches[0].clientX < this.oldEvent.targetTouches[0].clientX) {
        this.leftValue -= this.oldEvent.targetTouches[0].clientX - event.targetTouches[0].clientX
      }
      // 如果event.targetTouches[0].clientX大于oldEvent.targetTouches[0].clientX,向右滑动
      // 偏移值left要加上滑动的距离
      if (event.targetTouches[0].clientX > this.oldEvent.targetTouches[0].clientX) {
        this.leftValue += event.targetTouches[0].clientX - this.oldEvent.targetTouches[0].clientX
      }
      this.oldEvent = event; // 保存上次的位置
    },
    // 切换滑块
    // 通过比较startEvent初始位置和event触摸结束的位置，判断触摸结束时是左滑动还是右滑动
    // 根据变化index的值确定leftValue，从而达到切换滑块的效果
    toggleSlider: function(event) {
      // event.changedTouches[0].clientX小于startEvent.targetTouches[0].clientX，是左滑动,切换到下一个滑块
      // index的值加1
      if (event.changedTouches[0].clientX < this.startEvent.targetTouches[0].clientX) {
        this.index++;
      }
      // event.changedTouches[0].clientX大于startEvent.targetTouches[0].clientX，是右滑动，切换到上一个滑块
      // index的值减1
      else if (event.changedTouches[0].clientX > this.startEvent.targetTouches[0].clientX) {
        this.index--;
      }

      // 防止滑块越界
      // 如果index小于0，就返回第一个滑块
      // 如果index大于滑块的数量，就返回最后一个滑块
      if (this.index < 0) {
        this.index = 0;
      }
      else if (this.index > this.sliderNumber-1) {
        this.index = this.sliderNumber-1;
      }

      // 根据index计算leftValue，切换滑块
      this.leftValue = 0 - this.sliderWidth * this.index;

      // 添加过渡动画样式
      this.isToggle = true;
    },
    // 过渡动画结束，去除过渡动画样式
    init: function() {
      this.isToggle = false;
    },
    // 当点击图片时，向父组件传递事件，把图片alt信息参数，作为判断商品的依据
    give1: function(alt) {
      this.$emit('giveOne', alt);
    }
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
  .picture-display {
    width: 12.5rem;
    height: 6.25rem;
    position: relative;
    overflow: hidden;
    background: #ccc;
    .picture-wrapper {
      position: relative;
      width: 10000%;
      height: 100%;
      display: flex;
      img {
        width: 12.5rem;
        height: 6.25rem;
      }
    }
    // 切换滑块的过渡动画
    .toggle {
      transition: left 0.2s ease-in-out;
    }
    .bullets {
      position: absolute;
      width: 12.5rem;
      bottom: 0.25rem;
      left: 0;
      display: flex;
      justify-content: center;
      .bullet {
        width: 0.2rem;
        height: 0.2rem;
        margin: 0 0.13rem;
        border-radius: 100%;
        background: rgba(255,255,255,0.2);
      }
      .activeBullet {
        background: rgba(255,255,255,0.8);
      }
    }    
  }
</style>