<template>
  <div class="tv-4C32">
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

// 配置的图片
import img1 from './photo2/01.png';
import img2 from './photo2/02.png';
import img3 from './photo2/03.png';
import img4 from './photo2/04.png';
import img5 from './photo2/05.png';

// 评论的图片
// 其中头像的图片
import head1 from './photo3/head01.jpg';
// 展示的图片
import main1 from './photo3/01.jpg';

export default {
  name: 'tv-4C32',
  data: function() {
    return {
      sliderNumber: 2, // 滑块的数量（即图片的数量）
      // 轮播图图片信息和路径
      images: [
        {id: 0, src: imgA},
        {id: 1, src: imgB}
      ],
      commentNumber: 1, // 评论滑块的数量
      // 产品信息
      product: {
        name: '小米电视4C 32英寸',
        information: '人工智能系统 | 64位处理器 | 1GB+4GB 内存',
        extraInformation: '「“十一欢购黄金周”10月1日-10月8日限时特惠！活动期间每天前500名支付电视赠HDMI高清线1折礼券！」',
        price: '￥699',
        oldPrice: '￥799',
        choose: '小米电视4C 32英寸 黑色 32英寸 x 1',
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
            name: '帅帅的甜甜的',
            date: '2019-06-23',
            like: 64,
            content: '电视挺好清晰度好，物流送货到家 。超值618买的',
            photos: [
              {id: 0, image: main1}
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
  .tv-4C32 {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 24.5rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 12rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 13rem;
        }
      }
      .img4 {
        img {
          width: 12.5rem;
          height: 5.9rem;
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