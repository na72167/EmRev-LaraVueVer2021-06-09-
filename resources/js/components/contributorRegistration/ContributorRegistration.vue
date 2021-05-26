<template>
  <section class="empregEmployeeRegister">
    <div class="empregEmployeeRegister__content">
      <h1 class="empregEmployeeRegister__title">Employee Registration</h1>
      <!-- Formで送信させない(@submit.prevent) -->
      <!-- https://www.wakuwakubank.com/posts/638-vue-submit-prevent/ -->
      <form @submit.prevent="ContributorRegist">
        <h4>現在ログイン中のメールアドレス</h4>
        <div class="empregEmployeeRegister__outputStyle">
          {{ contributorRegistration }}
        </div>
        <h4 class="empregEmployeeRegister__secondText">のメールアドレスで投稿者登録します。宜しいですか?</h4>
        <div class="empregEmployeeRegister__bottom-wrap">
          <button class="empregEmployeeRegister__bottom-return"
            @click="cancel">
            {{ cnacelButton }}
          </button>
          <button class="empregEmployeeRegister__bottom-next"
            type="submit"
          >
          {{ contributorRegistrationButton }}
          </button>
        </div>
      </form>

    </div>
  </section>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";

export default {
  data () {
    return {
      // 入力情報を保持
      contributorRegistration: Cookies.get('email'),
      cnacelButton: "キャンセル",
      contributorRegistrationButton: "登録する",
      contributorRegistrationResult: null
    }
  },
  methods: {
    async ContributorRegist() {
      // TODO:data内で配列管理してaxios内で第二引数に指定しても何故か中のvalueがkey名になってしまう。
      // 多分書き方がおかしいだけだと思うのであとで見直す。
      const targetEmail = { email: Cookies.get('email') };
      // axiosライブラリを使ってリクエストする
      // https://qiita.com/reflet/items/d5658d5d69e8e1ccd489
      // [axios] axios の導入と簡単な使い方
      // https://qiita.com/ksh-fthr/items/2daaaf3a15c4c11956e9
      this.contributorRegistrationResult = await axios.post('/api/contributorRegistration',targetEmail);
      if(this.contributorRegistrationResult){
        console.log("投稿者登録に成功しました。");
        // フラッシュメッセージで「投稿者登録に成功しました!早速レビューを投稿しましょう！」と表示させる。
        this.$router.push(`/mypage/${Cookies.get('user_id')}`)
      }else if(!this.contributorRegistrationResult){
        console.log("投稿者登録に失敗しました。");
        // フラッシュメッセージで「投稿者登録に失敗しました。対象メールアドレスを記入の上、お問い合わせフォームより問題を報告しますか？」
        // メールフォームに移動するリンクを表示させる。
        this.$router.push(`/mypage/${Cookies.get('user_id')}`)
      }
    },
    cancel(){
      this.$router.push(`/mypage/${Cookies.get('user_id')}`)
    }
  }
}
</script>

<style lang="scss" scope>
  .empregEmployeeRegister{
      height: 590px;
      width: 1400px;
      background-color: #fff;
      border-radius: 3px;
      padding: 30px 0;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      margin: 0 auto;
      position: relative;
      top:-20px;
    &__content{
      height: 200px;
      width: 700px;
      margin: 0 auto;
      padding: 20px 0;
    }
    &__input{
      border: 1px solid #b4becb;
      height: 40px;
      width: 700px;
    }
    &__title{
      font-size: 2rem;
      text-align: center;
      margin-bottom: 50px;
    }
    &__outputStyle{
      border-bottom: 1px solid #b4becb;
      margin: 10px auto;
      text-align: center;
      height: 30px;
      width: 550px;
    }
    &__secondText{
      position: relative;
      left: 450px;
    }
    &__content-bottom{
      display: block;
      height: 46px;
      width: 116px;
      margin: 20px auto 0;
      padding: 10px 27px;
      font-size: 15px;
      background-color: #06D1EC;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 3px;
    }
    &__bottom-wrap{
      position: relative;
      top:50px;
      margin: 0 auto;
      width: 385px;
    }
    &__bottom-link{
      text-decoration: none;
    }
    &__bottom-return{
      padding: 10px 45px;
      background-color: #fff;
      color: #06D1EC;
      border: none;
      border: 1px solid #06D1EC;
    }
    &__bottom-next{
      padding: 10px 47px;
      margin-left: 50px;
      background-color: #06D1EC;
      color: #fff;
      border: none;
      border: 1px solid #fff;
    }
  }
</style>
