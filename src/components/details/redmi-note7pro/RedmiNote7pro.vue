<template>
  <div class="redmi-note7pro">
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

export default {
  name: 'redmi-note7pro',
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
        name: 'Redmi Note 7 Pro',
        information: '索尼4800万超清拍照 / 6GB+128GB大存储 / 骁龙675处理器 / 4000mAh大电量 / 18个月超长质保 / 6.3"水滴屏 / P2i整机防泼溅处理 / 标配18W充电器 / 德国莱茵 TÜV 认证护眼屏',
        extraInformation: '「6GB+128GB赠Redmi移动电源」',
        price: '￥1399',
        oldPrice: '￥1599',
        choose: 'Redmi Note 7 Pro 6GB+128GB 镜花水月 x 1',
        configurations: [
          {
            id: 0,
            image: img1,
            name: 'CPU',
            value: '骁龙675八核'
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
            name: '蔡云云',
            date: '2019-06-22',
            like: 382,
            content: '外形非常好看，超级棒，拍照非常的好看，小米的品质棒棒的，全家都是米粉',
            photos: [
              {id: 0, image: main1},
              {id: 1, image: main2}
            ],
            reply: {
              begin: '官方回复：',
              content: '态浓意远淑且真，肌理细腻骨肉匀。一千三百年后看，原是当今小米粉。感谢您...'
            }
          },
          {
            id: 1,
            headImage: head2,
            name: '陈金德',
            date: '2019-09-21',
            like: '',
            content: '我老婆喜欢它很酷秀，我有小米手机，支持你们小米公司，加油！',
            photos: [
              {id: 0, image: main3}
            ],
            reply: {
              begin: '官方回复：',
              content: '一声加油，将我们的舰船充满了能量，扬帆万里也不在话下。感谢您对小米的支...'
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
  .redmi-note7pro {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 23.5rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 8.56rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 5.2rem;
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