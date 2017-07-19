<template>
  <div class="home-view">
    <div class="four-nav">
      <ul class="four-nav-ul">
        <li>
          <router-link to='/movie'>影院热映</router-link>
        </li>
        <li>
          <router-link to='/group'>华语新碟榜</router-link>
        </li>
        <li>
          <a href="#">注册帐号</a>
        </li>
        <li>
          <a href="#">登录豆瓣</a>
        </li>
      </ul>
    </div>
    <Listitem v-for='(item,index) in events' :datas='item' key='index'></Listitem>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <Loading slot="spinner"></Loading>
    </infinite-loading>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Listitem from '../components/Listitem'
import Loading from '../components/Loading'
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'home-view',
  data () {
    return {

    }
  },
  components:{
    Listitem,
    InfiniteLoading,
    Loading
  },
  computed: {
    //从仓库里面获取数据
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    // 使用 vue-infinite-loading
    onInfinite () {
      setTimeout(() => {
        this.getevent()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    // 把方法从仓库拿出来
    ...mapActions([
      'getevent'
    ])
  },

}
</script>
<style scoped>
 .home-view{
  margin-top: 67px;
 }
 .four-nav-ul{
  overflow: hidden;
  margin: 0.4rem 0 0 0;
  padding: 0.12rem 0.4rem 0 0.4rem;
 }
 .four-nav-ul>li{
  float: left;
  width: 50%;
  padding: 0.06rem;
  box-sizing: border-box;
  font-size: 0.3rem;
 }
.four-nav-ul>li a{
  display: block;
  max-width: 100%;
  padding: 0.24rem 0;
  line-height: 0.4rem;
  text-align: center;
  background-color: #f6f6f6;
  color: #494949;
  border-radius: 0.04rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
 }
</style>
