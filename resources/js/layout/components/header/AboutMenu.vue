<template>
  <!-- メニューバー -->
  <nav class="menuAbout">
    <ul class="menuAbout__itemWrap">
      <li class="menuAbout__itemWrap-item">マイページ</li>
      <li class="menuAbout__itemWrap-item">お気に入りレビュー一覧</li>
      <li class="menuAbout__itemWrap-item">投稿されたレビュー一覧</li>
      <li class="menuAbout__itemWrap-item">閲覧履歴</li>
      <li class="menuAbout__itemWrap-item">投稿者登録</li>
      <li class="menuAbout__itemWrap-item">登録社員一覧</li>
      <li class="menuAbout__itemWrap-item">パスワード変更</li>
      <li class="menuAbout__itemWrap-item">レビュー会社登録申請</li>
      <li class="menuAbout__itemWrap-item">退会する</li>
    </ul>
  </nav>
</template>

<script>
import Cookies from "js-cookie";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      aboutMenuState: state => state.app.aboutMenuState
    }),
  },
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
