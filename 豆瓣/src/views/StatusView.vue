<template>
  <div class="status">
    <banner title="打开APP,回复广播"></banner>
    <div class="content-list">
   <!--    <card mold="quote" v-for="item in items" :key="item"></card> -->
      <a class="list-link" href="#">显示更多广播</a>
    </div>
    <DownloadApp></DownloadApp>
  </div>
</template>
<script>
import DownloadApp from '../components/DownloadApp'
import Banner from '../components/Banner'
import Card from '../components/Card'
export default {
  name: 'status',
  data () {
    return {
      items: new Array(10)
    }
  },
  components:{DownloadApp,Banner,Card}
}
</script>
<style scoped>
.status{
  margin-top: 47px;
}
.list-link {
  display: block;
  padding: 0.3rem 0;
  font-size: 0.32rem;
  line-height: 0.36rem;
  text-align: center;
  color: #42bd56;
}
</style>
