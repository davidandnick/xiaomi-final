<template>
  <div class="redmi-note8pro">
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
import img6 from './photo2/06.png';
import img7 from './photo2/07.png';
import img8 from './photo2/08.png';
import img9 from './photo2/09.png';

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
import main9 from './photo3/09.jpg';

export default {
  name: 'redmi-note8pro',
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
        name: 'Redmi Note 8 Pro',
        information: '6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速',
        extraInformation: '「四摄小金刚火爆开售，+99元得游戏手柄套装」',
        price: '￥1399',
        choose: 'Redmi Note 8 Pro 6GB+64GB 冰翡翠 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: 'CPU',
            value: 'MTK Helio G90T'
          },
          {
            id: 1,
            image: img2,
            name: '四摄像头',
            value: '6400万+800万+200万+200万像素'
          },
          {
            id: 2,
            image: img3,
            name: '超大屏',
            value: '6.53英寸'
          },
          {
            id: 3,
            image: img4,
            name: '屏幕分辨率',
            value: '2340×1080'
          },
          {
            id: 4,
            image: img5,
            name: '极速畅玩',
            value: '6GB'
          },
          {
            id: 5,
            image: img6,
            name: '存储容量',
            value: '64GB'
          },
          {
            id: 6,
            image: img7,
            name: '超长待机',
            value: '4500mAh'
          },
          {
            id: 7,
            image: img8,
            name: '运营商网络',
            value: '4G全网通'
          },
          {
            id: 8,
            image: img9,
            name: '网络模式',
            value: '双卡双待'
          }
        ],
        comments: [
          {
            id: 0,
            headImage: head1,
            name: '匆匆过客',
            date: '2019-09-16',
            like: 421,
            content: '有些微重，手感不错，也挺好看的；指纹和面部解锁反应速度还挺快的，面部解锁是...',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2},
              {id: 2, image: main3}
            ],
            reply: {
              begin: '官方回复：',
              content: '您好，我们很重视您的体验，我们也会不断优化产品，完善服务标准,力求给您...'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: '蓝色夏天',
            date: '2019-09-26',
            like: 83,
            content: '贝母白不赖哦⊙∀⊙！',
            photos: [
              {id: 0, image: main4},
              {id: 1, image: main5},
              {id: 2, image: main6}
            ],
            reply: {}
          },
          {
            id: 2,
            headImage: head3,
            name: '1284417a9',
            date: '2019-09-04',
            like: 120,
            content: '千万人之中，我一眼就看中了你。国产良心之作，大爱无疆。断剑重铸之日，骑士归...',
            photos: [
              {id: 0, image: main7},
              {id: 1, image: main8},
              {id: 2, image: main9}
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
  .redmi-note8pro {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 20.2rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 19.2rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 29rem;
        }
      }
      .img4 {
        img {
          width: 12.5rem;
          height: 12.6rem;
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