<template>
  <div class="notebook125air">
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
  name: 'notebook125air',
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
        name: '小米笔记本Air 12.5" 2019款',
        information: '酷睿i5处理器 / 全高清屏幕 / 长续航全金属 / 超窄边框  / 像杂志一样随身携带 / 哈曼高品质扬声器',
        extraInformation: '',
        price: '￥4199',
        oldPrice: '￥4299',
        choose: '小米笔记本Air 12.5" 2019款 8代i5 4G 256G 银色 x 1',
        comments: [
          {
            id: 0,
            headImage: head1,
            name: '光华',
            date: '2019-09-09',
            like: 10,
            content: '物流速度快，收到后，打开一看，外观漂亮，做工精致，运行速度快，键盘灵敏，整...',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2},
              {id: 2, image: main3}
            ],
            reply: {
              begin: '官方回复：',
              content: '“我人生中两次学吃饭。”“哪两次？”“一次是小时候、一次是对面坐着你的...'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: 'abner',
            date: '2019-06-23',
            like: 15,
            content: '完美，收到了，迫不及待打开用了，两字，超值！忠实米粉没毛病老铁！',
            photos: [
              {id: 0, image: main4},
              {id: 1, image: main5}
            ],
            reply: {
              begin: '官方回复：',
              content: '这世间最烈的酒，是你手持小米的温柔。感谢您对小米的支持。'
            }
          },
          {
            id: 2,
            headImage: head3,
            name: '陈耀贵',
            date: '2019-08-09',
            like: 5,
            content: '漂亮上网够快灵敏度高女儿钟喜欢',
            photos: [
              {id: 0, image: main6},
              {id: 1, image: main7}
            ],
            reply: {
              begin: '官方回复：',
              content: '吾家有女初长成，得此电脑心甚喜ヾ(✿ﾟ▽ﾟ)ノ。感谢您对小米的支持。'
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
  .notebook125air {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 20rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 14.8rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 18.5rem;
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
          height: 4.9rem;
        }
      }
    }
  }
</style>