<template>
  <div class="subject-view" :watchlook="watchlook" :getcom="getcom" >
    <template v-if="prprpr">
      <banner title="用 App 打开 查看影人相册"></banner>
      <div class="subject-card">
         <h1 class="title">{{subject.title}}</h1>
         <div class="subject-info">
           <div class="right">
              <a href="#">
                <img v-if="subject.images" :src="subject.images.large" alt="cover">
              </a>
            </div>
               <div class="left" v-if="subject.rating">
                <rating :rating="subject.rating">
                  <span slot="ratingsCount">{{subject.ratings_count}}人评价</span>
                </rating>
                <template v-if="subject.genres && subjectMeta">
                  <p class="meta">{{subjectMeta}}</p>
                  <a href="#" class="open-app">用App查看影人资料</a>
                </template>
                <template v-if="subject.author && subjectMeta">
                  <p class="meta">{{subjectMeta}}</p>
                  <a href="#" class="buy">在豆瓣购买</a>
              </template>
            </div>
         </div>
         <marking v-if="msg">
            <template slot="book" v-if="subject.author">
              <a href="javascript:;" @click="Commentary">想读</a>
              <a href="javascript:;" @click="Commentary">在读</a>
              <a href="javascript:;" @click="Commentary">读过</a>
            </template>
            <template slot="movie" v-else >
              <button
              class="btn-comment"
              @click="Commentary1"
              :disabled="isDisabled2"
              :class="{disabled: isDisabled2}"
              :name="'wish'">
              {{this.LookBtn[0]}}
              </button>
              <button
              class="btn-comment"
              @click="Commentary2"
              :disabled="isDisabled"
              :class="{disabled: isDisabled}"
              :name="'collect'" >
              {{this.LookBtn[1]}}
              </button>
            </template>
          </marking>
         <marking v-else>
            <template slot="book" v-if="subject.author">
              <router-link :to="'/login'">想读</router-link>
              <router-link :to="'/login'">在读</router-link>
              <router-link :to="'/login'">读过</router-link>
            </template>
            <template slot="movie" v-else>
              <router-link :to="'/login'">想看</router-link>
              <router-link :to="'/login'">看过</router-link>
            </template>
          </marking>
          <div class="con-box" v-if="singe.look">
            <h2 class="con-tit">{{this.Looktype}}</h2>
            <p class="con-txt">
            {{this.singe.content}}
            （<a href="javascript:" style="color:#42bd56" @click="Commentary3">修改</a>
              <a href="javascript:" style="color:#42bd56"@click="delt">删除</a>）
            </p>
          </div>
          <div class="subject-intro">
            <h2>{{subject.title}}的简介</h2>
            <p>
              <template v-if="summary && subject.summary">
                {{isExpand ? summary : subject.summary}}……
              </template>
              <a href="javascript:;" v-show="isExpand" v-on:click="expand">
                (展开)
              </a>
            </p>
          </div>
          <div class="genres">
            <h2>查看更多相关分类</h2>
            <template v-if="genres">
              <tags :items="genres"></tags>
            </template>
          </div>
          <div class="subject-pics">
            <h2>{{subject.title}}的图片</h2>
            <ul v-if="subject.images">
              <li class="pic">
                <a href="#">
                  <img :src="subject.images.large" alt="poster">
                </a>
              </li>
              <li class="pic">
                <a href="#">
                  <img :src="subject.images.large" alt="poster">
                </a>
              </li>
              <li class="pic">
                <a href="#">
                  <img :src="subject.images.large" alt="poster">
                </a>
              </li>
            </ul>
          </div>
      </div>
     <div class="subject-comments" :getcom="getcom">
        <h2>{{subject.title}}的短评</h2>
        <div class="content-list">
          <card mold="comment" v-for="(item,index) in items" :key="index" :datas='item'></card>
          <a class="list-link" href="javascript:;">显示更多评论</a>
        </div>
      </div>
      <div class="ad">
        <banner :adImg="adImgUrl"></banner>
      </div>
      <scroller title="推荐的豆列" type="onlyString" :datas="movieTags"></scroller>
      <download-app></download-app>
    </template>
    <template v-else>
      <div class="Commentary">
       <div class="hd">
          <span class="title">{{subject.title}}</span>
         <a href="javascript:;" @click="closeComment" class="btn-cancel">取消</a>
         <a href="javascript:;" class="btn-ok disable" @click="SubmitComment">确定</a>
       </div>
       <div class="bd">
          <div class="interest-bd">
            <div class="tit">打标签</div>
            <div class="con retags"><tags :items="genres"></tags></div>
            <div class="tit">写短评</div>
            <div class="comments">
              <textarea style="overflow:hidden; resize:none;" v-model="contents"></textarea>
            </div>
          </div>
       </div>
      </div>
    </template>
  </div>
</template>
<script>
import { mapState,mapGetters,mapActions } from 'vuex'
import Banner from '../components/Banner'
import Rating from '../components/Rating'
import Marking from '../components/Marking'
import DownloadApp from '../components/DownloadApp'
import Tags from '../components/Tags'
import Card from '../components/Card'
import Scroller from '../components/Scroller'
export default {
  name: 'subject-View',
  data () {
    return {
       bannertt:'用 App 打开 查看影人相册',
       isExpand: true,
       prprpr:true,
       contents:'',
       isDisabled: false,
       isDisabled2: false,
       LookKey:'',
       Looktype:'',
       LookBtn:[]
    }
  },
  components:{
    Rating,
    Banner,
    Marking,
    DownloadApp,
    Tags,
    Card,
    Scroller
  },
  computed: {
    ...mapState({
      subject: state => state.subject.subject,
      id: state => state.subject.id,
      adImgUrl: state => state.subject.adImgUrl,
      movieTags: state => state.movie.movieTags,
      msg: state => state.user.msg,
      SUserName: state => state.user.SUserName,
      items: state => state.conments.conments,
      addmsg: state => state.conments.addmsg,
      modifmsg: state => state.conments.modifmsg,
      singe: state => state.conments.singe
    }),
    ...mapGetters({
      subjectMeta: 'subjectMeta',
      summary: 'summary',
      genres: 'genres'
    }),
    getcom:function () {
    if(this.addmsg || this.modifmsg){
      console.log(this.modifmsg)
      this.getconments()
      this.$store.dispatch({
      type: 'getSingleconment',
      id: this.$route.params.id,
      name: this.SUserName
      })
    }
  },
    watchlook : function () {
      if(this.SUserName==this.singe.name&&this.$route.params.id==this.singe.cid){
        if(this.singe.look=='collect'){
          this.isDisabled=true;
          this.isDisabled2=false;
          this.Looktype='我看过这部电影';
          this.LookBtn=['想看','已看过']
        }else if(this.singe.look=='wish'){
          this.isDisabled=false;
          this.isDisabled2=true;
          this.Looktype='我想看这部电影';
          this.LookBtn=['已想看','看过']
        }
      }else{
        this.LookBtn=['想看','看过']
        this.isDisabled=false;
        this.isDisabled2=false;
        // console.log(this.id)
      }
    }
  },
  methods: {
    ...mapActions([
      'getconments',
      'getSingleconment'
    ]),
    expand : function (event) {
      this.isExpand = false
    },
    Commentary : function () {},
    Commentary1 : function () {
      this.prprpr=false
      var oC=document.getElementsByClassName('btn-comment');
      this.LookKey=oC[0].name
    },
    Commentary2 : function () {
      this.prprpr=false
      var oC=document.getElementsByClassName('btn-comment');
      this.LookKey=oC[1].name
    },
    Commentary3 : function () {
      this.prprpr=false
    },
    delt : function () {
      this.$store.dispatch({
        type:'deltConment',
        cid:this.id
      })
    },
    closeComment : function () {
       this.prprpr=true
    },
    SubmitComment : function () {
      console.log(this.LookKey)
      if(this.contents == ''){
        alert('请添加评论')
      }else{
        this.prprpr = true;
        var SUserName=this.SUserName;
        var contents=this.contents;
        var id=this.id
        if(this.singe.content&&!this.LookKey){
          var LookKey=this.singe.look
          // console.log(LookKey)
        }else if(this.singe.content&&this.LookKey){
          var LookKey=this.LookKey
        }else{
          var LookKey=this.LookKey
          // console.log(LookKey)
        }

        if(this.singe.content){
            console.log(1)
            this.$store.dispatch({
            type: 'modifConment',
            name: SUserName,
            cid: id,
            LookKey: LookKey,
            content: contents
            })
        }else{
            console.log(LookKey)
            this.$store.dispatch({
            type:'addconments',
            name: SUserName,
            cid:  id,
            Look: LookKey,
            content: contents
          })
        }
      }
    }
  },
  created () {
    const id = this.$route.params.id
    const classify = this.$route.params.classify
    // console.log(id)
    // const CommentKey=classify+id
    // console.log(CommentKey)
    this.$store.dispatch({
      type: 'getSingleSubject',
      id: id,
      classify: classify
    })
    this.$store.dispatch({
      type: 'getSingleconment',
      id: id,
      name: this.SUserName
    })
  }
}
</script>
<style scoped>
.subject-view {
  margin-top: 47px;
}
.subject-card{
   padding: 0 0.36rem
}
h1 {
  margin: 0.4rem 0 0;
  font-weight: normal;
}
.subject-info{
  overflow: hidden;
  margin-bottom: 0.6rem;
}
.left {
  float: none;
}
.subject-info img {
  display: block;
  width: 100%;
  max-width: 2rem;
}
.left {
  margin-right: 2rem;
}
.meta {
  margin-top: 0.3rem;
  padding-right: 0.48rem;
  line-height: 1.6;
  font-size: 0.28rem;
  color: #494949;
}
.open-app {
  display: block;
  margin-top: 0.2rem;
  line-height: 1.2;
  font-size: 0.28rem;
  color: #42bd56;
}
.buy {
  display: inline-block;
  height: 0.48rem;
  padding: 0 0.12rem;
  line-height: 0.48rem;
  text-align: center;
  font-size: 0.26rem;
  color: #E76648;
  border: 0.02rem solid #E76648;
  border-radius: 0.06rem;
  margin-top: 0.3rem
}
.subject-intro, .genres, .subject-pics, .subject-comments,
.ad, .subject-question {
  margin-bottom: 0.6rem;
}

h2 {
  margin: 0 0 0.3rem;
  font-size: 0.3rem;
  color: #aaa;
  font-weight: normal;
}

.subject-intro p {
  font-size: 0.3rem;
  color: #494949;
}

.subject-intro a {
  color: #42bd56;
}
.subject-pics ul {
  margin-right: -0.36rem;
  overflow-x: auto;
  white-space: nowrap;
}

.subject-pics li {
  height: 2.4rem;
  overflow: hidden;
  display: inline-block;
}

.subject-pics img {
  width: 3.6rem;
}
.subject-comments h2, .subject-question {
  padding: 0 0.36rem;
}
.subject-comments .list-link, .subject-question .list-link{
  display: block;
  padding: 0.3rem 0;
  font-size: 0.32rem;
  line-height: 0..36rem;
  text-align: center;
  color: #42bd56;
}
.ad {
  margin: 0.6rem 0.36rem;
  margin-top: -0.4rem;
}
.Commentary{
  position: fixed;
  top:0;
  right:0;
  bottom: 0;
  left: 0;
  background: #fff;
  z-index: 1000;
  padding-top: 44px
}
.hd{
  height:44px;
  width: 100%;
  color:#333;
  border-bottom:0.02rem solid #efefef;
  font-size: 0.4rem;
  line-height: 0.88rem;
  text-align: center;
  position: fixed;
  top: 0;
}
.hd a{
  color: #42bd56;
  font-size: 0.3rem;
  position: absolute;
  top:0;
}
.hd .btn-cancel{
  left: 0.36rem;
}
.hd .btn-ok{
  right: 0.36rem;
}
.hd .title{
  display: inline-block;
  width: 70%;
  margin: 0 15%;
  white-space:normal;
  text-overflow:ellipsis;
  overflow: hidden;
}
.bd{
  max-width: 13rem;
  margin:9 auto;
}
.bd .tit{
  margin-top: 40px;
}
.bd .interest-bd .tit{
  padding-bottom: 10px;
  color: #aaa;
  font-size: 0.3rem;
}
.interest-bd{
  padding: 0 0.36rem;
  position: relative;
}
.retags li a{
  color:#aaa;
  font-size: 0.34rem;
}
.bd .comments textarea{
  height:130px;
  width: 100%;
  font-size: 0.34rem;
  color: #494949;
  line-height: 1.5;
  border-radius: 2px;
  border:solid 0.5px #ccc;
  box-sizing: border-box;
}
.con-txt,.con-tit{
  font-size: 0.3rem;
  margin-bottom: 0.2rem
}
.con-tit{
  color:#aaa;
}

</style>
