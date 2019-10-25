<template>
  <div class="notebook133air">
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
import main6 from './photo3/06.jpg';
import main7 from './photo3/07.jpg';

export default {
  name: 'notebook133air',
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
        name: 'Air 13.3" 2019款',
        information: '酷睿i5处理器 / 轻薄全金属机身 / MX250独立显卡 / 9.5小时超长续航 / FHD全高清屏幕 / 指纹解锁 / 兼顾办公娱乐与轻薄的高性能笔记本',
        extraInformation: '',
        price: '￥5399',
        oldPrice: '',
        choose: '小米笔记本Air 13.3" 2019款 四核i5 8G MX250 银色 x 1',
        comments: [
          {
            id: 0,
            headImage: head1,
            name: '140*****99',
            date: '2019-04-25',
            like: 87,
            content: '第一次买电脑 感觉挺好的  就是玩游戏的话会有点烫手 不知道有事没事',
            photos: [
              {id: 0, image: main1}
            ],
            reply: {
              begin: '官方回复：',
              content: '我已经不是那个花五十块钱也要考虑很久的小可爱了，我现在五块钱都要深思熟...'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: 'Aioria W',
            date: '2019-06-21',
            like: 10,
            content: '用来学习ps用的，非常不错！逼格很高',
            photos: [
              {id: 0, image: main2},
              {id: 1, image: main3},
              {id: 2, image: main4}
            ],
            reply: {
              begin: '官方回复：',
              content: '“徒儿，你看那棉花糖，形虽有异，却归同本，彼此轮转，相灭相生。你从中悟...'
            }
          },
          {
            id: 2,
            headImage: head3,
            name: 'wengpeng',
            date: '2019-04-28',
            like: 5,
            content: '外观设计漂亮，和苹果有得一博，就是测试过程CPU发烫。功能按键不懂操作。',
            photos: [
              {id: 0, image: main5},
              {id: 1, image: main6},
              {id: 2, image: main7}
            ],
            reply: {
              begin: '官方回复：',
              content: '您好，如果在使用过程中出现异常的话，请您联系我们的在线客服或者拨打40...'
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
    Choose,
    Comment
  }
}
</script>
<style lang="less" scoped>
  .notebook133air {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 4.86rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 6.33rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 10.4rem;
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