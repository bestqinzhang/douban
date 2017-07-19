<template>
  <div class="register-view">
    <h1 class="title">欢迎加入豆瓣</h1>
    <form :succ="suss">
        <p v-if="regMsg">{{regMsg}}</p>
        <div class="form-alias">
          <label>
            <strong>账号</strong>
            <input v-model.trim="username" type="text" name="username" placeholder="账号">
          </label>
        </div>
        <div class="form-pwd">
          <label>
              <strong>请输入密码</strong>
              <template v-if="passType === 'password'">
                <input v-model.trim="pass" type="password" name="pass" placeholder="密码">
              </template>
              <template v-if="passType === 'text'">
                <input v-model.trim="pass" type="text" name="pass" placeholder="密码">
              </template>
              <span class="show-pwd" :class="{show: isShow}" @click="showPwd()"></span>
          </label>
        </div>
        <div class="form-name">
          <label>
            <strong>用户名</strong>
            <input v-model.trim="name" type="text" name="name" placeholder="用户名">
          </label>
        </div>
        <div class="form-submit">
          <button class="submit" type="button" @click="register">立即注册</button>
        </div>
      </form>
      <div class="footer">
        <div class="agreement">点击「注册」代表你已阅读并同意用户使用协议</div>
        <div class="btns">
          <a href="#">下载豆瓣App</a>
        </div>
      </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
   name: 'register-view',
   data(){
    return {
      username:'',
      pass:'',
      name:'',
      error:'',
      passType: 'password',
      isShow: 0,
      isDisabled: false
    }
   },
   methods : {
    showPwd: function () {
      this.isShow = this.isShow ? 0 : 1
      this.isShow ? this.passType = 'text' : this.passType = 'password'
    },
    register: function () {
      // console.log(this.username,this.pass,this.name)
      this.$store.dispatch({
        type:'register',
        username:this.username,
        pass:this.pass,
        name:this.name
      })
    }
  },
  computed : {
    ...mapState({
      regMsg : state => state.user.regMsg
    }),
    suss: function () {
        if(this.regMsg == '注册成功'){
         this.$router.push('/')

        this.$store.dispatch({
          type : 'SuccessRegister',
          pass : this.pass,
          name: this.name
        })
      }
    }
  }
}
</script>
<style scoped>
.register-view{
  position: relative;
  z-index: 1000;
  background: #fff;
}
.register-view h1 {
  padding: 10% 0 9%;
  font-size: 0.8rem;
  font-weight: 300;
  color: #42bd56;
  text-align: center;
}
form {
  padding: 0  0.3rem 0.4rem 0.3rem;
  border-radius: 4px;
}
form strong {
  font-size: 0.3rem;
  color: #222;
  display: none;
  margin-bottom: 0.1rem;
}
input::placeholder {
  color: #ccc;
}
input[type="text"], input[type="password"] {
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
.form-pwd input, .form-name input {
  padding-right: 0.8rem;
  border-top: 0;
}
.form-pwd {
  position: relative;
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
  z-index: 9;
}
.show-pwd.show {
  background-image: url(../assets/img/show2.png);
}
.submit {
  width: 100%;
  padding: 0.24rem 0.52rem;
  margin-top: 0.2rem;
  font-size: 0.34rem;
  text-align: center;
  color: #fff;
  background: #42bd56;
  border: 0.02rem solid #17AA52;
  border-radius: 0.06rem;
}

.agreement {
  font-size: 0.28rem;
  color: #aaa;
  text-align: center;
}
.btns {
  margin-top: 0.8rem;
  text-align: center;
  font-size: 0.3rem;
}
.btns a {
  color: #42bd56;
  margin-right: 0.3rem;
}
</style>
