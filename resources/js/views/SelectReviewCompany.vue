<template>
  <!-- TODO:フォルダの分割(現在のままだと一定の範囲外になると依存性周りのエラーを吐かれてしまう)-->
  <div>
    <Intro/>
    <CompanySearch/>
    <CompanySort/>
    <!-- 監視中のgetterから取得した会社情報のプロパティを入れる。 -->
    <SelectReviewCompany
      v-if="companySearchState && !initializing"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Intro from '../components/intro/Intro'
import CompanySearch from '../components/reviewPosting/CompanySearch'
import CompanySort from '../components/reviewPosting/CompanySort'
import SelectReviewCompany from '../components/reviewPosting/SelectReviewCompany'

export default {
  components: {
    Intro,
    CompanySearch,
    CompanySort,
    SelectReviewCompany
  },
  data: function() {
    return {
      initializing: true,
    }
  },
  methods: {
    async fetchData() {
      // this.$store.dispatch("app/setLoading");
      // url内にあるパラメータを取得する。
      const params = this.$route.query;
      try {
        await this.$store.dispatch("reviewCompany/", params);
        // this.$store.dispatch("app/clearLoading");
        this.initializing = false;
      } catch (e) {
        // handleApiError(e);
      }
    },
  },
  computed: {
    // ここで上の処理、fetchData()で取得した検索データをコンポーネント側に受け渡す。
    ...mapGetters(["reviewCompany/companySearchState"]),
  },
  // レンダリング->初期化後にメソッドが走る。
  created: async function(){
    this.fetchData();
    this.$store.dispatch('reviewCompany/clearSearchQueries')
  },
  watch: {
    // 一度レンダリングした後のコンポーネントページに再度移動した時に
    // 再レンダリングさせる為の処理
    // (コンポーネント表示用の判定用data「initializing:」がデフォルトだと
    // trueなのでwatchを挟んでfalseにしないと表示されない。)
    $route: function(val) {
      this.fetchData();
    },
  },
}
</script>
