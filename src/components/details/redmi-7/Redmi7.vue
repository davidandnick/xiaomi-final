<template>
  <div class="redmi-7">
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

export default {
  name: 'redmi-7',
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
        name: 'Redmi 7',
        information: '4000mAh大电量 / 骁龙632八核处理器 / 6.26"水滴全面屏，德国莱茵 TÜV 认证护眼屏 / 18个月超长质保，康宁第五代大猩猩玻璃盖板 / 支持大字体、大音量模式，收音机、红外遥控功能 / 1200万AI双摄，1.25μm大像素相机',
        extraInformation: '「3GB+32GB，直降100，到手价699元」',
        price: '￥699',
        oldPrice: '￥799',
        choose: 'Redmi 7 3GB+32GB 亮黑色  x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: 'CPU',
            value: '骁龙632八核'
          },
          {
            id: 1,
            image: img2,
            name: '双摄像头',
            value: '1200万+200万像素'
          },
          {
            id: 2,
            image: img3,
            name: '超大屏',
            value: '6.26英寸'
          },
          {
            id: 3,
            image: img4,
            name: '屏幕分辨率',
            value: '1520×720'
          },
          {
            id: 4,
            image: img5,
            name: '流畅',
            value: '3GB'
          },
          {
            id: 5,
            image: img6,
            name: '存储容量',
            value: '32GB'
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
            name: '菜菜',
            date: '2019-06-24',
            like: 73,
            content: '手感不错，老婆很喜欢。',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2}
            ],
            reply: {
              begin: '官方回复：',
              content: '北方有佳人，绝世而独立。一顾倾人城，再顾倾人国。 任由岁月苍茫，汝心佳...'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: 'Smile、陌离',
            date: '2019-07-29',
            like: 31,
            content: '太好看了，快递也很快，就试了一下，拍照还不错，一直支持小米❤❤',
            photos: [
              {id: 0, image: main3},
              {id: 1, image: main4}
            ],
            reply: {
              begin: '官方回复：',
              content: '天空中有你我最喜爱的颜色，现实中有你我最相配的角色。白云依靠着蓝天，蓝...'
            }
          },
          {
            id: 2,
            headImage: head3,
            name: '外圆内方1986',
            date: '2019-06-24',
            like: 71,
            content: '手感很好，屏幕够大，运行也快，特别是电池可以用几天了，比其他品牌同等配置要...',
            photos: [
              {id: 0, image: main5}
            ],
            reply: {
              begin: '官方回复：',
              content: '不做“无实惠尽是虚桩，充饥画饼诚堪笑”之事。感谢您对小米的支持'
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
  .redmi-7 {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 8.76rem;
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
          height: 11.2rem;
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