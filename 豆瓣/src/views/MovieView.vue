<template>
  <div class="movie-view">
    <scroller title="影院热映" type="hasCover" :datas="hotMovies" rbq="allhots"></scroller>
    <scroller title="免费在线观影" type="hasCover" :datas="topMovies" rbq="allnews"></scroller>
    <scroller title="新片速递" type="hasCover" :datas="newMovies" rbq="alltops"></scroller>
    <scroller title="发现好电影" type="onlyString" :datas="movieTags"></scroller>
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
  name: 'movie-view',
  data () {
    return {}
  },
  components:{Scroller,DownloadApp,Types},
  computed: {
    ...mapState({
      hotMovies: state => state.movie.hotMovies,
      topMovies: state => state.movie.topMovies,
      newMovies: state => state.movie.newMovies,
      movieTags: state => state.movie.movieTags
    })
  },
  methods: {
    getMovie: function(){
      this.$store.dispatch('getMovie')
    }
  },
  created () {
    this.getMovie()
  }
}
</script>
<style scoped>
.movie-view{
  margin-top: 47px;
}
</style>
