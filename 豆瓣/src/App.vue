<template>
  <div id="app">
    <div class="header-bar clear">
     <h1 class="title left">
      <router-link to="/">
       豆瓣
      </router-link>
     </h1>
    <span class="right search"><router-link to='/search'></router-link></span>
    <ul class="clear nav-bar right">
      <li><router-link to='/movie' style="color: #2384E8">电影</router-link></li>
      <li><router-link to='/book' style="color: #9F7860">图书</router-link></li>
      <li><router-link to='/status' style="color: #E4A813">广播</router-link></li>
      <li><router-link to='/group' style="color: #2AB8CC">小组</router-link></li>
    </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/js/font.js'
import './assets/css/base.css'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  methods:{
    ...mapActions([
      'getLocalUser',
      'getconments'
    ])
  },
  created(){
    this.getLocalUser(),
    this.getconments()
  }
}
</script>

<style>
.header-bar{
  border-bottom:1px solid #f3f3f3;
  height: 47px;
  padding: 0 18px;
  box-sizing:border-box;
  align-items:center;
  position: fixed;
  top:0;
  z-index: 999;
  background-color: #fff;
  width: 100%
}
.header-bar>h1{
  max-height:22px;
  max-width: 46px;
  background:url(./assets/img/douban.png) no-repeat;
  background-size:cover;
  margin-top: 12px;
  word-break: break-all
}
.search{
  width:24.57143px;
  height:18.28571px;
  background:url(./assets/img/search.png) no-repeat;
  background-size:cover;
  margin-top: 16px
}
.search a{
  display: inline-block;
  height: 100%;
  width: 100%
}
.header-bar>h1>a{
  color:#00b600;
  font-size: 0px;
  height:22px;
  width: 46px;
  display:block;
}
.nav-bar{
  line-height: 46px;
}
.nav-bar>li{
  float: left;
}
.nav-bar>li>a{
  font-size: 15px;
  margin-right:19px;
}
</style>
