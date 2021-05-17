//ユーザー登録やログイン関係など
import Cookies from "js-cookie";

const state = {
  user: ''
}

const getters = {
}

const mutations = {
  SET_LOGIN_USER(state) {
    state.user = Cookies.get('user_id');
  }
}

// mutaion に直接 commit せず、action 経由で実行することを強く推奨する
// https://uncle-javascript.com/vuex-actions
const actions = {
  setLoginUserInfo (context) {
    context.commit('SET_LOGIN_USER');
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
