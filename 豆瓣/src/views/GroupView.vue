<template>
  <div class="groupView">
    <p>我是小组</p>
    <DownloadApp></DownloadApp>
  </div>
</template>
<script>
import DownloadApp from '../components/DownloadApp'
export default {
  name: 'group-view',
  data () {
    return {

    }
  },
  components:{DownloadApp}
}
</script>
<style scoped>
.groupView{
  margin-top: 47px;
}
</style>
