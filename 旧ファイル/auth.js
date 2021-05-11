// あなたが知らないJavaScriptの便利すぎるショートハンド19選
// https://www.webprofessional.jp/shorthand-javascript-techniques/

// JavaScript ショートコードテクニック集（ES6含む）
// https://qiita.com/ichimonji_haji/items/f602f6c437be9e7daa88

//state・・・vueとlaravel内で扱う扱う情報をまとめたもの。
//直接値を変更させると思わぬ動作を起こす原因になる為getter(フロントへステート内情報をリターンさせるもの)
//とmutations(フロント(vue)とサーバー(laravel)をリクエストとリターンをつなぐメソッド群?)
// TODO: 判定用文字列を別ファイルに分ける。
const state = {
  User: null,
  authComponentsState: 'signUp'
}

//触った感じフロントから非同期で発火されたactions内メソッドでフォームから送信されたデータをコントローラーへ送信。
//コントローラーからリターンされた値をミューテーション内メソッドを経由してステート内情報を更新する。

//mutations・・・主に同期処理でステートを変更するメソッドをまとめた物
const mutations = {
  // ステート内のuser変数を更新するメソッド
  // setUser (state, user) {
  //     state.user = user
  // }
  setChangeAuthLogin(state,changeLogin) {
    state.authComponentsState = changeLogin
  }
}

// actions・・・非同期処理でステートを変更するメソッドをまとめた物
// TODO: actionsとmutationsの使い分けを詳しく調べる。今の所個人的にはAPIを叩く処理周り込だとaction＋mutations,
// API関係無しでstateを更新する場合はmutationsのみ
const actions = {
  changeLogin (changeLogin) {
    //アクションの第一引数にはコンテキストオブジェクトが渡されます。コンテキストオブジェクトにはミューテーションを呼び出すための commit メソッドなどが入っています。
    context.commit('setChangeAuthLogin', changeLogin)
  }
  //第二引数はフロント側でregisterメソッド使った際に送信されるフォームデータが保持されている。
  //axios.post()でcontrollerからreturnされた値がresponseに代入される。
  //const response = await axios.post('/api/register', data)

  //恐らくvueにはcontextやstateなど予め予約されている引数名かregister,setUserが予め用意されているメソッドで
  //第一引数が予め用意されたクラスが代入された変数を引数として指定してメソッド内で使ってる感じ？
  //(サイト内のコードをいじりながら使っているのでよく分かってない。)
  //第二引数は登録フォームから送信された登録情報。
  async register (context, data) {
      //第二引数はフロント側でregisterメソッド使った際に送信されるフォームデータが保持されている。
      //axios.post()でcontrollerからreturnされた値がresponseに代入される。
      const response = await axios.post('/api/register', data)
      //アクションの第一引数にはコンテキストオブジェクトが渡されます。コンテキストオブジェクトにはミューテーションを呼び出すための commit メソッドなどが入っています。
      context.commit('setUser', response.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


// =========2021/05/09=========

// あなたが知らないJavaScriptの便利すぎるショートハンド19選
// https://www.webprofessional.jp/shorthand-javascript-techniques/

// JavaScript ショートコードテクニック集（ES6含む）
// https://qiita.com/ichimonji_haji/items/f602f6c437be9e7daa88

//state・・・vueとlaravel内で扱う扱う情報をまとめたもの。
//直接値を変更させると思わぬ動作を起こす原因になる為getter(フロントへステート内情報をリターンさせるもの)
//とmutations(フロント(vue)とサーバー(laravel)をリクエストとリターンをつなぐメソッド群?)
// TODO: 判定用文字列を別ファイルに分ける。
const state = {
  user: null,
  authComponentsState: 'signUp',
}

const getters = {
  userLoginCheck: (state) => state.user,
  // !!は二重否定の論理演算子。条件が合う(ture)場合はfalse・合わない(false)場合はtrueが入る。
  // check内の処理はuser内が定義されているかを確認するもの。
  // Javasciptで二重否定を使う意味、「関数名」と「関数名()」の違い
  // https://naoyashiga.hatenablog.com/entry/2013/11/19/184938
  // user内が定義されているか確認。truの場合はuser内のnameプロパティをreturnする。
  // falseの場合は''を返す。
  // VERIFY:getterは基本監視処理のみにすべきか。
  // コンポーネント内に直接書くかgetter内に直接書くかで違う。
  // authComponentsState: state => state.authComponentsState
  username: state => state.user,
  authComponentsState: state => state.authComponentsState
}

//触った感じフロントから非同期で発火されたactions内メソッドでフォームから送信されたデータをコントローラーへ送信。
//コントローラーからリターンされた値をミューテーション内メソッドを経由してステート内情報を更新する。
//ミューテーション内に別プロパティをステート内に代入する処理を記入する場合、ステート名を気をつける。
//スペルミスがあった場合もエラーが吐かれる訳では無く、新しく別stateが作成される。

//mutations・・・主に同期処理でステートを変更するメソッドをまとめた物
const mutations = {
  //ログインコンポーネントへ切り替え
  setChangeAuthLogin(state,changeLogin) {
    state.authComponentsState = changeLogin
  },
  //ユーザー登録コンポーネントへ切り替え
  setChangeAuthSignUp(state,changeSignUp) {
    state.authComponentsState = changeSignUp
  }
}

// actions・・・非同期処理でステートを変更するメソッドをまとめた物
// TODO: actionsとmutationsの使い分けを詳しく調べる。今の所個人的にはAPIを叩く処理周り込だとaction＋mutations,
// API関係無しでstateを更新する場合はmutationsのみ.https://uncle-javascript.com/vuex-getters
const actions = {
  changeLogin ({ commit },changeLogin) {
    //アクションの第一引数にはコンテキストオブジェクトが渡されます。コンテキストオブジェクトにはミューテーションを呼び出すための commit メソッドなどが入っています。
    commit('setChangeAuthLogin', changeLogin)
  },
  changeSignUp ({ commit },changeSignUp) {
    //アクションの第一引数にはコンテキストオブジェクトが渡されます。コンテキストオブジェクトにはミューテーションを呼び出すための commit メソッドなどが入っています。
    commit('setChangeAuthSignUp', changeSignUp)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
