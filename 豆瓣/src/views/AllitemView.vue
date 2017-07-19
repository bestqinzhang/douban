<template>
  <div class="Allitem">
  <template v-if="rbq ==='allhots'">
    <h1>{{hotTitle}}</h1>
    <ul>
      <li v-for="item in allhots" class="listitem">
       <router-link :to="'/movie/subject/' + item.id">
        <img v-if="item.images" :src="item.images.small" alt="">
        <h3>{{item.title}}</h3>
        <rating v-if="item.rating" :rating="item.rating"></rating>
       </router-link>
      </li>
    </ul>
   </template>
   <template v-if="rbq ==='allnews'">
    <h1>{{topTitle}}</h1>
    <ul>
      <li v-for="item in allnews" class="listitem">
       <router-link :to="'/movie/subject/' + item.id">
        <img v-if="item.images" :src="item.images.small" alt="">
        <h3>{{item.title}}</h3>
        <rating v-if="item.rating" :rating="item.rating"></rating>
       </router-link>
      </li>
    </ul>
   </template>
   <template v-if="rbq ==='alltops'">
    <h1>{{newTitle}}</h1>
    <ul>
      <li v-for="item in alltops" class="listitem">
       <router-link :to="'/movie/subject/' + item.id">
        <img v-if="item.images" :src="item.images.small" alt="">
        <h3>{{item.title}}</h3>
        <rating v-if="item.rating" :rating="item.rating"></rating>
       </router-link>
      </li>
    </ul>
   </template>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Rating from '../components/Rating'
export default {
  name: 'Allitem-view',
  data () {
    return {
      hotTitle:'影院热映',
      topTitle:'免费在线观看新片',
      newTitle:'新片速递',
      rbq:this.$route.params.rbq
    }
  },
  components: { Rating },
  computed: {
    ...mapState({
      allhots: state => state.movie.allhots,
      alltops: state => state.movie.alltops,
      allnews: state => state.movie.allnews
    })
  },
  methods: {
    getAllMovie: function(){
      this.$store.dispatch('getAllMovie')
    }
  },
  created () {
    // const rbq=this.$route.params.rbq
    this.getAllMovie()
  }
}
</script>
<style scoped>
.Allitem {
  margin-top: 67px;
}
.Allitem h1{
  font-size: 0.48rem;
  font-weight: normal;
  box-sizing: border-box;
  max-width:660px;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:0.52rem;
  padding-left:4%;

}
.listitem {
  float: left;
  width:33.33333%;
  box-sizing: border-box;
  padding-left: 4%;
  padding-right: 4%;
  margin-bottom: 20px;
  overflow: hidden;
  text-align: center;
}
.listitem h3{
  max-width: 100%;
  font-size: 0.26rem;
  font-weight: normal;
  color:#494949;
  text-align:center;
  white-space : nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.listitem img{
  width: 95%;
  height: 2.225rem;
}
</style>
