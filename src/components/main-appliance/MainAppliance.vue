<template>
  <div class="main-appliance">
    <PictureDisplay
      :sliderWidth="sliderWidth"
      :sliderNumber="sliderNumber"
      :images="images"
      @giveOne="give2"
    />
    <div class="title"><img src="./photo2/title01.jpg" alt="尖货集结"></div>
    <ProductDisplay 
      :products="products" 
      style="background: rgb(146, 202, 219);"
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
import imgC from './photo1/03.jpg';

// 产品展示的图片
import img1 from './photo2/01.jpg';
import img2 from './photo2/02.jpg';
import img3 from './photo2/03.jpg';
import img4 from './photo2/04.jpg';
import img5 from './photo2/05.jpg';
import img6 from './photo2/06.jpg';

export default {
  name: 'main-appliance',
  data: function() {
    return {
      sliderNumber: 3, // 滑块的数量（即图片的数量）
      // 轮播图图片信息和路径
      images: [
        {id: 0, src: imgA, alt: 'Redmi波轮洗衣机1A'},
        {id: 1, src: imgB, alt: '米家洗烘一体机'},
        {id: 2, src: imgC, alt: '空调C1（大1匹/一级能效）'}
      ],
      // 产品信息
      products: [
        {
          id: 0,
          name: '米家新风机',
          information: '换气富氧，全效解决全屋空气问题',
          price: '￥2399',
          oldPrice: '￥2699',
          button: '立刻购买',
          src: img1,
          alt: '米家新风机',
        },
        {
          id: 1,
          name: 'Redmi波轮洗衣机1A',
          information: '8kg大容量，一键操作，父母都爱用',
          price: '￥699',
          oldPrice: '￥799',
          button: '立即购买',
          src: img2,
          alt: 'Redmi波轮洗衣机1A',
        },
        {
          id: 2,
          name: '空调C1（1.5匹/三级能效）',
          information: '出众静音，快速制冷热，出风干净',
          price: '￥1799',
          oldPrice: '￥1899',
          button: '立即购买',
          src: img3,
          alt: '空调C1（1.5匹/三级能效）',
        },
        {
          id: 3,
          name: '米家变频滚筒洗衣机1A',
          information: '8kg大容量，超薄机身，高效净衣',
          price: '￥1199',
          oldPrice: '￥1299',
          button: '立即购买',
          src: img4,
          alt: '米家变频滚筒洗衣机1A',
        },
        {
          id: 4,
          name: '空调C1（1.5匹/一级能效）',
          information: '变频节能省电，自清洁，高效制冷热',
          price: '￥2599',
          oldPrice: '￥2799',
          button: '立即购买',
          src: img5,
          alt: '空调C1（1.5匹/一级能效）',
        },
        {
          id: 5,
          name: '米家洗烘一体机',
          information: '智能烘干，高效净衣，省水省电',
          price: '￥1899',
          oldPrice: '￥2299',
          button: '立即购买',
          src: img6,
          alt: '米家洗烘一体机',
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