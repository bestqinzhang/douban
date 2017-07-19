<template>
  <div class="card">
    <div class="desc">
      <a href="#">
        <img src="../assets/img/user.jpg" alt="">
      </a>
      <a href="#">
        <div class="user-info">
          <strong>
            {{datas.name}}<span v-if="mold === 'quote'"> 写了日记</span>
          </strong>
          <div class="timestamp">{{datas.time}}</div>
        </div>
      </a>
    </div>
    <div v-if="mold === 'quote'" class="article-card">
      <div class="title">
        豆瓣App 4.12.0 主要更新
      </div>
      <div class="detail">
        - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
      </div>
    </div>
    <p v-if="mold === 'comment'" class="comment">
     {{datas.content}}
    </p>
    <div class="info">
      <span class="btn like"><i>4</i></span>
      <span v-if="mold === 'quote'" class="btn comment"><i>0</i></span>
      <span v-if="mold === 'quote'" class="btn retweet"><i>1</i></span>
      <span class="btn more"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    mold: String,
    datas: Object
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.card {
  position: relative;
  padding: 0 0 0.4rem 1rem;
  margin: 0.4rem 0.36rem;
}
.desc {
  margin-left: -1rem;
}
.desc img {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.2rem;
  border-radius: 50%;
}
.user-info {
  display: inline-block;
}
.user-info strong {
  font-size: 0.3rem;
  line-height: 1;
  color: #494949;
}
strong>span {
  color: #aaa;
  font-weight: normal;
}

.user-info .timestamp {
  font-size: 0.24rem;
  margin-top: 0.12rem;
  line-height: 1;
  color: #aaa;
  padding:0.05rem 0 0.05rem 0;
}
.comment {
  line-height: 0.44rem;
  font-size: 0.3rem;
  color: #494949;
  padding: 0.15rem 0 0.15rem 0;
}
.info span {
  margin-right: 0.4rem;
  font-size: 0.28rem;
}

.like::before {
  background: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
}

.comment::before {
  background: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
}

.retweet::before {
  background: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
}

.more::before {
  background: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: -0.04rem;
}

.more {
  float: right;
  margin-right: 0;
}

.info i {
  font-style: normal;
  color: #ccc;
  margin-left: 0.06rem;
  margin-top: -0.06rem;
}
.btn::before {
  content: '';
  width: 0.4rem;
  height: 0.4rem;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: -0.08rem;
}

.card::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.02rem;
  background: #E8E8E8;
}

.article-card {
  margin: 0.2rem 0 0.4rem 0;
  padding: 0.3rem;
  border-radius: 0.04rem;
  border: solid 0.02rem #d8d8d8;
}
.article-card .title {
  font-size: 0.34rem;
  font-weight: 500;
  line-height: 1.4;
  color: #494949;
  margin-bottom: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.article-card .detail {
  font-size: 0.24rem;
  line-height: 0.32rem;
  color: #aaa;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
