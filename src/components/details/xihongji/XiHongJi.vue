<template>
  <div class="xihongji">
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
  name: 'xihongji',
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
        name: '米家互联网洗烘一体机10kg',
        information: '8kg大容量 / 超薄设计 / 10种专业洗涤模式 / 15分钟快速洗 /高温筒自洁，99.99%除菌率 / BLDC变频电机，一级能效，省水省电',
        extraInformation: '',
        price: '￥1999',
        oldPrice: '￥2299',
        choose: '米家互联网洗烘一体机10Kg 白色 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: '洗涤容量',
            value: '10kg'
          },
          {
            id: 1,
            image: img2,
            name: '尺寸',
            value: '598*650*850'
          },
          {
            id: 2,
            image: img3,
            name: '电机类型',
            value: 'BLDC变频'
          },
          {
            id: 3,
            image: img4,
            name: '烘干容量',
            value: '6kg'
          },
          {
            id: 4,
            image: img5,
            name: '排水方式',
            value: '上排水'
          }
        ],
        comments: [
          {
            id: 0,
            headImage: head1,
            name: '追梦',
            date: '2019-06-24',
            like: 30,
            content: '洗衣机收到了，首先外观很好看，希望用着也一样好，这里特别说一下小米的售后工..',
            photos: [
              {id: 0, image: main1}
            ],
            reply: {
              begin: '官方回复：',
              content: '这都是我们应该做的，您用着放心，我们服务也开心。感谢您对小米的支持'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: '清',
            date: '2019-06-23',
            like: 81,
            content: '第一次在网上购洗衣机，第一次就这样献给了小米，对着第一次我很满意，小米没有...',
            photos: [
              {id: 0, image: main2},
              {id: 1, image: main3}
            ],
            reply: {
              begin: '官方回复：',
              content: '永远相信美好的事情即将发生——其实也不费电哦~感谢您对小米的支持'
            }
          },
          {
            id: 2,
            headImage: head3,
            name: 'Gnosis',
            date: '2019-06-21',
            like: 46,
            content: '非常有现代感，科技感十足，普通薄的衣服15分钟妥妥洗好，安装师傅也很认真专...',
            photos: [
              {id: 0, image: main4},
              {id: 1, image: main5}
            ],
            reply: {
              begin: '官方回复：',
              content: '你相信吗，未来的事会在现在发生~感谢您对小米的支持'
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
  .xihongji {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 10.5rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 9.6rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 9.66rem;
        }
      }
      .img4 {
        img {
          width: 12.5rem;
          height: 13.6rem;
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