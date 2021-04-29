
//state・・・vueとlaravel内で扱う扱う情報をまとめたもの。
//直接値を変更させると思わぬ動作を起こす原因になる為getter(フロントへステート内情報をリターンさせるもの)
//とmutations(フロント(vue)とサーバー(laravel)をリクエストとリターンをつなぐメソッド群?)
const state = {
  User: null
}

//getters・・・ステート内情報を関節的にフロント側へ伝える為のメソッド群。
const getters = {
  check: state => !! state.user,
    // !!は二重否定の論理演算子。条件が合う(ture)場合はfalse・合わない(false)場合はtrueが入る。
  // check内の処理はuser内が定義されているかを確認するもの。
  // Javasciptで二重否定を使う意味、「関数名」と「関数名()」の違い
  // https://naoyashiga.hatenablog.com/entry/2013/11/19/184938
  // user内が定義されているか確認。truの場合はuser内のnameプロパティをreturnする。
  // falseの場合は''を返す。
  username: state => state.user ? state.user.name : ''
}

//触った感じフロントから非同期で発火されたactions内メソッドでフォームから送信されたデータをコントローラーへ送信。
//コントローラーからリターンされた値をミューテーション内メソッドを経由してステート内情報を更新する。

//mutations・・・主に同期処理でステートを変更するメソッドをまとめた物
const mutations = {
  // ステート内のuser変数を更新するメソッド
  setUser (state, user) {
      state.user = user
  }
}

//actions・・・非同期処理でステートを変更するメソッドをまとめた物
const actions = {
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
  getters,
  mutations,
  actions
}
