<template>
  <div class="dstails-view">
    <banner title="世界那么大，出门去看看"></banner>
      <div class="info">
        <h2>
          {{eventSingle.title}}
          <span class="badge">{{eventSingle.loc_name}}</span>
        </h2>
        <div class="poster">
          <img :src="eventSingle.image_hlarge" alt="">
        </div>
        <div class="detail">
          <span>时间:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventSingle.begin_time}}</li>
            <li>{{eventSingle.end_time}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>地点:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventSingle.address}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>费用:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventSingle.fee_str}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>类型:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventSingle.category_name}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>起始时间:&nbsp;&nbsp;</span>
          <ul>
            <li v-if="eventSingle.owner">{{eventSingle.owner.name}}</li>
          </ul>
        </div>
        <tags v-if="eventSingle.tags" :items="eventSingle.tags | toArray"></tags>
        <div class="describe">
          <h2>活动详情</h2>
          <div v-if="eventSingle.content" class="content" v-html="content"></div>
        </div>
      <DownloadApp></DownloadApp>
    </div>
  </div>
</template>
<script>
import DownloadApp from '../components/DownloadApp'
import { mapState } from 'vuex'
import Tags from '../components/Tags'
import Banner from '../components/Banner'
export default {
  name: 'dstails',
  data () {
    return {

    }
  },
  filters: {
    toArray (value) {
      return value.split(',')
    }
  },
  computed: {
    content: function () {
      // Careful XSS
      // Remove copyright imgs
      return this.eventSingle.content.replace(/<img.+?>/ig, '')
    },
    ...mapState({
      eventSingle : state => state.activities.eventSingle
    })
  },
  created () {
    const id=this.$route.params.id
    this.$store.dispatch({
      type:'getSingleEvent',
      id: id
    })
  },
  components:{DownloadApp,Tags,Banner}
}
</script>
<style scoped>
.dstails-view{
  margin-top: 47px
}
.info{
  margin: 0.2rem;
}
.info h2 {
  margin: 0.4rem 0;
  font-weight: bold;
  color: #494949;
  font-size: 0.35rem
}

.badge {
  display: inline-block;
  padding: 0.02rem 0.1rem;
  margin-bottom: 0.06rem;
  vertical-align: middle;
  line-height: 0.36rem;
  font-size: 0.24rem;
  color: #fff;
  background-color: #FF8263;
  border-radius: 0.04rem;
}
.poster {
  margin: 0.4rem auto;
  text-align: center;
}

.poster>img {
  width: 100%;
  max-width: 4.4rem;
  height: auto;
}
.detail {
  margin-left: 0.66rem;
  margin-bottom: 0.2rem;
  min-height: 0.3em;
  font-size: 0.28rem;
  clear: left;
}
.detail span {
  float: left;
  margin-left: -0.66rem;
  line-height: 150%;
  color: #666666;
}

.detail ul {
  list-style-position: outside;
  margin-left: 0;
}

.describe h2 {
  color: #072;
}

.content {
  overflow: hidden;
  font-size: 0.28rem;
}
</style>
