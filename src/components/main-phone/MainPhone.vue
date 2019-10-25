<template>
  <div id="main-phone">
    <PictureDisplay
      :sliderWidth="sliderWidth"
      :sliderNumber="sliderNumber"
      :images="images"
      @giveOne="give2"
    />
    <DividerLine/>
    <ProductDisplay 
      :products="products"
      @sendOne="send2"
    />
    <DividerLine/>
  </div>
</template>
<script>
import PictureDisplay from '../picture-display/PictureDisplay.vue';
import DividerLine from '../divider-line/DividerLine.vue';
import ProductDisplay from '../product-display/ProductDisplay.vue';

// 把需要的图片先import进来
// 轮播图的图片
import imgA from './photo1/01.jpg';
import imgB from './photo1/02.jpg';
import imgC from './photo1/03.jpg';

// 产品展示的图片
import img1 from './photo2/01.jpg';
import img2 from './photo2/02.jpg';
import img3 from './photo2/03.jpg';
import img4 from './photo2/04.jpg';
import img5 from './photo2/05.jpg';
import img6 from './photo2/06.jpg';

export default {
  name: 'main-phone',
  data: function() {
    return {
      sliderNumber: 3, // 滑块的数量（即图片的数量）
      // 轮播图图片信息和路径
      images: [
        {id: 0, src: imgA, alt: '红米note8'},
        {id: 1, src: imgB, alt: '红米note8pro'},
        {id: 2, src: imgC, alt: '红米7'}
      ],
      // 产品信息
      products: [
        {
          id: 0,
          name: '小米MIX Alpha',
          information: '5G环绕屏概念手机',
          price: '￥19999',
          button: '敬请期待',
          src: img1,
          alt: '小米MIX Alpha'
        },
        {
          id: 1,
          name: 'Redmi Note 8 Pro',
          information: '6400万全场景四摄',
          price: '￥1399起',
          button: '立即购买',
          src: img2,
          alt: 'Redmi Note 8 Pro'
        },
        {
          id: 2,
          name: 'Redmi Note 8',
          information: '千元4800万四摄',
          price: '￥999起',
          button: '立即购买',
          src: img3,
          alt: 'Redmi Note 8'
        },
        {
          id: 3,
          name: '小米MIX 3',
          information: 'DxO百分拍照手机',
          price: '￥2599',
          oldPrice: '￥3599',
          button: '立即购买',
          src: img4,
          alt: '小米MIX 3'
        },
        {
          id: 4,
          name: 'Redmi Note 7',
          information: '4800万拍照 长续航',
          price: '￥1099',
          oldPrice: '￥1399',
          button: '立即购买',
          src: img5,
          alt: 'Redmi Note 7'
        },
        {
          id: 5,
          name: 'Redmi Note 7 Pro',
          information: '索尼4800万超清拍照',
          price: '￥1399',
          oldPrice: '￥1599',
          button: '立即购买',
          src: img6,
          alt: 'Redmi Note 7 Pro'
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
    DividerLine,
    ProductDisplay,
  }
}
</script>
<style lang="less" scoped>
  #main-phone {
    background: rgb(230, 231, 251);
  }
</style>