import $ from 'jquery'

const state = {
    msg:'',
    SUserName:'',
    SUserPass:'',
    regMsg:''
}


const mutations = {
  login (state,payload) {
    state.msg = payload.msg
    localStorage.setItem('msg', payload.msg)
    console.log(state.msg)
  },
  SuccessLogin (state,payload) {
    state.SUserName=payload.user.Uname
    state.SUserPass=payload.user.Upass
    localStorage.setItem('SUserName', payload.user.Uname)
  },
  SuccessRegister (state,payload) {
    state.SUserName=payload.name
    state.SUserPass=payload.pass
    localStorage.setItem('SUserName', payload.name)
  },
  getLocalUser(state){
    state.SUserName=localStorage.getItem('SUserName')
    state.msg=localStorage.getItem('msg')
  },
  logout (state) {
    state.SUserName=''
    state.SUserPass=''
    state.msg=''
    state.regMsg=''
    localStorage.removeItem('SUserName')
    localStorage.removeItem('msg')
    localStorage.removeItem('regMsg')
  },
  register (state,payload) {
    state.regMsg=payload.regMsg
    localStorage.setItem('regMsg', payload.user.regMsg)
    console.log(state.regMsg)
  }
}



const actions = {
  login ({ commit },payload) {
    console.log(payload.user)
     $.ajax({
      url:'http://127.0.0.1:3000/users/login',
      type:'post',
      data:payload.user,
      success : function (res) {
        commit({
          type: 'login',
          msg: res
        })
        console.log(res)
      }
    })
  },
  SuccessLogin ({ commit },payload) {
    commit({
      type:'SuccessLogin',
      user:payload.user
    })
  },
  SuccessRegister({ commit },payload){
  commit({
      type:'SuccessRegister',
      name:payload.name,
      pass:payload.pass
    })
  },
  logout ({ commit }) {
    commit({
      type: 'logout'
    })
  },
  getLocalUser ({ commit }) {
    commit({
      type: 'getLocalUser'
    })
  },
  register ({commit},payload) {
    $.ajax({
      url:'http://127.0.0.1:3000/users/register',
      type:'post',
      data:{
        username:payload.username,
        pass:payload.pass,
        name:payload.name
      },
      success : function (res) {
        commit({
          type:'register',
          regMsg:res
        })
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
