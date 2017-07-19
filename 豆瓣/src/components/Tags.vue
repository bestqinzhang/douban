<template>
  <div class="tags">
    <ul>
      <li v-for="item in items">
        <a href="#">{{item.name ? item.name : item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tags',
  props: {
    items:Array
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.tags{
  margin-bottom: 0.2rem
}
.tags li {
  display: inline-block;
  margin: 0.2rem 0.2rem 0 0;
  font-size: 0.3rem;
}

.tags a {
  display: block;
  padding: 0 0.4rem;
  line-height: 0.56rem;
  font-size: 0.3rem;
  border-radius: 0.56rem;
  text-align: center;
  color: #494949;
  background: #f5f5f5;
}
</style>
