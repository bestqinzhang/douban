<template>
  <div class="types">
    <h2>分类浏览</h2>
    <div class="content">
      <ul class="type-list">
        <li v-for="item in items">
          <a :href="baseUri + item.href">
            {{item.title}}<span></span>
          </a>
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'types',
  data () {
    return {
      baseUri: 'https://m.douban.com/',
      items: [
        {
          title: '经典',
          href: 'movie/classic'
        },
        {
          title: '冷门佳片',
          href: 'movie/underrated'
        },
        {
          title: '豆瓣高分',
          href: 'movie/doubantop'
        },
        {
          title: '动作',
          href: 'movie/action'
        },
        {
          title: '喜剧',
          href: 'movie/comedy'
        },
        {
          title: '爱情',
          href: 'movie/love'
        },
        {
          title: '悬疑',
          href: 'movie/mystery'
        },
        {
          title: '恐怖',
          href: 'movie/horror'
        },
        {
          title: '科幻',
          href: 'movie/scifi'
        },
        {
          title: '治愈',
          href: 'movie/sweet'
        },
        {
          title: '文艺',
          href: 'movie/artfilm'
        },
        {
          title: '成长',
          href: 'movie/youth'
        },
        {
          title: '动画',
          href: 'movie/animation'
        },
        {
          title: '华语',
          href: 'movie/chinese'
        },
        {
          title: '欧美',
          href: 'movie/western'
        },
        {
          title: '韩国',
          href: 'movie/korean'
        },
        {
          title: '日本',
          href: 'movie/japanese'
        }
      ]
    }
  }
}
</script>

<style scoped>
.types {
  margin-top: 0.2rem;
}
.types h2 {
  height: 0.52rem;
  line-height: 0.52rem;
  padding: 0 0.32rem;
  display: inline-block;
  font-weight: normal;
  font-size: 0.34rem;
}

.type-list {
  margin: 0.32rem 0 0 0.32rem;
  overflow: hidden;
  border-bottom: solid 0.02rem #eee;
}

.type-list li {
  float: left;
  box-sizing: border-box;
  width: 50%;
  padding-right: 0.36rem;
  height: 0.84rem;
  line-height: 0.84rem;
  font-size: 0.3rem;
  border-top: solid 0.02rem #eee;
  border-right: solid 0.02rem #eee;
}
.type-list li a {
  color: #42bd56;
}
.type-list li:nth-child(2n) {
  padding-left: 0.36rem;
}
.type-list li span {
  color: #ccc;
  float: right;
  font-weight: bold;
  display: inline-block;
  border-right: solid 0.02rem #ccc;
  border-bottom: solid 0.02rem #ccc;
  width: 0.16rem;
  height: 0.16rem;
  transform: rotate(-45deg);
  margin-top: 0.3rem;
}

</style>
