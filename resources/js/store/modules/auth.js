//ユーザー登録やログイン関係など
import Cookies from "js-cookie";
import axios from "axios";
import { RESPONSE_STATE } from '../utils/ResponseStateCode'

// 次回いつも参考にしている記事の以下部分を読んだのち、ユーザー登録の続き
// import { OK, CREATED, UNPROCESSABLE_ENTITY } from '../util'

const state = {
  authComponentsState: 'signUp',
  setApiStatus: false
}

const getters = {
  authComponentsState: state => state.authComponentsState,
}

const mutations = {
  setChangeAuthLogin(state,changeLogin) {
    state.authComponentsState = changeLogin
  },
  setChangeAuthSignUp(state,changeSignUp) {
    state.authComponentsState = changeSignUp
  },
  setApiStatus (state, status) {
    state.apiStatus = status
  }
}

const actions = {
  changeLogin ({ commit }, changeLogin) {
    commit('setChangeAuthLogin', changeLogin)
  },
  changeSignUp ({ commit }, changeSignUp) {
    commit('setChangeAuthSignUp', changeSignUp)
  },
  async createUser({ commit }, createUserdate){
    // JavaScriptでオブジェクトの内容が知りたい時
    // https://qiita.com/ms2sato/items/27e82d6d881fce012459
    // Promise.prototype.catch()
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
    // 次回はバックのユーザー登録機能が想定どおりに動作するかの確認。
    // その後ログイン機能の実装とユーザー情報をCookieで管理する処理を書く。

    const response = await axios.post('/api/register', createUserdate)
    .catch(err => err.response || err)
    console.dir("サーバー側からのレスポンス内容:".response);

    //バックからの処理が想定通り動作した場合
    if (response.status === RESPONSE_STATE.OK) {
      context.commit('setApiStatus', true)
      //ここのユーザー情報の格納をCookieに変更
      context.commit('setUser', response.data)
      return false
    }

    // 想定通り動作しなかった場合,ApiStateの状態をfalseに変更。
    // エラー内情報をerrorストアへ更新する。
    context.commit('setApiStatus', false)
    context.commit('error/setCode', response.status, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
