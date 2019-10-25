<template>
  <div class="xiaomi-mixalpha">
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

export default {
  name: 'xiaomi-mixalpha',
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
      product: {
        name: '小米MIX Alpha',
        information: '创新环绕屏，极具未来感的智能交互体验 / 1亿像素超高清相机，超大感光元件 / 5G双卡全网通超高速网络 / 骁龙855Plus旗舰处理器 / 纳米硅基锂离子4050mAh电池，40W超级快充 / 钛合金+精密陶瓷+蓝宝石镜片前沿工艺',
        price: '￥19999',
        choose: '小米MIX Alpha 黑色 512GB x 1',
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
            name: '三摄像头',
            value: '10800万+1200万+2000万像素'
          },
          {
            id: 2,
            image: img3,
            name: '超大屏',
            value: '7.92英寸'
          },
          {
            id: 3,
            image: img4,
            name: '屏幕分辨率',
            value: '2088x2250'
          },
          {
            id: 4,
            image: img5,
            name: '极速畅玩',
            value: '12GB'
          },
          {
            id: 5,
            image: img6,
            name: '存储容量',
            value: '512GB'
          },
          {
            id: 6,
            image: img7,
            name: '超长待机',
            value: '4050mAh'
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
    Choose
  }
}
</script>
<style lang="less" scoped>
  .xiaomi-mixalpha {
    position: relative;
    .images {
      font-size: 0;
      .img1 {
        img {
          width: 12.5rem;
          height: 12.2rem;
        }
      }
      .img2 {
        img {
          width: 12.5rem;
          height: 10.6rem;
        }
      }
      .img3 {
        img {
          width: 12.5rem;
          height: 24.9rem;
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