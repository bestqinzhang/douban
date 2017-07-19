import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/activities'
import movie from './modules/movie'
import subject from './modules/subject'
import book from './modules/book'
import user from './modules/user'
import conments from './modules/conments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activities,
    movie,
    subject,
    book,
    user,
    conments
  }
})
