<template>
  <div class="main-tv">
    <PictureDisplay
      :sliderWidth="sliderWidth"
      :sliderNumber="sliderNumber"
      :images="images"
      @giveOne="give2"
    />
    <div class="title"><img src="./photo2/title.jpg" alt="尖货集结"></div>
    <ProductDisplay 
      :products="products" 
      style="background: rgb(239, 137, 115);"
      @sendOne="send2"
    />
  </div>
</template>
<script>
import PictureDisplay from '../picture-display/PictureDisplay.vue';
import ProductDisplay from '../product-display/ProductDisplay.vue';

// 把需要的图片先import进来
// 轮播图的图片
import imgA from './photo1/01.jpg';
import imgB from './photo1/02.jpg';

// 产品展示的图片
import img1 from './photo2/01.jpg';
import img2 from './photo2/02.jpg';
import img3 from './photo2/03.jpg';
import img4 from './photo2/04.jpg';
import img5 from './photo2/05.jpg';
import img6 from './photo2/06.jpg';

export default {
  name: 'main-tv',
  data: function() {
    return {
      sliderNumber: 2, // 滑块的数量（即图片的数量）
      // 图片信息和路径
      images: [
        {id: 0, src: imgA, alt: '电视4A 65英寸'},
        {id: 1, src: imgB, alt: '电视E32A'},
      ],
      // 产品信息
      products: [
        {
          id: 0,
          name: '小米电视4A 55英寸',
          information: '4K HDR，人工智能语音系统，超窄边设计',
          price: '￥1699',
          oldPrice: '￥1999',
          button: '立刻购买',
          src: img1,
          alt: '小米电视4A 55英寸',
        },
        {
          id: 1,
          name: '全面屏电视E32A',
          information: '全面屏设计，人工智能系统，内置小爱同学',
          price: '￥699',
          oldPrice: '￥1099',
          button: '立即购买',
          src: img2,
          alt: '全面屏电视E32A',
        },
        {
          id: 2,
          name: '小米电视4A 65英寸',
          information: '4K HDR，人工智能语音系统，超窄边设计',
          price: '￥2699',
          oldPrice: '￥2999',
          button: '立即购买',
          src: img3,
          alt: '小米电视4A 65英寸',
        },
        {
          id: 3,
          name: '小米电视4C 50英寸',
          information: '4K HDR，人工智能语音，超窄边钢琴烤漆',
          price: '￥1499',
          oldPrice: '￥1699',
          button: '立即购买',
          src: img4,
          alt: '小米电视4C 50英寸',
        },
        {
          id: 4,
          name: '小米电视4C 32英寸',
          information: '高清液晶屏，人工智能系统，64位处理器',
          price: '￥699',
          oldPrice: '￥799',
          button: '立即购买',
          src: img5,
          alt: '小米电视4C 32英寸',
        },
        {
          id: 5,
          name: '全面屏电视E43A',
          information: '全面屏设计，人工智能语音，内置小爱同学',
          price: '￥1299',
          oldPrice: '￥1999',
          button: '立即购买',
          src: img6,
          alt: '全面屏电视E43A',
        }
      ]
    }
  },
  computed: {
    // 滑块的宽度,等于屏幕宽度
    sliderWidth: function() {
      return document.body.clientWidth;
    }
  },
  methods: {
    // 继续向父组件传递点击事件，把图片alt信息继续作为参数进行传递
    give2: function(alt) {
      this.$emit('giveTwo', alt);
    },
    // 继续向父组件传递点击事件，把产品名称信息继续作为参数进行传递
    send2: function(name) {
      this.$emit('sendTwo', name);
    }
  },
  components: {
    PictureDisplay,
    ProductDisplay
  }
}
</script>
<style lang="less" scoped>
  .title {
    display: flex;
    flex-direction: column;
    img {
      width: 12.5rem;
      height: 1.66rem;
    }
  }
</style>