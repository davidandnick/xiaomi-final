<template>
  <div class="comment">
    <div 
      class="wrapper" 
      @touchstart.stop="getStartEvent"
      @touchmove.stop="moveSlider"
      @touchend.stop="toggleSlider"
      @transitionend.stop="init"
      :class="{toggle: isToggle}"
      :style="{left: leftValue + 'px'}"
    >
      <div 
        class="box" 
        v-for="comment in product.comments"
        :key="comment.id"
      >
        <div class="comment-header">
          <img :src="comment.headImage" alt="头像">
          <div class="user">
            <div class="name">{{comment.name}}</div>
            <div class="comment-date">{{comment.date}}</div>
          </div>
          <div class="like">
            <img src="./like.png" alt="点赞">
            <span class="count">{{comment.like}}</span>
          </div>
        </div>
        <div class="text">{{comment.content}}</div>
        <div class="photos">
          <div 
            class="img" 
            v-for="photo in comment.photos"
            :key="photo.id"
          >
            <img :src="photo.image">
          </div>
        </div>
        <div class="comment-reply" v-if="comment.reply">
          <span>{{comment.reply.begin}}</span>{{comment.reply.content}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comment',
  // 向父组件获取产品信息和评论滑块数量
  props: ['product','commentNumber'],
  data: function() {
    return {
      startEvent: null, // 记录触摸的初始位置
      oldEvent: null, // 记录触摸的上一次位置
      index: 0, // 初始滑块(从0开始)
      // sliderWidth: 323, // 滑块的宽度
      leftValue: 0, // 初始偏移量
      isToggle: false, // 设置初始切换滑块的状态
    }
  },
  computed: {
    // 滑块的宽度,屏幕宽度的0.86倍
    sliderWidth: function() {
      return document.body.clientWidth*0.86;
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
      else if (this.index > this.commentNumber-1) {
        this.index = this.commentNumber-1;
      }

      // 根据index计算leftValue，切换滑块
      this.leftValue = 0 - this.sliderWidth * this.index;

      // 添加过渡动画样式
      this.isToggle = true;
    },
    // 过渡动画结束，去除过渡动画样式
    init: function() {
      this.isToggle = false;
    }
  }
}
</script>
<style lang="less" scoped>
  .comment {
    width: 12.5rem;
    height: 8.16rem;
    position: relative;
    overflow: hidden;
    .wrapper {
      position: relative;
      width: 10000%;
      height: 100%;
      margin-top: 0.33rem;
      display: flex;
      .box {
        box-sizing: border-box;
        width: 10.23rem;
        height: 8.16rem;
        padding: 0.53rem;
        margin-left: 0.53rem;
        background: #fafafa;
        border-radius: 4px;
        .comment-header {
          height: 1.1rem;
          display: flex;
          img {
            width: 1.1rem;
            height: 1.1rem;
            margin-right: 0.33rem;
          }
          .user {
            width: 6.46rem;
            height: 1rem;
            .name {
              height: 0.46rem;
              font-size: 0.42rem;
              color: rgba(0,0,0,0.8);
            }
            .comment-date {
              height: 0.43rem;
              margin-top: 0.06rem;
              font-size: 0.4rem;
              color: rgba(0,0,0,0.5);
            }
          }
          .like {
            width: 1.26rem;
            height: 0.6rem;
            display: flex;
            color: rgba(0,0,0,0.5);
            img {
              width: 0.6rem;
              height: 0.6rem;
            }
            .count {
              width: 0.46rem;
              height: 0.46rem;
              font-size: 0.4rem;
            }
          }
        }
        .text {
          width: 9.1rem;
          height: 1.23rem;
          margin: 0.2rem 0;
          font-size: 0.42rem;
          color: rgba(0,0,0,0.87);
        }
        .photos {
          width: 9.1rem;
          height: 2.23rem;
          margin-bottom: 0.2rem;
          overflow: hidden;
          .img {
            display: inline-block;
            width: 2.83rem;
            height: 2.16rem;
            margin-right: 0.16rem;
            border-radius: 6px;
            img {
              width: 2.83rem;
              height: 3.8rem;            
            }
          }
        }
        .comment-reply {
          width: 9.1rem;
          height: 1.2rem;
          font-size: 0.42rem;
          color: rgba(0,0,0,0.8);
          span {
            color: #ff6700;
          }
        }
      }
    }
    // 切换滑块的过渡动画
    .toggle {
      transition: left 0.2s ease-in-out;
    }   
  }
</style>