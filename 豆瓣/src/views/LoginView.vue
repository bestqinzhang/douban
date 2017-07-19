<template>
  <div class="loginView">
    <h1>
      <a href="javascript:history.go(-1);">取消</a>登录豆瓣
    </h1>
    <form :prpr="prpr">
    <p class="error" v-if="error">{{msg}}</p>
      <div class="user-box">
        <label>
          <input v-model="user.Uname" type="text" name="userName" placeholder="用户名">
        </label>
      </div>
      <div class="pwd-box">
        <label>
          <template v-if="passType === 'text'">
            <input v-model="user.Upass"  type="text" name="passWord" placeholder="密码">
          </template>
          <template v-if="passType === 'password'">
            <input v-model="user.Upass" type="password" name="passWord" placeholder="密码">
          </template>
          <span class="show-pwd" :class="{show: isShow}" @click="showPwd()"></span>
        </label>
      </div>
       <div>
        <button class="submit" type="button" :disabled="isDisabled" :class="{disabled: isDisabled}" @click="userLogin">
          {{login}}
        </button>
      </div>
    </form>
    <div class="footer">
      <div class="footer-box">使用其他方式登录 &amp; 找回密码</div>
      <div class="tomore">
        <a href="#">注册豆瓣帐号</a>
        <a href="#">下载豆瓣App</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'login-view',
  data () {
    return {
      user:{
        Uname:'',
        Upass:'',
        Uuser:''
      },
      login: '登录',
      error: '',
      isShow: 0,
      isDisabled: false,
      passType: 'password'
    }
  },
  methods: {
    showPwd: function () {
      this.isShow = this.isShow ? 0 : 1
      this.isShow ? this.passType = 'text' : this.passType = 'password'
    },
    userLogin: function () {
      this.user.Uuser=this.user.Uname
      var user=this.user

      this.$store.dispatch({
        type: 'login',
        user: user,
      }).then(res => {

      })
    }
  },
  computed: {
    ...mapState({
       msg : state => state.user.msg,
       id : state => state.subject.id,
       classify : state => state.subject.classify
    }),
    prpr: function () {
      var ret = this.classify+'/'+'subject'+'/'+this.id
      console.log(ret)
      if(this.msg == '用户登录成功'){
       this.$router.push(ret)

      this.user.Uuser = this.user.Uname
      var user = this.user

      this.$store.dispatch({
        type: 'SuccessLogin',
        user: user
      })
      }
    }
  }
}
</script>

<style scoped>
.loginView{
  position: relative;
  z-index: 1000;
  background: #fff
}
.loginView h1{
  height: 0.9rem;
  margin: 0 0 0.2rem 0;
  padding: 0 0.36rem;
  line-height: 0.9rem;
  background: #fff;
  border-bottom: 0.02rem solid #eee;
  text-align: center;
  font-size: 0.36rem;
  font-weight: bold;
}
.loginView h1 a {
  position: absolute;
  left: 0.36rem;
  top: 0;
  color: #42bd56;
  font-size: 0.3rem;
  font-weight: normal;
}
form {
  padding: 0.35rem 0.3rem;
}
input[type="email"], input[type="text"], input[type="password"] {
  display: inline-block;
  width: 100%;
  height: 0.88rem;
  padding: 0 0.16rem;
  box-sizing: border-box;
  font-size: 0.3rem;
  background: #fff;
  border: 0.02rem solid #ccc;
  border-top-left-radius: 0.06rem;
  border-top-right-radius: 0.06rem;
  outline: 0;
}
.pwd-box {
  position: relative;
}
.pwd-box input {
  padding-right: 4rem;
  border-top: 0;
}
.submit {
  cursor: pointer;
  width: 100%;
  padding: 0.22rem 0.52rem;
  margin-top: 0.02rem;
  font-size: 0.34rem;
  text-align: center;
  color: #fff;
  background: #17AA52;
  border: 0.02rem solid #17AA52;
  border-radius: 0.06rem;
  margin-top: 0.2rem;
}
.show-pwd {
  position: absolute;
  right: 0.04rem;
  top: 0;
  display: block;
  height: 100%;
  width: 0.64rem;
  background-image: url(../assets/img/show1.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 0.44rem;
  z-index: 3;
}
.show-pwd.show {
  background-image: url(../assets/img/show2.png);
}
.footer-box {
  font-size: 0.3rem;
  color: #aaa;
  text-align: center;
}

.tomore {
  margin-top: 0.8rem;
  text-align: center;
  font-size: 0.3rem;
}
.tomore a {
  color: #42bd56;
  margin-right: 0.25rem;
}
</style>
