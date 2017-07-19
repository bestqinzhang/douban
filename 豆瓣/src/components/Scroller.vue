<template>
  <div class="scroller">
    <div class="header">
      <h2>{{title}}</h2>
      <router-link :to="'/allitem/'+rbq" v-if="rbq">更多</router-link>
      <a href="#" v-else>更多</a>
    </div>
    <div class="content">
    <slot name="promItem"></slot>
      <ul class="hasCover" v-if="type === 'hasCover'">
        <li v-for="item in datas">
          <router-link :to="'subject/' + item.id" append>
            <img v-if="item.images" :src="item.images.large" alt="">
            <span class="title">{{item.title}}</span>
            <rating v-if="item.rating" :rating="item.rating"></rating>
          </router-link>
        </li>
      </ul>
      <ul class="onlyString" v-if="type === 'onlyString'">
        <li v-for="item in datas" style="border-color: #FFAC2D;">
          <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Rating from './Rating'
// import Vue from 'vue'
// import Swiper from 'vue-swiper'

export default {
  name: 'scroller',
  props: ['title', 'type', 'datas','rbq'],
  components: { Rating },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.scroller {
  padding-top: 0.2rem;
}
.header {
  height: 0.52rem;
  line-height: 0.52rem;
  padding: 0 0.32rem;
  margin-bottom: 0.1rem;
  color:rgb(17,17,17);
}
.header a {
  float: right;
  font-size: 0.288rem;
  color: #42bd56
}
.header h2 {
  font-weight: normal;
  font-size: 0.34rem;
  display: inline-block;
}
.content {
  box-sizing: content-box;
}
.content ul {
  padding: 0.16rem 0;
}
.hasCover {
  overflow-x: auto;
  white-space: nowrap;
  text-align: center;
}
.hasCover .title {
  display: block;
  max-width: 100%;
  margin-top: 0.2rem;
  line-height: 0.3rem;
  font-size: 0.3rem;
  color: #111;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.hasCover li {
  display: inline-block;
  width: 2rem;
  margin-left: 0.2rem;
}

.hasCover li:first-child {
  padding-left: 0.1rem;
}

.hasCover img {
  height: 2.9rem;
}
.onlyString {
  overflow-x: auto;
  white-space: nowrap;
}
.onlyString li {
  display: inline-block;
  margin: 0 0 0.16rem 0.32rem;
  font-size: 0.32rem;
  border: solid 0.02rem;
  border-radius: 0.08rem;
  vertical-align: middle;
}

.onlyString  a {
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.48rem;
  letter-spacing: 0.032rem;
  overflow: auto;
  display: block;
  text-align: center;
}
/*empty 选择器 指空的li的背景色*/
.onlyString li:empty {
  width: 100%;
  display: block;
  height: 0.02rem;
  border: 0;
  margin: 0;
}
/*因为有个空的li*/
</style>
