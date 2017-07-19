<template>
  <div class="bookView">
    <scroller title="最受关注图书｜虚构类" type="hasCover" :datas="fictitious"></scroller>
    <scroller title="最受关注图书｜非虚构类" type="hasCover" :datas="reality"></scroller>
    <scroller title="豆瓣纸书" type="hasCover" :datas="travel">
      <div class="promItem" slot="promItem">
        <img class="corver" src="../assets/img/book_zw.jpg" alt="">
        <div class="content">
          <span class="price">¥ 88</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scroller>
    <scroller title="发现好书" type="onlyString" :datas="bookTags"></scroller>
    <types></types>
    <DownloadApp></DownloadApp>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Scroller from '../components/Scroller'
import Types from '../components/Types'
import DownloadApp from '../components/DownloadApp'
export default {
  name: 'book-view',
  data () {
    return {}
  },
  components:{ Scroller,DownloadApp ,Types},
  computed: {
    ...mapState({
      fictitious: state => state.book.fictitious,
      reality: state => state.book.reality,
      travel: state => state.book.travel,
      bookTags: state => state.book.bookTags
    })
  },
  methods: {
    getBooks: function() {
      this.$store.dispatch('getBooks')
    }
  },
  created () {
    this.getBooks()
  }
}
</script>
<style scoped>
.bookView{
  margin-top: 47px;
}
.promItem {
  overflow: hidden;
  margin: 0.32rem 0.36rem 0.16rem 0.32rem;
}

.corver {
  float: left;
  width: 2rem;
  margin-right: 0.3rem;
}

.content {
  margin-right: 0.2rem;
}

.name {
  font-size: 0.4rem;
  color: #494949;
  margin: 0.2rem;
  max-width: 100%;
  line-height: 0.44rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.price {
  float: right;
  color: #E76648;
  font-size: 0.32rem;
  line-height: 0.44rem;
}

.info {
  font-size: 0.26rem;
  font-weight: 300;
  line-height: 1.5;
  color: #9B9B9B;
}
</style>
