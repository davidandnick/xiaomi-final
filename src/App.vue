<template>
  <div id="app">
    <Wrap @giveThree="showAlt" @sendThree="showName"/>
    <!-- 具体产品界面 -->
    <RedmiNote8 class="product" v-if="redmiNote8" @back="getBack"/>
    <RedmiNote8pro class="product" v-if="redmiNote8pro" @back="getBack"/>
    <Redmi7 class="product" v-if="redmi7" @back="getBack"/>
    <XiaomiMixAlpha class="product" v-if="xiaomiMixAlpha" @back="getBack"/>
    <XiaomiMix3 class="product" v-if="xiaomiMix3" @back="getBack"/>
    <RedmiNote7 class="product" v-if="redmiNote7" @back="getBack"/>
    <RedmiNote7pro class="product" v-if="redmiNote7pro" @back="getBack"/>
    <Tv4A55 class="product" v-if="tv4A55" @back="getBack"/>
    <TvE32A class="product" v-if="tvE32A" @back="getBack"/>
    <Tv4A65 class="product" v-if="tv4A65" @back="getBack"/>
    <Tv4C50 class="product" v-if="tv4C50" @back="getBack"/>
    <Tv4C32 class="product" v-if="tv4C32" @back="getBack"/>
    <TvE43A class="product" v-if="tvE43A" @back="getBack"/>
    <Notebook156 class="product" v-if="notebook156" @back="getBack"/>
    <Notebook156proGTX class="product" v-if="notebook156proGTX" @back="getBack"/>
    <Redmibook14 class="product" v-if="redmibook14" @back="getBack"/>
    <Notebook156pro class="product" v-if="notebook156pro" @back="getBack"/>
    <Notebook125air class="product" v-if="notebook125air" @back="getBack"/>
    <Notebook133air class="product" v-if="notebook133air" @back="getBack"/>
    <XinFengJi class="product" v-if="xinFengJi" @back="getBack"/>
    <XiyijiRedmi1A8kg class="product" v-if="redmi1A" @back="getBack"/>
    <KongTiaoC1 class="product" v-if="kongTiaoC1" @back="getBack"/>
    <Xiyiji1A8kg class="product" v-if="xiyiji1A8kg" @back="getBack"/>
    <KongTiao1C1 class="product" v-if="kongTiao1C1" @back="getBack"/>
    <XiHongJi class="product" v-if="xiHongJi" @back="getBack"/>
  </div>
</template>

<script>
import Wrap from './components/wrap/Wrap.vue';
import RedmiNote8 from './components/details/redmi-note8/RedmiNote8.vue';
import RedmiNote8pro from './components/details/redmi-note8pro/RedmiNote8pro.vue';
import Redmi7 from './components/details/redmi-7/Redmi7.vue';
import Xiaomi9pro5g from './components/details/xiaomi-9pro5g/Xiaomi9pro5g.vue';
import XiaomiMixAlpha from './components/details/xiaomi-mixalpha/XiaomiMixAlpha.vue';
import XiaomiMix3 from './components/details/xiaomi-mix3/XiaomiMix3.vue';
import RedmiNote7 from './components/details/redmi-note7/RedmiNote7.vue';
import RedmiNote7pro from './components/details/redmi-note7pro/RedmiNote7pro.vue';
import Tv4A55 from './components/details/tv-4A55/Tv4A55.vue';
import TvE32A from './components/details/tv-E32A/TvE32A.vue';
import Tv4A65 from './components/details/tv-4A65/Tv4A65.vue';
import Tv4C50 from './components/details/tv-4C50/Tv4C50.vue';
import Tv4C32 from './components/details/tv-4C32/Tv4C32.vue';
import TvE43A from './components/details/tv-E43A/TvE43A.vue';
import Notebook156 from './components/details/notebook156/Notebook156.vue';
import Notebook156proGTX from './components/details/notebook156proGTX/Notebook156proGTX.vue';
import Redmibook14 from './components/details/redmibook14/Redmibook14.vue';
import Notebook156pro from './components/details/notebook156pro/Notebook156pro.vue';
import Notebook125air from './components/details/notebook125air/Notebook125air.vue';
import Notebook133air from './components/details/notebook133air/Notebook133air.vue';
import XinFengJi from './components/details/xinfengji/XinFengJi.vue';
import XiyijiRedmi1A8kg from './components/details/xiyiji-redmi1A8kg/XiyijiRedmi1A8kg.vue';
import KongTiaoC1 from './components/details/kongtiaoC1/KongTiaoC1.vue';
import Xiyiji1A8kg from './components/details/xiyiji-1A8kg/Xiyiji1A8kg.vue';
import KongTiao1C1 from './components/details/kongtiao1C1/KongTiao1C1.vue';
import XiHongJi from './components/details/xihongji/XiHongJi.vue';

export default {
  name: 'app',
  data: function() {
    return {
      // 商品信息界面的初始状态
      redmiNote8: false,
      redmiNote8pro: false,
      redmi7: false,
      redmi1A: false,
      xiHongJi: false,
      kongTiao1C1: false,
      tv4A65: false,
      tvE32A: false,
      redmibook14: false,
      notebook156: false,
      notebook156proGTX: false,
      notebook156pro: false,
      notebook125air: false,
      notebook133air: false,
      tv4A55: false,
      tv4C50: false,
      tv4C32: false,
      tvE43A: false,
      xinFengJi: false,
      kongTiaoC1: false,
      xiyiji1A8kg: false,
      xiaomiMixAlpha: false,
      xiaomiMix3: false,
      redmiNote7: false,
      redmiNote7pro: false
    }
  },
  methods: {
    // 判断最终传递所点击轮播图图片的alt信息，同时显示对应的产品信息页面
    showAlt: function(alt) {
      if (alt === '红米note8') {
        this.redmiNote8 = true;
      }
      if (alt === '红米note8pro') {
        this.redmiNote8pro = true;
      }
      if (alt === '红米7') {
        this.redmi7 = true;
      }
      if (alt === 'Redmi波轮洗衣机1A') {
        this.redmi1A = true;
      }
      if (alt === '米家洗烘一体机') {
        this.xiHongJi = true;
      }
      if (alt === '空调C1（大1匹/一级能效）') {
        this.kongTiao1C1 = true;
      }
      if (alt === '电视4A 65英寸') {
        this.tv4A65 = true;
      }
      if (alt === '电视E32A') {
        this.tvE32A = true;
      }
      if (alt === 'RedmiBook 14 增强版') {
        this.redmibook14 = true;
      }
    },
    // 判断最终传递所点击产品名称的信息，同时显示对应的产品信息页面
    showName: function(name) {
      if (name === '小米笔记本15.6') {
        this.notebook156 = true;
      }
      if (name === 'Pro 15.6 GTX版') {
        this.notebook156proGTX = true;
      }
      if (name === 'RedmiBook 14') {
        this.redmibook14 = true;
      }
      if (name === 'Pro 15.6 MX250独显版') {
        this.notebook156pro = true;
      }
      if (name === 'Air 12.5 2019款') {
        this.notebook125air = true;
      }
      if (name === 'Air 13.3 2019款') {
        this.notebook133air = true;
      }
      if (name === '小米电视4A 55英寸') {
        this.tv4A55 = true;
      }
      if (name === '全面屏电视E32A') {
        this.tvE32A = true;
      }
      if (name === '小米电视4A 65英寸') {
        this.tv4A65 = true;
      }
      if (name === '小米电视4C 50英寸') {
        this.tv4C50 = true;
      }
      if (name === '小米电视4C 32英寸') {
        this.tv4C32 = true;
      }
      if (name === '全面屏电视E43A') {
        this.tvE43A = true;
      }
      if (name === '米家新风机') {
        this.xinFengJi = true;
      }
      if (name === 'Redmi波轮洗衣机1A') {
        this.redmi1A = true;
      }
      if (name === '空调C1（1.5匹/三级能效）') {
        this.kongTiaoC1 = true;
      }
      if (name === '米家变频滚筒洗衣机1A') {
        this.xiyiji1A8kg = true;
      }
      if (name === '空调C1（1.5匹/一级能效）') {
        this.kongTiao1C1 = true;
      }
      if (name === '米家洗烘一体机') {
        this.xiHongJi = true;
      }
      if (name === '小米MIX Alpha') {
        this.xiaomiMixAlpha = true;
      }
      if (name === 'Redmi Note 8 Pro') {
        this.redmiNote8pro = true;
      }
      if (name === 'Redmi Note 8') {
        this.redmiNote8 = true;
      }
      if (name === '小米MIX 3') {
        this.xiaomiMix3 = true;
      }
      if (name === 'Redmi Note 7') {
        this.redmiNote7 = true;
      }
      if (name === 'Redmi Note 7 Pro') {
        this.redmiNote7pro = true;
      }
    },
    // 点击产品页面的返回图案时，使页面消失
    getBack: function() {
      this.redmiNote8 = false;
      this.redmiNote8pro = false;
      this.redmi7 = false;
      this.redmi1A = false;
      this.xiHongJi = false;
      this.kongTiao1C1 = false;
      this.tv4A65 = false;
      this.tvE32A = false;
      this.redmibook14 = false;
      this.notebook156 = false;
      this.notebook156proGTX = false;
      this.notebook156pro = false;
      this.notebook125air = false;
      this.notebook133air = false;
      this.tv4A55 = false;
      this.tv4C50 = false;
      this.tv4C32 = false;
      this.tvE43A = false;
      this.xinFengJi = false;
      this.kongTiaoC1 = false;
      this.xiyiji1A8kg = false;
      this.xiaomiMixAlpha = false;
      this.xiaomiMix3 = false;
      this.redmiNote7 = false;
      this.redmiNote7pro = false;
    }
  },
  components: {
    Wrap,
    RedmiNote8,
    RedmiNote8pro,
    Redmi7,
    Xiaomi9pro5g,
    XiaomiMixAlpha,
    XiaomiMix3,
    RedmiNote7,
    RedmiNote7pro,
    Tv4A55,
    TvE32A,
    Tv4A65,
    Tv4C50,
    Tv4C32,
    TvE43A,
    Notebook156,
    Notebook156proGTX,
    Redmibook14,
    Notebook156pro,
    Notebook125air,
    Notebook133air,
    XinFengJi,
    XiyijiRedmi1A8kg,
    KongTiaoC1,
    Xiyiji1A8kg,
    KongTiao1C1,
    XiHongJi
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  .product {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    background: white;
  }
}
</style>
