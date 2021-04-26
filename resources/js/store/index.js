import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'

Vue.use(Vuex)

//このファイルは対象ファイル内でstore機能を
//使える様にする為の物
const store = new Vuex.Store({
  modules: {
    auth
  }
})

export default store
