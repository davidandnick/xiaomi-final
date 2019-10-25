<template>
  <div class="redmi-note7">
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
// 展示的图片
import main1 from './photo3/01.jpg';
import main2 from './photo3/02.jpg';
import main3 from './photo3/03.jpg';
import main4 from './photo3/04.jpg';
import main5 from './photo3/05.jpg';
import main6 from './photo3/06.jpg';

export default {
  name: 'redmi-note7',
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
      commentNumber: 2, // 评论滑块的数量
      // 产品信息
      product: {
        name: 'Redmi Note 7',
        information: '4800万拍照千元机 / “满血版”骁龙660处理器 / 品质“小金刚”，18个月超长质保 / 4000mAh 大电量 / 6.3" 水滴全面屏 / USB-C 接口，方便耐用 / 支持快充 4 协议',
        price: '￥1099',
        oldPrice: '￥1399',
        choose: 'Redmi Note 7 6GB+64GB 镜花水月 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: 'CPU',
            value: '骁龙660八核'
          },
          {
            id: 1,
            image: img2,
            name: '双摄像头',
            value: '4800万+500万像素'
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
            value: '2340x1080'
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
            name: '刘钰钰',
            date: '2019-08-13',
            like: 1,
            content: '漂亮的不像实力派，因为米粉所以小米，大爱小米，小米在手天下我有！',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2},
              {id: 2, image: main3}
            ],
            reply: {
              begin: '官方回复：',
              content: '咱可是实力与偶像的结合，是实力偶像派，永远相信美好的事情即将发生，因为...'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: '小金',
            date: '2019-08-05',
            like: 2,
            content: '手机棒棒哒，试了一下手机拍照超清晰。',
            photos: [
              {id: 0, image: main4},
              {id: 1, image: main5},
              {id: 2, image: main6}
            ],
            reply: {
              begin: '官方回复：',
              content: '说实话，道理我都懂，但喜欢Note 7就是没有道理啊。感谢您对小米的支...'
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
  .redmi-note7 {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 24.9rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 16.4rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 6.23rem;
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