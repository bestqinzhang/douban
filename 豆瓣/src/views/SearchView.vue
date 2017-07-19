<template>
  <div class="search-view">
    <a href="javascript:history.go(-1);" class="close-view">关闭</a>
    <form class="search-form" onsubmit="return false">
      <input type="search" name="search"  @keyup.13="search()" placeholder="">
    </form>
    <ul class="ul-item">
      <li>
        <div>
          <a href="#">
            <strong style="color: rgb(35, 132, 232);">电影</strong>
            <span>影院热映</span>
          </a>
          <a href="#">
            <strong style="color: rgb(230, 70, 126);">同城</strong>
            <span>周末活动</span>
          </a>
          <a href="#">
            <strong style="color: rgb(159, 120, 96);">阅读</strong>
            <span>电子书</span>
          </a>
          <a href="#">
            <strong style="color: rgb(225, 100, 77);">东西</strong>
            <span>心爱之物</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="#">
            <strong style="color: rgb(122, 106, 219);">电视</strong>
            <span>正在热播</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(42, 184, 204);">小组</strong>
            <span>志趣相投</span>
          </a>
          <a href="#">
            <strong style="color: rgb(87, 116, 197);">游戏</strong>
            <span>虚拟世界</span>
          </a>
          <a href="#">
            <strong style="color: rgb(64, 207, 169);">FM</strong>
            <span>红心歌单</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="#">
            <strong style="color: rgb(159, 120, 96);">图书</strong>
            <span>畅销排行</span>
          </a>
          <a href="#">
            <strong style="color: rgb(244, 143, 46);">音乐</strong>
            <span>新碟榜</span>
          </a>
          <a href="#">
            <strong style="color: rgb(89, 108, 221);">应用</strong>
            <span>玩手机</span>
          </a>
          <a href="#">
            <strong style="color: rgb(66, 189, 86);">市集</strong>
            <span>购买原创</span>
          </a>
        </div>
      </li>
    </ul>
    <div class="b-nav">
      <div class="nav-item">
        <template v-if="SUserName">
          <a href="javascript:;">{{SUserName}}</a>
          <a href="javascript:;" @click="logout">退出豆瓣</a>
          <!-- <router-link :to="'/login'" @click="logout">退出豆瓣</router-link> -->
        </template>
        <template v-else>
          <router-link :to="'/register'">注册帐号</router-link>
          <router-link :to="'/login'">登录豆瓣</router-link>
        </template>
      </div>
      <div class="nav-item">
        <a href="https://movie.douban.com/">使用桌面版</a>
        <a href="https://itunes.apple.com/cn/app/dou-ban/id907002334">使用豆瓣app</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  name: 'search-view',
  data () {
    return {}
  },
  methods: {},
  methods:{
    ...mapActions([
        'logout'
    ]),
    search:function (ev) {
        alert(1)
    }
  },
  computed: {
     ...mapState({
       SUserName : state => state.user.SUserName,
       SUserPass : state => state.user.SUserPass
    })
  }
}
</script>
<style scpoed>
.search-view{
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 999;
}
.close-view {
  color: #42bd56;
  font-size: 0.32rem;
  position:absolute;
  top:20px;
  left:18px;
}
.search-form {
  width: 100%;
  height: 1.24rem;
  padding:0.3rem 0.36rem 0.3rem 1.2rem;
  box-sizing: border-box;
  border-bottom: 0.02rem solid #f3f3f3;
}
.search-form input{
  border: 0;
  background: url(../assets/img/search2.png) no-repeat 50% #f3f3f3;
  background-size: 0.346rem;
  border-radius: 0.06rem;
  width: 100%;
  height: 100%;
  font-size: 0.28rem;
}
.search-form input:focus {
  background: #f3f3f3;
}
.ul-item {
  display: flex;
  justify-content: space-around;
  padding-top: 0.5rem;
}
.ul-item li {
  width: 33.33%;
}

.ul-item li div {
  position: relative;
  float: left;
  left: 50%;
  top: 0;
}

li div a {
  position: relative;
  left: -50%;
  top: 0;
  display: block;
  margin-bottom: 0.5rem;
  text-align: center;
}

li a strong {
  display: block;
  font-weight: 400;
  font-size: 0.48rem;
  line-height: 0.56rem;
}

li a span {
  display: block;
  color: #999;
  height: 0.34rem;
  font-size: 0.24rem;
  letter-spacing: 0.02rem;
}
.b-nav{
  width: 100%;
  border-bottom: 0.02rem solid #f3f3f3;
}
.nav-item {
  border-top: 0.02rem solid #f3f3f3;
  padding: 0.26rem 0;
  text-align: center;
}
.nav-item a {
  width: 49%;
  display: inline-block;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 0.3rem;
  color: #42bd56;
}
.nav-item a:first-child{
  border-right: 0.02rem solid #e5e5e5
}
</style>
