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
import axios from "axios";
import {validHalfNumAlp,validEmail,validEmailDup,validMaxLen,validMinLen} from "./utils/validate"
import {PASSREMINDER_NUM} from "./utils/passwordReminder-number-mappings"

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
      },
      // 各バリテーションの総合的な結果情報の管理
      // (上のValidation内の各プロパティ内にmsgがあるかどうかで判定してもいいけど今後TS導入予定なのでもしかすると
      //「扱う情報の型数を狭めて管理するプロパティの数を増やした方が型制御の恩恵を受けやすいのかな？」
      // と思ったので一旦この形で)
      passwordReminderResult: {
        emailResult: false
      },
      //連続で登録処理をさせない用
      RegistUser: null,
      isSubmit: false,
      passwordReminderButton: '変更画面へ移動する',
      passwordReminderDate: null
    }
  },
  methods: {
    async passwordReminder(){
      //Emailのバリデーション
      if (!this.passwordReminderForm.email) {
        //空かどうかのバリテーション
        console.log("(PassReminder)メールアドレスの入力がありません");
        this.Validation.passwordReminderEmailErrMsg = 'メールアドレスを入力してください'

      } else if(!validEmail(this.passwordReminderForm.email)){
        // メールアドレスの形式確認
        console.log("(PassReminder)メールアドレスの形式が正しくありません");
        this.Validation.passwordReminderEmailErrMsg = 'メールアドレスの形式が正しくありません'

      } else if(validHalfNumAlp(this.passwordReminderForm.email)){
        //半角英数字のバリテーション
        console.log("(PassReminder)メールアドレスを半角英数で入力してください");
        this.Validation.passwordReminderEmailErrMsg = '半角英数で入力してください'

      } else if(validMaxLen(this.passwordReminderForm.email,PASSREMINDER_NUM.PASSREMINDER_EMAIL_MAXLEN)){
        //最大文字数のバリテーション
        console.log("(PassReminder)メールアドレスを20文字以内にしてください");
        this.Validation.passwordReminderEmailErrMsg = 'メールアドレスは20文字以内にしてください'

      } else if(validMinLen(this.passwordReminderForm.email,PASSREMINDER_NUM.PASSREMINDER_EMAIL_MINLEN)){
        //最小文字数のバリテーション
        console.log("(PassReminder)メールアドレスは4文字以上にしてください");
        this.Validation.passwordReminderEmailErrMsg = 'メールアドレスは4文字以上にしてください'
      }
      // else if(await validEmailDup(this.passwordReminderForm.email)){
      //   //メールアドレスが存在するかのバリテーション
      //   console.log("(PassReminder)入力されたメールアドレスは登録されていません。");
      //   this.Validation.passwordReminderEmailErrMsg = "入力されたメールアドレスは登録されていません"
      // }
      else {
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
            if (this.passwordReminderResult.emailResult === false){
              console.log("登録内容にエラーがありました。");
              this.Validation.PASSREMINDERCommonErrMsg = '登録内容にエラーがありました。'
              this.isSubmit = false;
              this.submitButton = "登録";
              return false;
            }else if(this.passwordReminderResult.emailResult === true){
              // ロード画面実装処理
              // this.$store.dispatch("app/setLoading");
              console.log("パスワード変更処理に入りました。");
              this.passwordReminderDate = await axios.post('/api/passwordReminder',this.passwordReminderForm);

              if(this.passwordReminderDate){
                console.log("パスワード変更処理一部成功。");
                console.log(this.passwordReminderDate);
              }else if(this.passwordReminderDate === false){
                console.log("パスワード変更処理失敗。");
                console.log(this.passwordReminderDate);
              }

              // ==========
              // console.log('レスポンス内容'.RegistUser);
              // // ユーザー情報管理
              // // Cookieにログイン時刻とIDと権限情報挿入。
              // // プロパティ内のデータの取得が出来ない時はVueDevToolでデータの階層を確認する。
              // Cookies.set('user_id',this.RegistUser.data.id, {expires: 30});
              // Cookies.set('roll',this.RegistUser.data.roll, {expires: 30});
              // Cookies.set('login_date', Date.now(), {expires: 30});
              // Cookies.set('login_limit',Date.now()+this.sesLimit, {expires: 30});
              // this.$store.dispatch("users/setLoginUserInfo");
              // // マイページへ飛ばすパスを書く。
              // this.$router.push('/mypage')

            }
          } catch (e) {
            console.log("登録処理中に例外エラーが発生しました。");
            this.Validation.PassReminderCommonErrMsg = '接続に失敗しました。'
            this.passwordReminderResult.emailResult = false;
          } finally {
            // 必ず実行する処理の記述(try..catch..finally)
            // https://www.javadrive.jp/start/exception/index3.html
            // ローディング画面の終了
            this.isSubmitting = false;
            this.isSubmit = false;
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
