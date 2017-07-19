<template>
  <div class="banner">
    <!-- 广告 banner -->
    <template v-if="adImg">
      <div class="banner-bg ad" v-if="adImg">
        <img :src="adImg" alt="ad">
        <span>广告</span>
      </div>
    </template>
    <!-- 默认 banner -->
    <template v-else>
      <div class="banner-bg">
        <img src="../assets/img/promotion_bg.jpg" alt="cover">
      </div>
      <div class="content">
        <span class="title">{{title}}</span>
        <div class="button-wrapper">
          <span class="download">极速下载</span>
          <span class="open">打开</span>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'banner',
  props: {
      title: String,
      adImg: String
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
  .banner {
    position: relative;
    height: 1.4rem;
  }
  .banner img {
    max-width: 100%;
  }
  .banner-bg {
    position: absolute;
  }
  .ad span {
    position: absolute;
    right: 0;
    bottom: 0.08rem;
    padding: 0.08rem;
    font-size: 0.24rem;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.3);
  }
  .content {
    position: absolute;
    right: 0.2rem;
    left: 0.36rem;
    display: flex;
    height: 1.4rem;
    justify-content: space-between;
    align-items: center;
  }
  .content .title {
    padding-left: 0.36rem;
    font-size: 0.28rem;
    font-weight: normal;
    line-height: 0.44rem;
    color: #2CA532;
    display: inline-block;
    width: 1.68rem
  }
  .download, .open {
    display: inline-block;
    width: auto;
    padding: 0 0.28rem;
    font-size: 0.26rem;
    font-weight: bold;
    line-height: 2;
    border: 0.02rem solid #42bd56;
    border-radius: 0.06rem;
  }
  .download {
    color: #fff;
    background: #42bd56;
  }
  .open {
    color: #42bd56;
  }

</style>
