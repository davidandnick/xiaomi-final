<template>
  <div class="xiaomi-mix3">
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
    <Comment :product="product"/>
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

export default {
  name: 'xiaomi-mix3',
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
      // 产品信息
      product: {
        name: '小米MIX 3',
        information: 'DxOMark拍照108分 / 磁动力滑盖全面屏 / 四曲面陶瓷机身 / 骁龙845旗舰处理器 / 包装盒内附赠10W无线充电器',
        price: '￥2599',
        oldPrice: '￥3599',
        choose: '小米MIX 3 全网通版 8GB+128GB 黑色 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: 'CPU',
            value: '骁龙845八核'
          },
          {
            id: 1,
            image: img2,
            name: '双摄像头',
            value: '双1200万像素'
          },
          {
            id: 2,
            image: img3,
            name: '超大屏',
            value: '6.39英寸'
          },
          {
            id: 3,
            image: img4,
            name: '屏幕分辨率',
            value: '2340x1080'
          },
          {
            id: 4,
            image: img5,
            name: '极速畅玩',
            value: '8GB'
          },
          {
            id: 5,
            image: img6,
            name: '存储容量',
            value: '128GB'
          },
          {
            id: 6,
            image: img7,
            name: '超长待机',
            value: '3200mAh'
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
            name: '胡米',
            date: '2019-06-23',
            like: 129,
            content: '忠实米粉总是希望小米不忘初心，砥砺奋进。永远记住我们是中国的的小米。',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2}
            ],
            reply: {
              begin: '官方回复：',
              content: '小米一直都是中国的小米，不忘初心，砥砺奋进是我们应该做的，我们希望所有...'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: '末♚年',
            date: '2019-06-22',
            like: 49,
            content: '收到那一刻感觉超级爽！！！',
            photos: [
              {id: 0, image: main3}
            ],
            reply: {
              begin: '官方回复：',
              content: '那一瞬间，想到未来，就在黑夜路的尽头，你的光和我见面，心有些感触万千！...'
            }
          },
          {
            id: 2,
            headImage: head3,
            name: '陈臣尘',
            date: '2019-06-22',
            like: 4,
            content: '如果说遇见是一种缘分，那么我相信你不会失望，大爱小米',
            photos: [
              {id: 0, image: main4},
              {id: 1, image: main5},
              {id: 2, image: main6}
            ],
            reply: {
              begin: '官方回复：',
              content: '只为相遇那一个眼神，彼此敞开那一扇心门，风雨走过千山万水依然那样真。感...'
            }
          }
        ]
      },
      
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
  .xiaomi-mix3 {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 15.3rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 9.83rem;
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