<template>
  <div class="tv-4A55">
    <HeaderWrapper @back="$emit('back')"/>
    <PictureDisplay
      :sliderWidth="sliderWidth"
      :sliderHeight="sliderHeight"
      :sliderNumber="sliderNumber"
      :images="images"
    />
    <Description :product="product"/>
    <Configuration :product="product"/>
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
import main2 from './photo3/02.jpg';
import main3 from './photo3/03.jpg';

export default {
  name: 'tv-4A55',
  data: function() {
    return {
      sliderNumber: 1, // 滑块的数量（即图片的数量）
      // 轮播图图片信息和路径
      images: [
        {id: 0, src: imgA}
      ],
      commentNumber: 1, // 评论滑块的数量
      // 产品信息
      product: {
        name: '小米电视4A 55英寸',
        information: '超高清屏 / 2GB+8GB / 真四核64位高性能处理器 / 超窄边框 / 智能语音 / 杜比解码 / 海量高清片源 / 支持壁挂',
        extraInformation: '「“十一欢购黄金周”10月1日-10月8日限时特惠！活动期间每天前500名支付电视赠HDMI高清线1折礼券！」',
        price: '￥1699',
        oldPrice: '￥1999',
        choose: '小米电视4A 55英寸 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: '屏幕尺寸',
            value: '55英寸'
          },
          {
            id: 1,
            image: img2,
            name: '分辨率',
            value: '4K超高清'
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
            value: '2GB+8GB'
          },
          {
            id: 4,
            image: img5,
            name: 'HDMI',
            value: '3个'
          }
        ],
        comments: [
          {
            id: 0,
            headImage: head1,
            name: '刘涛',
            date: '2019-06-22',
            like: 35,
            content: '新房子刚装修好。第二次买了，小米电视真心不错。漂亮 大气！会一直支持小米的...',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2},
              {id: 2, image: main3}
            ],
            reply: {
              begin: '官方回复：',
              content: '看熊出没也不叫我，我不跟你天下第一好了~(づ｡◕‿‿◕｡)づ感谢...'
            }
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
  .tv-4A55 {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 9.73rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 11.7rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 12rem;
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