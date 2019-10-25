<template>
  <div class="notebook156">
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
import img6 from './photo2/06.png';
import img7 from './photo2/07.png';
import img8 from './photo2/08.png';
import img9 from './photo2/09.png';
import img10 from './photo2/10.png';

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

export default {
  name: 'notebook-156',
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
        name: '小米笔记本15.6" 2019款',
        information: '全新第八代 ／ 独立显卡，2GB显存 ／ 双风扇散热系统 ／ 双内存大硬盘可扩展 ／ 7大接口 ／ 独立数字键盘',
        price: '￥4499',
        oldPrice: '',
        choose: '15.6"笔记本 i5 8G MX110 深空灰 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: '较大屏幕',
            value: '15.6英寸'
          },
          {
            id: 1,
            image: img2,
            name: 'CPU',
            value: 'Intel i5'
          },
          {
            id: 2,
            image: img3,
            name: '显卡类型',
            value: '独立显卡'
          },
          {
            id: 3,
            image: img4,
            name: '厚度',
            value: '便携轻薄'
          },
          {
            id: 4,
            image: img5,
            name: '含固态硬盘',
            value: '128GB'
          },
          {
            id: 5,
            image: img6,
            name: '含机械硬盘',
            value: '1TB'
          },
          {
            id: 6,
            image: img7,
            name: '超大内存',
            value: '8GB'
          },
          {
            id: 7,
            image: img8,
            name: '屏幕分辨率',
            value: '全高清屏'
          },
          {
            id: 8,
            image: img9,
            name: '待机时长',
            value: '6小时'
          },
          {
            id: 9,
            image: img10,
            name: '重量',
            value: '2.18kg'
          }
        ],
        comments: [
          {
            id: 0,
            headImage: head1,
            name: 'l ௸ོ Ꮪ࿆ 青雉࿔࿐ོ',
            date: '2019-09-23',
            like: 10,
            content: '好看。送了汉堡 送了玫瑰花茶，super nice',
            photos: [
              {id: 0, image: main1}
            ],
            reply: {}
          },
          {
            id: 1,
            headImage: head2,
            name: '230*****43',
            date: '2019-09-30',
            like: '',
            content: '简洁、大方。非常不错。',
            photos: [
              {id: 0, image: main2},
              {id: 1, image: main3}
            ],
            reply: {}
          },
          {
            id: 2,
            headImage: head3,
            name: '暮·黎',
            date: '2019-07-19',
            like: 2,
            content: '挺好',
            photos: [
              {id: 0, image: main4}
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
  .notebook156 {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 9.76rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 7.6rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 8.93rem;
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