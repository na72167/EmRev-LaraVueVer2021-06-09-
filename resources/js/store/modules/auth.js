//ユーザー登録やログイン関係など
import Cookies from "js-cookie";
import axios from "axios";
import { RESPONSE_STATE } from '../utils/ResponseState-mappings'

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
  }
  // ,
  // async createUser({ commit }, createUserdate){
  //   // JavaScriptでオブジェクトの内容が知りたい時
  //   // https://qiita.com/ms2sato/items/27e82d6d881fce012459
  //   // Promise.prototype.catch()
  //   // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
  //   // 次回はバックのユーザー登録機能が想定どおりに動作するかの確認。
  //   // その後ログイン機能の実装とユーザー情報をCookieで管理する処理を書く。

  //   // 第一引数の指定は「フォルダ名/router側で指定したname属性」で良いはず。
  //   const response = await axios.post('/api/register', createUserdate)
  //   .catch(err => err.response || err)
  //   console.dir("サーバー側からのレスポンス内容:".response);

  //   return response

  //   // //バックからの処理が想定通り動作した場合
  //   // if (response.status === RESPONSE_STATE.OK) {
  //   //   context.commit('setApiStatus', true)
  //   //   // レスポンス内容を増やす(レスポンスステータス以外にも登録したメールアドレスを元にid情報なども引っ張ってきて
  //   //   // response内に格納。cookieに保存する。)
  //   //   // もしくは登録したメールアドレスを元にもう一度バックにリクエストを送る。
  //   //   // JavaScriptプラグインjs-cookieで超簡単にクッキー管理
  //   //   // https://pizzamanz.net/web/javascript/js-cookie/
  //   //   Cookies.set('id','email','password','roll','report_flg','delete_flg','create_date','update_date');

  //   //   const cookieDate = Cookies.get('id','email','password','roll','report_flg','delete_flg','create_date','update_date');
  //   //   console.dir("現在保存されているCookie内情報:".cookieDate);

  //   //   this.$router.push('/mypage/'.cookieDate['id']);

  //   //   //ここのユーザー情報の格納をCookieに変更
  //   //   context.commit('setUser', response.data)
  //   //   // 条件に当てはまった場合ここで処理を打ち切る
  //   //   return false
  //   // }

  //   // // 想定通り動作しなかった場合,ApiStateの状態をfalseに変更。
  //   // // エラー内情報をerrorストアへ更新する。
  //   // context.commit('setApiStatus', false)
  //   // context.commit('error/setCode', response.status, { root: true })
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
