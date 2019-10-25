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
import head2 from './photo3/head02.jpg';
import head3 from './photo3/head03.jpg';
// 展示的图片
import main1 from './photo3/01.jpg';
import main2 from './photo3/02.jpg';
import main3 from './photo3/03.jpg';
import main4 from './photo3/04.jpg';
import main5 from './photo3/05.jpg';

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
      commentNumber: 3, // 评论滑块的数量
      // 产品信息
      product: {
        name: '小米全面屏电视E43A',
        information: '全面屏设计 / 全高清+HDR / 纤薄机身 / 1GB+8GB大内存 / 64位四核处理器 / 内置小爱同学',
        extraInformation: '「“十一欢购黄金周”10月1日-10月8日限时特惠！活动期间每天前500名支付电视赠HDMI高清线1折礼券！」',
        price: '￥1299',
        oldPrice: '￥1999',
        choose: '小米全面屏电视E43A 灰色 43英寸 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: '屏幕尺寸',
            value: '43英寸'
          },
          {
            id: 1,
            image: img2,
            name: '分辨率',
            value: '全高清'
          },
          {
            id: 2,
            image: img3,
            name: '处理器',
            value: '64位四核'
          },
          {
            id: 3,
            image: img4,
            name: '存储',
            value: '1GB+8GB'
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
            name: '暴雪',
            date: '2019-09-26',
            like: 1,
            content: '外观漂亮，简洁大方，美中不足就是1080的，要是4K就好了！支持小米！',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2}
            ],
            reply: {}
          },
          {
            id: 1,
            headImage: head2,
            name: '530***18',
            date: '2019-09-22',
            like: 1,
            content: '很好不错，小米的老顾客了，一直信赖小米，信赖国货！',
            photos: [
              {id: 0, image: main3}
            ],
            reply: {}
          },
          {
            id: 2,
            headImage: head3,
            name: '博士眼镜',
            date: '2019-08-16',
            like: 4,
            content: '电视很漂亮，价格很美丽，体验很酷爽，小米很牛逼',
            photos: [
              {id: 0, image: main4},
              {id: 1, image: main5}
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
          height: 14.6rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 13rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 21.2rem;
        }
      }
      .img4 {
        img {
          width: 12.5rem;
          height: 13.5rem;
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