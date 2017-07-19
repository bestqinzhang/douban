<template>
  <div class="marking">
    <slot name="movie"></slot>
    <slot name="book"></slot>
  </div>
</template>

<script>
export default {
  name: 'marking',
  data () {
    return {}
  }
}
</script>

<style scoped>
.marking {
  display: flex;
  margin: 0.6rem 0;
}
a, .btn-comment{
  display: block;
  height: 0.6rem;
  margin-right: 0.2rem;
  line-height: 0.6rem;
  font-size: 0.3rem;
  text-align: center;
  color: #ffb712;
  border: 0.02rem solid #ffb712;
  border-radius: 0.06rem;
  flex: 1;
  background: #fff
}
.disabled,.disabled2 {
  cursor: not-allowed;
  background: #eee;
  border: none;
  color: #aaa
}
</style>
