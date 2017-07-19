import request from 'superagent'
import jsonp from 'superagent-jsonp'


const state = {
  subject: {},
  classify: '',
  id:'',
  adImgUrl: 'http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658'
}

const getters = {
    subjectMeta: state => {
    if (state.classify === 'movie') {
      return state.subject.year + '/' +
             state.subject.genres.join(' / ') + ' / ' +
             state.subject.casts.map(item => item.name).join(' / ') + ' / ' +
             state.subject.directors.map(item => item.name).join(' / ') + ' / ' +
             state.subject.countries.join(' / ')
    } else if (state.classify === 'book') {
      return state.subject.author.join(' / ') +
             state.subject.translator.join(' / ') + ' / ' +
             state.subject.publisher + ' / ' +
             state.subject.binding + ' / ' + state.subject.pages + ' / ' +
             state.subject.price + ' / ' + state.subject.pubdate
    }
  },
  summary: state => {
  if (state.subject.summary) {
    return state.subject.summary.slice(0, 120)
    }
  },
  genres: state => {
  if (state.classify === 'book') {
    return state.subject.tags
  } else if (state.classify === 'movie') {
    return state.subject.genres
  }
}

}

const mutations = {
  getSingleSubject (state, payload) {
    state.classify = payload.classify
    state.subject = payload.res
    state.id = payload.id
  }
}

const actions = {

  getSingleSubject ({commit}, payload) {
      switch (payload.classify) {
        case 'movie':
          request
            .get('https://api.douban.com/v2/' + payload.classify +
              '/subject/' + payload.id)
            .use(jsonp)
            .end((err, res) => {
              if (!err) {
                commit({
                  type: 'getSingleSubject',
                  classify: payload.classify,
                  id:payload.id,
                  res: res.body
                })
              }
            })
          break;
        case 'book':
          request
            .get('https://api.douban.com/v2/' + payload.classify +
              '/' + payload.id)
            .use(jsonp)
            .end((err, res) => {
              if (!err) {
                commit({
                  type: 'getSingleSubject',
                  classify: payload.classify,
                  id:payload.id,
                  res: res.body
                })
              }
            })
        default:

      }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
