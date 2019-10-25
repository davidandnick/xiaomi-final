<template>
  <div class="notebook156pro">
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
  name: 'notebook156pro',
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
        name: '小米笔记本Pro 15.6" 2019款',
        information: 'NVIDIA MX250 2G独显 / 第八代i5处理器 / 72%NTSC高色域全高清屏 / 更强悍的专业笔记本 / 512GB固态硬盘',
        extraInformation: '',
        price: '￥5899',
        oldPrice: '',
        choose: '小米笔记本Pro 15.6" 2019款 四核i5 8G MX250 512GB 深空灰 x 1',
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
            value: '512GB'
          },
          {
            id: 5,
            image: img6,
            name: '超大内存',
            value: '8GB'
          },
          {
            id: 6,
            image: img7,
            name: '屏幕分辨率',
            value: '全高清屏'
          },
          {
            id: 7,
            image: img8,
            name: '待机时长',
            value: '9小时'
          },
          {
            id: 8,
            image: img9,
            name: '重量',
            value: '1.95kg'
          }
        ],
        comments: [
          {
            id: 0,
            headImage: head1,
            name: 'M、卟离。',
            date: '2019-04-21',
            like: 60,
            content: '外形完美，性能给力，就是固态硬盘有点小了！',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2},
              {id: 2, image: main3}
            ],
            reply: {
              begin: '官方回复：',
              content: '螃蟹为什么横行霸道？因为它有（钳）钱，任性！感谢您对小米的支持。'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: '幸福小BOY仔',
            date: '2019-06-22',
            like: 28,
            content: '很好   一直使用小米系类  万物物联网的时代来了',
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
            name: 'MayBe若然',
            date: '2019-04-10',
            like: 61,
            content: '物流超级快，外观特别有质感，从小米2s到小米9，一路过来，见证了小米的成长...',
            photos: [
              {id: 0, image: main7},
              {id: 1, image: main8},
              {id: 2, image: main9}
            ],
            reply: {
              begin: '官方回复：',
              content: '人生百态 愿你笑口常开。世事无常 唯我初心不忘。感谢您对小米的支持~'
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
  .notebook156pro {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 4.9rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 8.53rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 9.23rem;
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