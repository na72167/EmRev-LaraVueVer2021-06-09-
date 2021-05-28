<template>
  <!-- メニューバー -->
  <nav class="menuAbout">
    <ul class="menuAbout__itemWrap">
      <!-- 次やること、ここにdata内に用意したloginUserIdを差し込んで個別マイページに飛べる様にする。 -->
      <!-- 会社情報登録処理もやる。 -->
      <router-link :to="`/mypage/${this.loginUserId}`" class="menuAbout__itemWrap-lineNone">
        <li class="menuAbout__itemWrap-item" @click="switchMenuState">マイページ</li>
      </router-link>
      <li class="menuAbout__itemWrap-item">お気に入りレビュー一覧</li>
      <li class="menuAbout__itemWrap-item">投稿されたレビュー一覧</li>
      <li class="menuAbout__itemWrap-item">閲覧履歴</li>
      <router-link to="/ContributorRegistration" class="menuAbout__itemWrap-lineNone">
        <li class="menuAbout__itemWrap-item" @click="switchMenuState">投稿者登録</li>
      </router-link>
      <li class="menuAbout__itemWrap-item">登録社員一覧</li>
      <router-link to="/PasswordReminder" class="menuAbout__itemWrap-lineNone">
        <li class="menuAbout__itemWrap-item" @click="switchMenuState">パスワード変更</li>
      </router-link>
      <router-link to="/ApplyCompany" class="menuAbout__itemWrap-lineNone">
        <li class="menuAbout__itemWrap-item" @click="switchMenuState">レビュー会社登録申請</li>
      </router-link>
      <li class="menuAbout__itemWrap-item">退会する</li>
    </ul>
  </nav>
</template>

<script>
import Cookies from "js-cookie";
import { mapState } from "vuex";

export default {
  data () {
    return {
      loginUserId: Cookies.get('user_id'),
    }
  },
  computed: {
    ...mapState({
      aboutMenuState: state => state.app.aboutMenuState
    }),
  },
  methods: {
    // ここのaboutMenuStateはvuexのstateを切り替える為のメソッド
    async switchMenuState() {
      // 'openAboutMenu'は動的クラスの要素になる。
      this.switchingMenuState = this.aboutMenuState;
      // aboutMenuState内の要素を反転させる。
      this.switchingMenuState = this.switchingMenuState === false ? 'openAboutMenu' : false;
      await this.$store.dispatch('app/switchMenuComponent',this.switchingMenuState);
    }
  }
}
</script>

<style lang="scss" scope>
  // メニューバーの内容部分のスタイル
  .menuAbout{
    max-height: 2421px;
    width: 100%;
    background: #2A3A50;
    display: block;
    position: fixed;
    top: 70px;
    left: -100%;
    text-align: center;
    transition: all .5s;
    border-top: 1px solid #b4becb;
    border-bottom: 1px solid #b4becb;
    z-index: 2;
    &__itemWrap{
      height: 100%;
      width: 100%;
      display: block;
    }
    &__itemWrap-lineNone{
      text-decoration:none;
    }
    &__itemWrap-item{
      height: 9%;
      display: block;
      padding: 32px 0;
      font-size: 20px;
      text-decoration:none;
      font-family: montserrat;
      color:#fff;
      &:visited{
        color:#fff;
      }
      &:hover{
        transition: .5s;
        border-top: 1px solid #b4becb;
        border-bottom: 1px solid #b4becb;
        background-color: #fff;
        color: #0082e6;
      }
    }
  }
</style>
