<template>
  <div class="redmibook14">
    <HeaderWrapper @back="$emit('back')"/>
    <PictureDisplay
      :sliderWidth="sliderWidth"
      :sliderHeight="sliderHeight"
      :sliderNumber="sliderNumber"
      :images="images"
    />
    <Description :product="product"/>
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
import Choose from '../choose/Choose.vue';
import Comment from '../comment/Comment.vue';

// 轮播图的图片
import imgA from './photo1/01.jpg';
import imgB from './photo1/02.jpg';

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
  name: 'redmibook14',
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
        name: 'RedmiBook 14',
        information: '性能增强版酷睿™i5处理器 / 14寸超窄边框全高清屏幕 / 轻薄便携长续航 / 支持Modern Standby，支持小米手环极速解锁',
        extraInformation: '',
        price: '￥3799',
        oldPrice: '',
        choose: 'RedmiBook 14  i5 8G 256GB 集显 银色 x 1',
        comments: [
          {
            id: 0,
            headImage: head1,
            name: '一休哥',
            date: '2019-09-14',
            like: '',
            content: '外观漂亮，性价比高，超值',
            photos: [
              {id: 0, image: main1}
            ],
            reply: {
              begin: '官方回复：',
              content: '没见你时我攒了一肚子的话，可是一见到你啊，我欢喜的像一个哑巴（づ￣3￣...'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: '小熊SSG',
            date: '2019-08-09',
            like: 136,
            content: '很满意，外观超好看，且性价比超高，开机10秒，跑分11万多，LOL特效全开...',
            photos: [
              {id: 0, image: main2},
              {id: 1, image: main3},
              {id: 2, image: main4}
            ],
            reply: {}
          },
          {
            id: 2,
            headImage: head3,
            name: '119*****53',
            date: '2019-09-10',
            like: 1,
            content: '性价比高，颜值也高，刚刚上手，先用着看看以后追评！电源线有点篓！',
            photos: [
              {id: 0, image: main5}
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
    Choose,
    Comment
  }
}
</script>
<style lang="less" scoped>
  .redmibook14 {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 5rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 7.76rem;
        }
      }
      .img3 {
        img {
          width: 375px;
          height: 11.5rem;
        }
      }
      .img4 {
        img {
          width: 12.5rem;
          height: 2.1rem;
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