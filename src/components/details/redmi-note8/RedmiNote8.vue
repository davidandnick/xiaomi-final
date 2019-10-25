<template>
  <div class="redmi-note8">
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

export default {
  name: 'redmi-note8',
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
        name: 'Redmi Note 8',
        information: '4800万全场景四摄 / 前置1300万美颜相机 / 骁龙665处理器 / 4000mAh超长续航 / 标配18W快充 / 超线性扬声器 / 90%高屏占比 / 康宁大猩猩保护玻璃 / 6.3英寸水滴全面屏',
        extraInformation: '「4800万四摄小金刚，标配18W快充，+19元得手机膜」',
        price: '￥999',
        choose: 'Redmi Note 8 4GB+64GB 皓月白 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: 'CPU',
            value: '骁龙665八核'
          },
          {
            id: 1,
            image: img2,
            name: '四摄像头',
            value: '4800万+800万+200万+200万像素'
          },
          {
            id: 2,
            image: img3,
            name: '超大屏',
            value: '6.3英寸'
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
            name: '高速',
            value: '4GB'
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
            value: '4000mAh'
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
            name: '742****88',
            date: '2019-09-20',
            like: 12,
            content: '就很nice,就很棒，用红米note静等5G',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2}
            ],
            reply: {
              begin: '官方回复：',
              content: '“我发现有人暗恋你。”“谁啊?”“我啊。”感谢您对小米的支持'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: '光辉岁月',
            date: '2019-09-27',
            like: 4,
            content: '不错，一直用红米，性价比比较高。',
            photos: [
              {id: 0, image: main3},
              {id: 1, image: main4}
            ],
            reply: {
              begin: '官方回复：',
              content: '“你知道为什么白雪公主要亲才会醒来吗？”“为什么？”“那你闭着眼睛试试...'
            }
          },
          {
            id: 2,
            headImage: head3,
            name: '宁老豆',
            date: '2019-09-20',
            like: 110,
            content: '相机还不错，手机有点热',
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
    Configuration,
    Choose,
    Comment
  }
}
</script>
<style lang="less" scoped>
  .redmi-note8 {
    position: relative;
    .images {
      .img1 {
        img {
          width: 12.5rem;
          height: 24.6rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 20.3rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 16.6rem;
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