<template>

  <section class="passwordRreceive"  v-if="this.mode === 'receive'">
    <div class="passwordRreceive__content">
      <h1 class="passrePasswordReminder__title">Password Reminder</h1>
      <form method="post" class="form" @submit.prevent="passwordReceive">
        <p>ご指定のメールアドレスお送りした【パスワード再発行認証】メール内にある「認証キー」をご入力ください。</p>
        <div class="area-msg">
        </div>
        <label class="">
          Email
          <input type="text" name="email" value="">
        </label>
        <div class="area-msg">
        </div>
        <label class="">
          認証キー
          <input type="text" name="token" placeholder="受信した認証キーを入力">
        </label>
        <label class="">
          変更後パスワード
          <input type="text" name="password" placeholder="変更後パスワードを入力">
        </label>
        <div class="area-msg">
        </div>
        <div class="btn-container">
          <input type="submit" class="btn btn-mid" name="send" value="再発行する">
        </div>
      </form>
    </div>
  </section>

</template>

<script>

export default {
  props: {
    mode: {
      type: String,
    }
  },
  async passwordReminder(){
    //Emailのバリデーション
    if (!this.passwordReminderForm.email) {
      //空かどうかのバリテーション
      console.log("(signUp)メールアドレスの入力がありません");
      this.Validation.passwordReminderEmailErrMsg = 'メールアドレスを入力してください'

    } else if(!validEmail(this.passwordReminderForm.email)){
      // メールアドレスの形式確認
      console.log("(signUp)メールアドレスの形式が正しくありません");
      this.Validation.passwordReminderEmailErrMsg = 'メールアドレスの形式が正しくありません'

    } else if(validHalfNumAlp(this.passwordReminderForm.email)){
      //半角英数字のバリテーション
      console.log("(signUp)メールアドレスを半角英数で入力してください");
      this.Validation.passwordReminderEmailErrMsg = '半角英数で入力してください'

    } else if(validMaxLen(this.passwordReminderForm.email,SIGNUP_NUM.SIGNUP_EMAIL_MAXLEN)){
      //最大文字数のバリテーション
      console.log("(signUp)メールアドレスを20文字以内にしてください");
      this.Validation.passwordReminderEmailErrMsg = 'メールアドレスは20文字以内にしてください'

    } else if(validMinLen(this.passwordReminderForm.email,SIGNUP_NUM.SIGNUP_EMAIL_MINLEN)){
      //最小文字数のバリテーション
      console.log("(signUp)メールアドレスは4文字以上にしてください");
      this.Validation.passwordReminderEmailErrMsg = 'メールアドレスは4文字以上にしてください'
    }
    // else if(await validEmailDup(this.passwordReminderForm.email)){
    //   //重複確認のバリテーション
    //   console.log("(signUp)メールアドレスが重複しています");
    //   this.Validation.passwordReminderEmailErrMsg = "メールアドレスが重複しています"
    // }
    else {
      //バリテーションがOKな場合
      console.log("(signUp)メールアドレスのバリテーションOKです");
      this.Validation.passwordReminderEmailErrMsg = ""
      this.passwordReminderResult.emailResult = true;
    }

    // バリテーションが通っているかを確認。
    if(this.passwordReminderResult.emailResult === true){
      console.log("ユーザー登録用バリテーションOKです。");
        try {
          this.isSubmit = true;
          this.submitButton = '登録中です';
          if (this.passwordReminderResult.emailResult === false){
            console.log("登録内容にエラーがありました。");
            this.Validation.signUpCommonErrMsg = '登録内容にエラーがありました。'
            this.isSubmit = false;
            this.submitButton = "登録";
            return false;
          }else if(this.passwordReminderResult.emailResult === true){å
            // ロード画面実装処理
            // this.$store.dispatch("app/setLoading");
            console.log("登録処理に入りました。");
            this.RegistUser = await axios.post('/api/register',this.passwordReminderForm);
            console.log('レスポンス内容'.RegistUser);
            //ユーザー情報管理
            // Cookieにログイン時刻とIDと権限情報挿入。
            // プロパティ内のデータの取得が出来ない時はVueDevToolでデータの階層を確認する。
            Cookies.set('user_id',this.RegistUser.data.id, {expires: 30});
            Cookies.set('roll',this.RegistUser.data.roll, {expires: 30});
            Cookies.set('login_date', Date.now(), {expires: 30});
            Cookies.set('login_limit',Date.now()+this.sesLimit, {expires: 30});
            this.$store.dispatch("users/setLoginUserInfo");
            // マイページへ飛ばすパスを書く。
            this.$router.push('/mypage')
          }
        } catch (e) {
          console.log("登録処理中に例外エラーが発生しました。");
          this.Validation.signUpCommonErrMsg = '接続に失敗しました。'
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
