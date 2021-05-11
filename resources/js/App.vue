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
