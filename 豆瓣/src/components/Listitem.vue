<template>
  <div class="listitem">
    <router-link :to="'/Details/'+datas.id">
    <div class="content">
      <img :src="datas.image_hlarge" alt="cover">
      <h3>{{datas.title}}</h3>
      <p>{{datas.content | subStr}}</p>
    </div>
     <div class="author">
      <span class="name">{{datas.category_name}}</span>
      <span class="label" v-if="datas.subcategory_name">
        本活动来自栏目 {{datas.subcategory_name}}
      </span>
    </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name:'Listitem',
    data(){
      return{

      }
    },
    props:{
      datas:Object
    },
    filters: {
    subStr: function (value) {
      value.replace(/<.+>|\s/, '')
      return value.slice(0, 30)
    }
  }
  }
</script>
<style scoped>
.listitem{
  border-bottom: 1px solid #e3e3e3;
  position: relative;
  display: block;
  padding: 0.5rem 0.36rem 0.5rem 0;
  margin-left: 0.36rem
}
.listitem .content{
  overflow: hidden;
  margin-bottom: 0.2rem;
}
h3 {
  margin-top: 0;
  margin-bottom: 0.12rem;
  line-height: 1.41;
  text-align: justify;
  font-size: 0.34rem;
  font-weight: 500;
  color: #494949;
}
img {
  float: right;
  width: 25.6%;
  height: 1.7356rem;
  margin-left: 0.5rem;
}
p {
  line-height: 1.5;
  text-align: justify;
  color: #aaa;
  font-size: 0.24rem;
  overflow: hidden;
  }
.author {
  font-size: 0.24rem;
  color: #ccc;
}
.label {
  position: absolute;
  bottom: 0.5rem;
  right: 0.36rem;
}

</style>
