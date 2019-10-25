<template>
  <div class="xinfengji">
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

export default {
  name: 'xinfengji',
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
        name: '米家新风机',
        information: '300m³/h 大风量 / 换气富氧 / 净化抗霾 / 除醛去味 / 阻隔过敏源 / 智能控制',
        extraInformation: '「10月1日-10月8日十一狂欢购，到手价仅2399元」',
        price: '￥2399',
        oldPrice: '￥2699',
        choose: '米家新风机 白色 x 1',
        comments: [
          {
            id: 0,
            headImage: head1,
            name: '.锦拓广告，刘',
            date: '2019-08-08',
            like: 36,
            content: '安装好就试了一会儿，空气质量它显示是变好了，安装师傅非常不错',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2},
              {id: 2, image: main3}
            ],
            reply: {}
          },
          {
            id: 1,
            headImage: head2,
            name: '218*****19',
            date: '2019-03-15',
            like: 40,
            content: '师傅们很有经验很专业，认真细致完美',
            photos: [
              {id: 0, image: main4}
            ],
            reply: {}
          },
          {
            id: 2,
            headImage: head3,
            name: '921****66',
            date: '2019-04-20',
            like: 28,
            content: '外形很漂亮，师傅很细心，安装技术很棒，认真仔细，细节也很注意。比如瓷砖也没...',
            photos: [
              {id: 0, image: main5},
              {id: 1, image: main6}
            ],
            reply: {
              begin: '官方回复：',
              content: '枕上诗书闲处好，门前风景雨来佳，说实话，我羡慕了 ㄟ(▔＾▔ㄟ)  感...'
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
  .xinfengji {
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
          height: 14.8rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 15.5rem;
        }
      }
      .img4 {
        img {
          width: 12.5rem;
          height: 22.2rem;
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