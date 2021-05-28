import Vue from 'vue'
import Cookies from "js-cookie";
import { ROLL_MAPPING } from './utils/roll-mapping';
import { AccessControl } from './accessControl';
import { AuthFilter } from './auth';
import VueRouter from 'vue-router'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
// vue-router 現在のパスによってスタイルを変更する
// https://zukucode.com/2017/05/vue-router-style.html
// vue-routerチートシート
// https://qiita.com/morrr/items/873ea25a806167c8d426
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
// TODO:ルート内で分岐処理を書くのはなんか嫌なので各コンポーネント内で定義してみる。
// https://qiita.com/SatohJohn/items/cd7067ac64d8e45da4dd

const routes = [
  {
    // 対象のページが無い時は
    path: '/404',
    name: 'NotFound',
    component: () =>
      import ('../views/errors/NotFound'),
  },
  {
    path: '/',
    name: 'Home',
    component: () =>
      import ('../views/Home'),
  },
  {
    path: '/MyPage/:id',
    name: 'MyPage',
    component: () =>
      import ('../views/MyPage'),
  },
  {
    path: '/PasswordReminder',
    name: 'PasswordReminder',
    component: () =>
      import ('../views/PasswordReminder'),
  },
  {
    path: '/ContributorRegistration',
    name: 'ContributorRegistration',
    component: () =>
      import ('../views/ContributorRegistration'),

    beforeEnter: (to, from, next) => {
      const loginUserRoll = Cookies.get('roll');
      console.log(loginUserRoll);
      if (loginUserRoll == ROLL_MAPPING.GENERAL ) {
        //TODO:権限周りの処理、外部ファイルに切り分ける。
        next();
      }else if(loginUserRoll === ROLL_MAPPING.CONTRIBUTOR || loginUserRoll === ROLL_MAPPING.ADMINISTRATOR){
        // TODO:フラッシュメッセージで「すでに投稿者権限持ちです。」と表示させる。
        console.log('投稿者権限持ちです。');
        router.push(from.path);
      }else{
        // TODO:フラッシュメッセージで「この機能を利用するにはユーザー登録もしくはログインをする必要があります。」
        // と表示させる。
        console.log('権限がありません。');
        router.push('/', () => {});
      }
    }

  },
  {
    path: '/ApplyCompany',
    name: 'ApplyCompany',
    component: () =>
      import ('../views/ApplyCompany'),
  }
]

// to内のプロパティ
// name:
// fullPath:
// hash: ""
// matched: [{…}]
// meta: {}
// name: "ContributorRegistration"
// params: {}
// path: "/ContributorRegistration"
// query: {}
// __proto__: Object

// VueRouterインスタンスを作成する
// かゆいところに手が届くvue-routerの機能
// https://qiita.com/nishinoshake/items/9ce7d6a04ffb82755ae1
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  // TODO:historyModeの対策をする。
  // Vue.jsのhistory mode 404対策について
  // https://qiita.com/go6887/items/dcb7aa86ba6a006d4746
  // mode: 'history', // ★ 追加
  routes
})
router.afterEach(AuthFilter);

// Vue-Routerのナビゲーションガードを使ってみる
// https://qiita.com/SatohJohn/items/cd7067ac64d8e45da4dd

// TODO:$to・$fromでアクセス元、アクセス先を取得後
// それが同一だった場合、読み込み予定のコンポーネントを再レンダリングさせる処理を書く。
// router.afterEach(AccessControl);

//【Vue.js】全ての画面で実行したい処理の実装方法
// https://hafilog.com/aftereach

// 【Vue.js】ナビゲーションガードについて
// https://tsudoi.org/weblog/5738/
// ローディングのアニメーションに使う
// router.beforeResolve();
// グローバルビフォーガードについて
// https://router.vuejs.org/ja/guide/advanced/navigation-guards.html
// TODO: URLパラメーターをハッシュ化させる。
// PHP URLパラメーターに使える適当なハッシュ値を生成する
// https://symfoware.blog.fc2.com/blog-entry-2234.html
// JavaScriptでURLのパラメータやアンカーを判断して処理を変更する方法
// https://www.tam-tam.co.jp/tipsnote/javascript/post9911.html
// 【Vue Router】画面遷移前にデータを取得する
// https://hi97.hamazo.tv/e8649709.html

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
