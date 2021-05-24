<template>

  <!-- TODO:template内で定数使いたい -->
  <!-- https://ohmyenter.com/use-constants-in-vue-template/ -->
  <!-- ログイン情報を元にinput内へメアドを表示させる事も考えたけど
  第三者がページを見た際の事を考えると危ないのでやめた。 -->
  <section class="passwordReminder">
    <div class="passwordReminder__content">
      <h1 class="passwordReminder__title">Password Reminder</h1>
      <form @submit.prevent="passwordReminder">
        <h4>メールアドレス</h4>
        <p>ご指定のメールアドレス宛にパスワード再発行用のURLと認証キーをお送り致します。</p>
        <input class="passwordReminder__input" :class="{ errInput: Validation.passwordReminderEmailErrMsg }" type="text" placeholder="ここにメールアドレスを入力" v-model="passwordReminderForm.email">
        <div class="passwordReminder-areaMsg">
          <!-- エラーメッセージの出力 -->
          <span class="#">
            <strong>{{ Validation.passwordReminderEmailErrMsg }}</strong>
          </span>
        </div>
        <button type="submit" class="passwordReminder__content-bottom">
          {{ passwordReminderButton }}
        </button>
      </form>
    </div>
  </section>

</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
import {validHalfNumAlp,validEmail,validEmailDup,validMaxLen,validMinLen} from "./utils/validate"
import {PASSREMINDER_NUM} from "./utils/passwordReminder-number-mappings"
import {PASSWORD_REMINDER_STR} from "./utils/passwordReminder-str-mappings"

export default {
  data () {
    return {
      // 入力情報を保持
      passwordReminderForm: {
        email: null,
      },
      // エラーメッセージを保持
      Validation:{
        passwordReminderEmailErrMsg: null,
        passwordReminderCommonErrMsg: null
      },
      // 各バリテーションの総合的な結果情報の管理
      // (上のValidation内の各プロパティ内にmsgがあるかどうかで判定してもいいけど今後TS導入予定なのでもしかすると
      //「扱う情報の型数を狭めて管理するプロパティの数を増やした方が型制御の恩恵を受けやすいのかな？」
      // と思ったので一旦この形で)
      passwordReminderResult: {
        emailResult: false
      },
      passwordReminderResponseResult: null,
      //連続で登録処理をさせない用
      RegistUser: null,
      isSubmit: false,
      passwordReminderButton: '変更画面へ移動する',
      passwordReminderDate: null,
    }
  },
  methods: {
    async passwordReminder(){
      //Emailのバリデーション
      if (!this.passwordReminderForm.email) {
        //空かどうかのバリテーション
        console.log("(PassReminder)メールアドレスの入力がありません");
        this.Validation.passwordReminderEmailErrMsg = 'メールアドレスを入力してください'
        return false
      } else if(!validEmail(this.passwordReminderForm.email)){
        // メールアドレスの形式確認
        console.log("(PassReminder)メールアドレスの形式が正しくありません");
        this.Validation.passwordReminderEmailErrMsg = 'メールアドレスの形式が正しくありません'
        return false
      } else if(validHalfNumAlp(this.passwordReminderForm.email)){
        //半角英数字のバリテーション
        console.log("(PassReminder)メールアドレスを半角英数で入力してください");
        this.Validation.passwordReminderEmailErrMsg = '半角英数で入力してください'
        return false
      } else if(validMaxLen(this.passwordReminderForm.email,PASSREMINDER_NUM.PASSREMINDER_EMAIL_MAXLEN)){
        //最大文字数のバリテーション
        console.log("(PassReminder)メールアドレスを20文字以内にしてください");
        this.Validation.passwordReminderEmailErrMsg = 'メールアドレスは20文字以内にしてください'
        return false
      } else if(validMinLen(this.passwordReminderForm.email,PASSREMINDER_NUM.PASSREMINDER_EMAIL_MINLEN)){
        //最小文字数のバリテーション
        console.log("(PassReminder)メールアドレスは4文字以上にしてください");
        this.Validation.passwordReminderEmailErrMsg = 'メールアドレスは4文字以上にしてください'
        return false
      } else if(await !validEmailDup(this.passwordReminderForm.email)){
        //メールアドレスが存在するかのバリテーション
        console.log("(PassReminder)入力されたメールアドレスは登録されていません。");
        this.Validation.passwordReminderEmailErrMsg = "入力されたメールアドレスは登録されていません"
        return false
      } else {
        //バリテーションがOKな場合
        console.log("(PassReminder)メールアドレスのバリテーションOKです");
        this.Validation.passwordReminderEmailErrMsg = ""
        this.passwordReminderResult.emailResult = true;
      }

      // バリテーションが通っているかを確認。
      if(this.passwordReminderResult.emailResult === true){
      console.log("パスワード変更用バリテーションOKです。");
        try {
          this.isSubmit = true;
          this.submitButton = '登録中です';
          // ロード画面実装処理
          // this.$store.dispatch("app/setLoading");
          console.log("パスワード変更処理に入りました。");
          const ResponseData = await axios.post('/api/passwordReminder',this.passwordReminderForm);
          //直接代入させるとさせると色々と余計なものも保持する事になる為、分別用の定数を一度経由している。
          this.passwordReminderResponseResult = ResponseData.data[0];

          if(this.passwordReminderResponseResult){
            console.log("認証トークンの発行成功。");
            // 認証トークン関係は10分間のみ保持の想定
            Cookies.set('auth_email',this.passwordReminderResponseResult.auth_email, {expires: 0.01});
            Cookies.set('auth_key',this.passwordReminderResponseResult.auth_key, {expires: 0.01});
            Cookies.set('auth_key_limit',this.passwordReminderResponseResult.auth_key_limit, {expires: 0.01});
            this.$emit("CangePassReminderComponents", PASSWORD_REMINDER_STR.RECEIVE_MODE);
          }else if(!this.passwordReminderDate){
            console.log("認証トークンの発行失敗。");
          }
          } catch (e) {
            console.log("登録処理中に例外エラーが発生しました。");
            console.log(e.message);
            this.Validation.PassReminderCommonErrMsg = '接続に失敗しました。'
          } finally {
          // 必ず実行する処理の記述(try..catch..finally)
          // https://www.javadrive.jp/start/exception/index3.html
          // ローディング画面の終了
          this.passwordReminderResult.emailResult = false;
          this.isSubmitting = false;
          this.isSubmit = false;
          this.submitButton = "登録";
        }
      }
    }
  }
}
</script>

<style lang="scss" scope>
  .passwordReminder{
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
