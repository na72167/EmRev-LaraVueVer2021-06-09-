import Cookies from "js-cookie";

const state = {
  passwordReminderMode: 'reminder'
}

const getters = {
}

const mutations = {
  SET_RECEIVE_MODE(state,receiveMode) {
    state.passwordReminderMode = receiveMode;
  }
}

// mutaion に直接 commit せず、action 経由で実行することを強く推奨する
// https://uncle-javascript.com/vuex-actions
const actions = {
  setReceiveMode (context) {
    context.commit('SET_RECEIVE_MODE','receive');
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
