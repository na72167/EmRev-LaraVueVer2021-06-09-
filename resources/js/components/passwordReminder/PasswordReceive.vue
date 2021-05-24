<template>

  <section class="passwordRreceive">
    <div class="passwordRreceive__content">
      <h1 class="passrePasswordReminder__title">Password Reminder</h1>
      <form @submit.prevent="passwordReceive">
          <p>ご指定のメールアドレスお送りした【パスワード再発行認証】メール内にある「認証キー」をご入力ください。</p>
          <p>＊認証キーの有効時間は10分間となります。</p>
          <p>＊認証画面から離れた場合再度認証メールを発行して頂きます。</p>
          <div class="area-msg">
          </div>
          <label class="">
            Email
            <input type="text" :class="{ errInput: passwordRreceiveErrMsg }" placeholder="Email" v-model="passwordReceiveForm.authEmail">
          </label>
          <div class="area-msg">
          </div>
          <label class="">
            認証キー
            <input type="text" :class="{ errInput: passwordRreceiveErrMsg }" placeholder="受信した認証キーを入力" v-model="passwordReceiveForm.authenticationKey">
          </label>
          <label class="">
            変更後パスワード
            <input type="text" :class="{ errInput: passwordRreceiveErrMsg }" placeholder="変更後パスワードを入力" v-model="passwordReceiveForm.changedPassword">
          </label>
          <button type="submit" class="btn btn-mid">
            {{ passwordReceiveButton }}
          </button>
        </form>
    </div>
  </section>

</template>

<script>
import Cookies from "js-cookie";
import Dayjs from "dayjs";
import axios from "axios";
import {PASSWORD_REMINDER_STR} from "./utils/passwordReminder-str-mappings"

export default {
  data () {
    return {
      // 入力情報を保持
      passwordReceiveForm: {
        authEmail: null,
        authenticationKey: null,
        changedPassword: null
      },
      authdate:{
        authEmail: null,
        authKey: null,
        authKeyLimit: null
      },
      passwordReceiveResponseResult: null,
      passwordReceiveResult: null,
      passwordRreceiveErrMsg: null,
      passwordReceiveButton: "再発行する",
    }
  },
  methods: {
    async passwordReceive(){
      //認証周りの情報をCookieから取得
      this.authdate.authEmail = Cookies.get('auth_email');
      this.authdate.authKey = Cookies.get('auth_key');
      this.authdate.authKeyLimit = Cookies.get('auth_key_limit');
      console.log(this.authdate);

    if(this.authdate.authKey){
      console.log("認証キーが確認できました。");
      if(this.authdate.authKeyLimit < Dayjs()){
        console.log("認証キー期限内です。");

        if(!this.passwordReceiveForm.authEmail === this.authdate.authEmail){
          // 変更対象のメールアドレスと
          console.log("(passwordReceive)認証キーを発行したメールアドレスと一致しません");
          this.passwordReceiveErrMsg = "認証キーを発行したメールアドレスと一致しません"
          return false
        }

        try {
          this.isSubmit = true;
          this.submitButton = '再発行中です';
          // ロード画面実装処理 passwordRreceiveErrMsg
          // this.$store.dispatch("app/setLoading");
          console.log("変更処理に入りました。");
          this.passwordReceiveResponseResult = await axios.post('/api/passwordReceive',this.passwordReceiveForm);
          console.log(this.passwordReceiveResponseResult);

          if(this.passwordReceiveResponseResult){
            console.log("認証トークンの発行成功。");
            // 認証トークン関係は10分間のみ保持の想定
            Cookies.remove('auth_email');
            Cookies.remove('auth_key');
            Cookies.remove('auth_key_limit');
            // TODO:フラッシュメッセージで「パスワード変更に成功しました。」と表示させる。
            this.$router.push(`/mypage/${Cookies.get('user_id')}`);
          }else if(this.passwordReceiveResponseResult === false){
            console.log("変更に失敗しました。再度認証キーの変更からお願いします。");
            Cookies.remove('auth_email');
            Cookies.remove('auth_key');
            Cookies.remove('auth_key_limit');
            // TODO:フラッシュメッセージで「変更に失敗しました。再度認証キーの発行からお願いします。」と表示させる。
            this.$emit("CangePassReminderComponents", PASSWORD_REMINDER_STR.REMINDER_MODE);
          }
        } catch (e) {
          console.log("登録処理中に例外エラーが発生しました。");
          this.signUpCommonErrMsg = '接続に失敗しました。'
        } finally {
          // 必ず実行する処理の記述(try..catch..finally)
          // https://www.javadrive.jp/start/exception/index3.html
          // ローディング画面の終了
          this.isSubmitting = false;
          this.isSubmit = false;
          this.submitButton = "再発行する";
        }

        }else if(this.authdate.authKeyLimit > Dayjs()){
          console.log("認証キーの期限が切れています。");
          // TODO:フラッシュメッセージで「認証キーの期限が切れています。再度発行し直して下さい。」と出力する。
          // Cookies.remove('auth_email');
          // Cookies.remove('auth_key');
          // Cookies.remove('auth_key_limit');
          // this.$emit("CangePassReminderComponents", PASSWORD_REMINDER_STR.REMINDER_MODE);
        }
      } else if (!this.authdate.authKey){
        // TODO:フラッシュメッセージで「認証キーが存在しません。再度発行し直して下さい。」と出力する。
        // Cookies.remove('auth_email');
        // Cookies.remove('auth_key');
        // Cookies.remove('auth_key_limit');
        // this.$emit("CangePassReminderComponents", PASSWORD_REMINDER_STR.REMINDER_MODE);
      }
    }
  }
}
</script>

<style lang="scss" scope>
  .passwordRreceive{
      height: 590px;
      width: 1400px;
      background-color: #fff;
      border-radius: 3px;
      padding: 170px 0;
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
  }
</style>
