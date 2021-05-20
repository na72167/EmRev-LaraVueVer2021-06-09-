<template>
  <div>
    <Header/>
      <!-- TODO:ローディング画面の実装 -->
      <div class="#" v-show="loading">
        <RouterView />
      </div>
    <Footer/>
  </div>
</template>

<script>
//コンポーネントから別ファイルなどを読み込み際には元のコンポーネントファイルの位置がルートになる。
import { mapGetters } from "vuex";
import Header from './layout/components/header/header'
import Footer from './layout/components/footer/footer'

export default {
  // 動的ルートマッチング.動的セグメント・・・受け取ったパラメータ等に応じて変更される可能性がある区間の事。
  // https://router.vuejs.org/ja/guide/essentials/dynamic-matching.html#%E3%83%8F%E3%82%9A%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%83%BC%E5%A4%89%E6%9B%B4%E3%81%AE%E6%A4%9C%E7%9F%A5
  // vue-routerでページ遷移を検知して、GAのpageviewを送信する
  // https://qiita.com/KumanoT/items/0e0626afe7ac818019a8
  // TODO:同一ページへジャンプした時特定のコンポーネントを再レンダリングさせる処理を書く。
  // watch: {
  //   $route(to, from) {
  //     if (to.path === from.path) {
  //       console.log(to);
  //       console.log(from);
  //     }
  //   }
  // },
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters({
    loading: 'app/loading',
    })
  }
}
</script>
