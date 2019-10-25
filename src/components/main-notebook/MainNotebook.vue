<template>
  <div class="main-notebook">
    <PictureDisplay
      :sliderWidth="sliderWidth"
      :sliderNumber="sliderNumber"
      :images="images"
      @giveOne="give2"
    />
    <div class="title"><img src="./photo2/title01.jpg" alt="人群购机指南"></div>
    <div class="title"><img src="./photo2/title02.jpg" alt="米粉最爱Top5"></div>
    <ProductDisplay 
      :products="products" 
      style="background: rgb(207, 48, 67);"
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

// 产品展示的图片
import img1 from './photo2/01.jpg';
import img2 from './photo2/02.jpg';
import img3 from './photo2/03.jpg';
import img4 from './photo2/04.jpg';
import img5 from './photo2/05.jpg';
import img6 from './photo2/06.jpg';

export default {
  name: 'main-notebook',
  data: function() {
    return {
      sliderNumber: 1, // 滑块的数量（即图片的数量）
      // 图片信息和路径
      images: [
        {id: 0, src: imgA, alt: 'RedmiBook 14 增强版'},
      ],
      // 产品信息
      products: [
        {
          id: 0,
          name: '小米笔记本15.6',
          information: '全面均衡的国民轻薄本',
          price: '￥2799起',
          oldPrice: '￥3399',
          button: '立刻购买',
          src: img1,
          alt: '小米笔记本15.6',
        },
        {
          id: 1,
          name: 'Pro 15.6 GTX版',
          information: '更强悍的专业笔记本',
          price: '￥6299起',
          button: '立即购买',
          src: img2,
          alt: 'Pro 15.6 GTX版',
        },
        {
          id: 2,
          name: 'RedmiBook 14',
          information: '增强版酷睿™ 轻薄便携长续航',
          price: '￥3199起',
          button: '立即购买',
          src: img3,
          alt: 'RedmiBook 14',
        },
        {
          id: 3,
          name: 'Pro 15.6 MX250独显版',
          information: 'MX250独立显卡 全金属强化机身',
          price: '￥5899起',
          button: '立即购买',
          src: img4,
          alt: 'Pro 15.6 MX250独显版',
        },
        {
          id: 4,
          name: 'Air 12.5 2019款',
          information: '全金属机身，极简设计，像杂志般便携',
          price: '￥3599起',
          button: '立即购买',
          src: img5,
          alt: 'Air 12.5 2019款',
        },
        {
          id: 5,
          name: 'Air 13.3 2019款',
          information: '独立显卡 指纹解锁',
          price: '￥4699起',
          oldPrice: '￥4999',
          button: '立即购买',
          src: img6,
          alt: 'Air 13.3 2019款',
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
      height: 1.73rem;
    }
  }
</style>