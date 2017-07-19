import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
  events: [],
  eventSingle:{},
  skip:0
}

const mutations = {
  getevent(state, payload){
    state.skip += 3
    state.events = state.events.concat(payload.res)
    // concat() 方法用于连接两个或多个数组。
    // console.log(state.events)
  },
  getSingleEvent (state, payload) {
    state.eventSingle = payload.res
    console.log(state.eventSingle)
  }
}

const actions = {
  //获取首页数据
  getevent({commit, state}){
    request
      .get('https://api.douban.com/v2/event/list?loc=108288&start=' +
        state.skip + '&count=3')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'getevent',
            res: res.body.events
          })
        }
      })
  },

  //获取单个页面数据
  getSingleEvent({commit,state},payload){
    request
    .get('https://api.douban.com/v2/event/' + payload.id)
    .use(jsonp)
    .end((err,res) => {
      if(!err){
        commit({
          type:'getSingleEvent',
          res:res.body
        })
      }
    })
  }
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
