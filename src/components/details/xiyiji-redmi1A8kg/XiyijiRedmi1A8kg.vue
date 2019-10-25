<template>
  <div class="xiyiji-redmi1A8kg">
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
  name: 'xiyiji-redmi1A8kg',
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
        name: 'Redmi全自动波轮洗衣机1A 8kg',
        information: '8kg大容量 / 10种洗涤模式 / 10挡水位调节 / 耐腐蚀金属机身 / 桶自洁、桶风干模式避免细菌滋生 / 空气阻尼减震 / 免运费及基础安装费',
        extraInformation: '「10月1日-10月8日十一狂欢购，到手价仅699元」',
        price: '￥699',
        oldPrice: '￥799',
        choose: 'Redmi全自动波轮洗衣机 1A 8kg 白色 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: '洗涤容量',
            value: '8kg'
          },
          {
            id: 1,
            image: img2,
            name: '尺寸',
            value: '545*575*944'
          },
          {
            id: 2,
            image: img3,
            name: '排水方式',
            value: '下排水'
          },
          {
            id: 3,
            image: img4,
            name: '电机类型',
            value: '普通'
          }
        ],
        comments: [
          {
            id: 0,
            headImage: head1,
            name: '杨海玮',
            date: '2019-06-24',
            like: 105,
            content: '做工完美，这个价格很实惠。里面有一个功能是我超喜欢的，就是洗完衣服后会自动...',
            photos: [
              {id: 0, image: main1}
            ],
            reply: {
              begin: '官方回复：',
              content: '借楼问一下，这么好的男人，请问到哪里去找啊？感谢您对小米的支持~'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: '129*****26',
            date: '2019-06-24',
            like: 51,
            content: '洗衣机很好，声音也低。',
            photos: [
              {id: 0, image: main2}
            ],
            reply: {
              begin: '官方回复：',
              content: '我爱的静悄悄，我该怎么往下聊，全都怪我太胆小，只会看着你傻笑~感谢您对...'
            }
          },
          {
            id: 2,
            headImage: head3,
            name: '其实很美好',
            date: '2019-07-29',
            like: 27,
            content: '整体感觉非常的大气，功能很实用。',
            photos: [
              {id: 0, image: main3},
              {id: 1, image: main4},
              {id: 2, image: main5}
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
  .xiyiji-redmi1A8kg {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 7.7rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 14.6rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 13.1rem;
        }
      }
      .img4 {
        img {
          width: 12.5rem;
          height: 9.36rem;
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