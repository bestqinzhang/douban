import $ from 'jquery'

const state = {
  conments : [],
  addmsg : '',
  singe:{},
  modifmsg:''
}

const  mutations = {
  addconments (state,payload) {
    state.addmsg=payload.res
  },
  getconments (state,payload) {
    state.conments=payload.res.reverse()
    var i=payload.res.index
    for(i=0;i<state.conments.length;i++){
      state.conments[i].time=payload.res[i].time.split('T')[0]+' '+payload.res[i].time.split('T')[1].split('.')[0]
    }
  },
  getSingleconment (state,payload) {
    state.singe=payload.res
    console.log(payload.res)
  },
  modifConment (state,payload) {
    state.modifmsg=payload.res
    console.log(payload.res)
  },
  deltConment (state,payload) {
    state.singe={}
    state.modifmsg=payload.res
  }
}

const actions = {
  addconments ({ commit },payload) {
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
        return currentdate;
    }
    $.ajax ({
      url:'http://127.0.0.1:3000/comments/addconments',
      type:'post',
      data:{
          name:payload.name,
          content:payload.content,
          cid:payload.cid,
          look:payload.Look,
          time:getNowFormatDate()
      },
      success: function (res) {
        commit({
          type:'addconments',
          res:res
        })
      }
    })
  },
  getconments ({commit}) {
    $.ajax ({
      url:'http://127.0.0.1:3000/comments/getcomments',
      type:'get',
      success: function (res) {
        commit({
          type:'getconments',
          res:res
        })
      }
    })
  },
  getSingleconment ({commit},payload) {
    // console.log({id:payload.id,name:payload.name})
    $.ajax ({
      url:'http://127.0.0.1:3000/comments/getSingleconment',
      type:'post',
      data:{cid:payload.id,name:payload.name},
      success: function (res) {
        // console.log(res[0])
        commit({
          type:'getSingleconment',
          res:res[0]
        })
      }
    })
  },
  modifConment ({commit},payload) {
    $.ajax ({
      url:'http://127.0.0.1:3000/comments/modifConment',
      type:'post',
      data:{
          name:payload.name,
          content:payload.content,
          cid:payload.cid,
          look:payload.LookKey
      },
      success:function (res) {
        // console.log(res)
        commit({
          type:'modifConment',
          res:res
        })
      }
    })
  },
  deltConment({ commit },payload) {
    $.ajax({
      url:'http://127.0.0.1:3000/comments/deltConment',
      type:'post',
      data:{cid:payload.cid},
      success:function(res){
         commit({
          type:'deltConment',
          res:res
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








