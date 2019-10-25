<template>
  <div class="tv-E32A">
    <HeaderWrapper @back="$emit('back')"/>
    <PictureDisplay
      :sliderWidth="sliderWidth"
      :sliderHeight="sliderHeight"
      :sliderNumber="sliderNumber"
      :images="images"
    />
    <Description :product="product"/>
    <Configuration :product="product"/>
    <Choose :product="product"/>
    <Comment :product="product" :commentNumber="commentNumber"/>
    <div class="images">
      <div class="img1">
        <img src="./photo4/01.jpg">
      </div>
      <div class="img2">
        <img src="./photo4/02.jpg">
      </div>
      <div class="img3">
        <img src="./photo4/03.jpg">
      </div>
      <div class="img4">
        <img src="./photo4/04.jpg">
      </div>
      <div class="img5">
        <img src="./photo4/05.png">
      </div>
    </div>
  </div>
</template>
<script>
import HeaderWrapper from '../header-wrapper/HeaderWrapper.vue';
import PictureDisplay from '../../picture-display/PictureDisplay.vue';
import Description from '../description/Description.vue';
import Configuration from '../configuration/Configuration.vue';
import Choose from '../choose/Choose.vue';
import Comment from '../comment/Comment.vue';

// 轮播图的图片
import imgA from './photo1/01.jpg';
import imgB from './photo1/02.jpg';
import imgC from './photo1/03.jpg';
import imgD from './photo1/04.jpg';

// 配置的图片
import img1 from './photo2/01.png';
import img2 from './photo2/02.png';
import img3 from './photo2/03.png';
import img4 from './photo2/04.png';
import img5 from './photo2/05.png';

// 评论的图片
// 其中头像的图片
import head1 from './photo3/head01.jpg';
import head2 from './photo3/head02.jpg';
import head3 from './photo3/head03.jpg';
// 展示的图片
import main1 from './photo3/01.jpg';
import main2 from './photo3/02.jpg';
import main3 from './photo3/03.jpg';
import main4 from './photo3/04.jpg';
import main5 from './photo3/05.jpg';
import main6 from './photo3/06.jpg';
import main7 from './photo3/07.jpg';
import main8 from './photo3/08.jpg';

export default {
  name: 'tv-E32A',
  data: function() {
    return {
      sliderNumber: 4, // 滑块的数量（即图片的数量）
      // 轮播图图片信息和路径
      images: [
        {id: 0, src: imgA},
        {id: 1, src: imgB},
        {id: 2, src: imgC},
        {id: 3, src: imgD}
      ],
      commentNumber: 3, // 评论滑块的数量
      // 产品信息
      product: {
        name: '小米电视4A 55英寸',
        information: '全面屏设计 / 高清液晶屏 / 纤薄机身 / 1GB+4GB大内存 / 内置小爱同学',
        extraInformation: '「“十一欢购黄金周”10月1日-10月8日限时特惠！活动期间每天前500名支付电视赠HDMI高清线1折礼券！」',
        price: '￥699',
        oldPrice: '￥1099',
        choose: '小米全面屏电视E32A 灰色 32英寸 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: '屏幕尺寸',
            value: '32英寸'
          },
          {
            id: 1,
            image: img2,
            name: '分辨率',
            value: '高清'
          },
          {
            id: 2,
            image: img3,
            name: '处理器',
            value: '64位'
          },
          {
            id: 3,
            image: img4,
            name: '存储',
            value: '1GB+4GB'
          },
          {
            id: 4,
            image: img5,
            name: 'HDMI',
            value: '2个'
          }
        ],
        comments: [
          {
            id: 0,
            headImage: head1,
            name: '天鹤$',
            date: '2019-08-17',
            like: 23,
            content: '电视屏幕显示效果很好，这个价格超值',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2}
            ],
            reply: {}
          },
          {
            id: 1,
            headImage: head2,
            name: '没有悲喜的佛',
            date: '2019-08-19',
            like: '17',
            content: '可以在卧室看片了，感谢小米！',
            photos: [
              {id: 0, image: main3},
              {id: 1, image: main4},
              {id: 2, image: main5},
            ],
            reply: {}
          },
          {
            id: 2,
            headImage: head3,
            name: '赵子健',
            date: '2019-09-13',
            like: '8',
            content: '外观大气好看！内置小爱同学超级好用。忠实米粉，从小米2s开始与小米的故事....',
            photos: [
              {id: 0, image: main6},
              {id: 1, image: main7},
              {id: 2, image: main8},
            ],
            reply: {}
          }
        ]
      }
    }
  },
  computed: {
    // 滑块的宽度,等于屏幕宽度
    sliderWidth: function() {
      return document.body.clientWidth;
    },
    // 滑块的高度
    sliderHeight: function() {
      return document.body.clientWidth*1.1;
    }
  },
  components: {
    HeaderWrapper,
    PictureDisplay,
    Description,
    Configuration,
    Choose,
    Comment
  }
}
</script>
<style lang="less" scoped>
  .tv-E32A {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 27.6rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 29.3rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 18.4rem;
        }
      }
      .img4 {
        img {
          width: 12.5rem;
          height: 11.2rem;
        }
      }
      .img5 {
        img {
          width: 12.5rem;
          height: 4.93rem;
        }
      }
    }
  }
</style>