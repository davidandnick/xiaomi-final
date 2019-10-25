<template>
  <div class="xiaomi-9pro5g">
    <HeaderWrapper/>
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
  name: 'xiaomi-9pro5g',
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
        name: '小米9 Pro 5G',
        information: '5G双卡全网通超高速网络 / 骁龙855Plus旗舰处理器 / 40W有线闪充+30W无线闪充+10W无线反充，4000mAh长续航 / 4800万全焦段三摄 / 超振感横向线性马达 / VC液冷散热 / 高色准三星AMOLED屏幕 / 多功能NFC',
        price: '￥3699',
        choose: '小米9 Pro 5G 8GB+128GB 梦之白 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: 'CPU',
            value: '骁龙855+'
          },
          {
            id: 1,
            image: img2,
            name: '双摄像头',
            value: '4800万+1200万+1600万像素'
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
            value: '4000mAh'
          },
          {
            id: 7,
            image: img8,
            name: '运营商网络',
            value: '5G全网通'
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
            name: '黑色ㄨ幽默',
            date: '2019-09-28',
            like: 5,
            content: '很好，一直是小米的死忠粉',
            photos: [
              {id: 0, image: main1}
            ],
            reply: {
              begin: '官方回复：',
              content: '送你一阵轻风，带着我的祝福；送你一缕月光，映着我的影像；送你一片白云，...'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: '第貳快車手',
            date: '2019-09-29',
            like: 3,
            content: '很有幸成为小米9Pro第一批用户，当天预售开始就下了定金，本来打算买标准版...',
            photos: [
              {id: 0, image: main2},
              {id: 1, image: main3},
              {id: 2, image: main4}
            ],
            reply: {
              begin: '官方回复：',
              content: '您的信任，是对我们最大的鼓励；您的选择，是对我们最大的肯定 ，永远相信...'
            }
          },
          {
            id: 2,
            headImage: head3,
            name: '大雄',
            date: '2019-09-28',
            like: 4,
            content: '太漂亮了！送老婆！！！',
            photos: [
              {id: 0, image: main5},
              {id: 1, image: main6}
            ],
            reply: {
              begin: '官方回复：',
              content: '就是喜欢这么任性的boy，就喜欢给老婆买礼物，就是想买给她，就是想给她...'
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
  .xiaomi-9pro5g {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 22.2rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 17.3rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 26.3rem;
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