// ユーザー登録やログイン関係など
// JavaScript クッキー操作できるjs-cookie使ってみた
// https://chaika.hatenablog.com/entry/2019/02/05/083000
// JavaScriptで簡単にCookie操作ができるライブラリ「js-cookie」
// https://webrandum.net/js-cookie/
// JSのデバッグにはconsole.log()ではなくNodeのデバッガーを使いなさい
// https://www.webprofessional.jp/debugging-javascript-node-debugger/
// VS CodeでJavaScriptアプリを作成する上で知っていると便利（？）なこと
// https://www.atmarkit.co.jp/ait/articles/1807/10/news033_3.html
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
