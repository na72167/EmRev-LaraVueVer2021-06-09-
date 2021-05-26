<template>

  <section class="revcrReviewCompanyRegistration">
    <div class="revcrReviewCompanyRegistration__content">
      <div class="revcrReviewCompanyRegistration__title">Review Company Registration</div>

      <div class="revcrReviewCompanyRegistration__infoWrap">

        <div class="#">
          <!-- 接続エラー等のメッセージをここに出力させる。 -->
          <span class="#">
            <strong>{{ Validation.applyCompanyCommonErrMsg }}</strong>
          </span>
        </div>

        <form @submit.prevent="applyCompany">
          <div class="revcrReviewCompanyRegistration__inputComp">会社名
            <input :class="{ errInput: Validation.companyNameErrMsg}" v-model="applyCompanyForm.companyName" type="text" placeholder="入力してください">
            <div class="revcrReviewCompany-areaMsg">
              <span class="#">
                <strong>{{ Validation.companyNameErrMsg }}</strong>
              </span>
            </div>
          </div>

          <div class="">
            <div class="">代表者
              <input :class="{ errInput: Validation.representativeErrMsg}" v-model="applyCompanyForm.representative" type="text" placeholder="入力してください">
              <div class="revcrReviewCompany-areaMsg">
                <span class="#">
                  <strong>{{ Validation.representativeErrMsg }}</strong>
                </span>
              </div>
            </div>

            <div class="">所在地
              <input :class="{ errInput: Validation.locationErrMsg}" v-model="applyCompanyForm.location" type="text" placeholder="入力してください">
              <div class="revcrReviewCompany-areaMsg">
              <span class="#">
                <strong>{{ Validation.locationErrMsg }}</strong>
              </span>
            </div>
            </div>
          </div>

          <div class="">
            <div class="">業界
              <input :class="{ errInput: Validation.industryErrMsg}" v-model="applyCompanyForm.industry" type="text" placeholder="入力してください">
              <div class="revcrReviewCompany-areaMsg">
                <span class="#">
                  <strong>{{ Validation.industryErrMsg }}</strong>
                </span>
              </div>
            </div>
            <div class="">設立年度
              <input :class="{ errInput: Validation.yearOfEstablishmentErrMsg}" v-model="applyCompanyForm.yearOfEstablishment" type="text" placeholder="入力してください">
              <div class="revcrReviewCompany-areaMsg">
                <span class="#">
                  <strong>{{ Validation.yearOfEstablishmentErrMsg }}</strong>
                </span>
              </div>
            </div>
          </div>

          <div class="">
            <div class="">上場年
              <input :class="{ errInput: Validation.listedYearErrMsg}" v-model="applyCompanyForm.listedYear" type="text" placeholder="入力してください">
              <div class="revcrReviewCompany-areaMsg">
                <span class="#">
                  <strong>{{ Validation.listedYearErrMsg }}</strong>
                </span>
              </div>
            </div>

            <div class="">従業員数
              <input :class="{ errInput: Validation.numberOfEmployeesErrMsg}" v-model="applyCompanyForm.numberOfEmployees" type="text" placeholder="入力してください">
              <div class="revcrReviewCompany-areaMsg">
                <span class="#">
                  <strong>{{ Validation.numberOfEmployeesErrMsg }}</strong>
                </span>
              </div>
            </div>
          </div>

          <div class="">
            <div class="">平均年収
              <input :class="{ errInput: Validation.averageAnnualIncomeErrMsg}" v-model="applyCompanyForm.averageAnnualIncome" type="text" placeholder="入力してください">
              <div class="revcrReviewCompany-areaMsg">
                <span class="#">
                  <strong>{{ Validation.averageAnnualIncomeErrMs }}</strong>
                </span>
              </div>
            </div>

            <div class="">平均年齢
              <input :class="{ errInput: Validation.averageAgeErrMsg}" v-model="applyCompanyForm.averageAge" type="text" placeholder="入力してください">
              <div class="revcrReviewCompany-areaMsg">
                <span class="#">
                  <strong>{{ Validation.averageAgeErrMsg }}</strong>
                </span>
              </div>
            </div>
          </div>

          <div>
            <div>
              <button type="submit" class="">
                  {{ cancelButton }}
              </button>
            </div>
            <div>
              <button type="submit" class="">
                  {{ applyCompanyButton }}
              </button>
            </div>
          </div>
        </form>

      </div>

    </div>
  </section>

</template>

<script>
import { mapState } from "vuex";
import { validHalfNumAlp,validEmail,validEmailDup,validMaxLen,validMinLen } from "./utils/validate"
import { APPLYCOMPANY_NUM } from "./utils/applyCompany-mappings"

export default {
  data () {
    return {
      // 入力情報を保持
      applyCompanyForm: {
        companyName: null,
        representative: null,
        location: null,
        industry: null,
        yearOfEstablishment: null,
        listedYear: null,
        numberOfEmployees: null,
        averageAnnualIncome: null,
        averageAge: null
      },
      // エラーメッセージを保持
      Validation:{
        companyNameErrMsg: null,
        representativeErrMsg:null,
        locationErrMsg:null,
        industryErrMsg:null,
        yearOfEstablishmentErrMsg:null,
        listedYearErrMsg:null,
        numberOfEmployeesErrMsg:null,
        averageAnnualIncomeErrMsg:null,
        averageAgeErrMsg:null,
        applyCompanyCommonErrMsg: null
      },
      // 各バリテーションの総合的な結果情報の管理
      // (上のValidation内の各プロパティ内にmsgがあるかどうかで判定してもいいけど今後TS導入予定なのでもしかすると
      //「扱う情報の型数を狭めて管理するプロパティの数を増やした方が型制御の恩恵を受けやすいのかな？」
      // と思ったので一旦この形で)
      applyCompanyFormResult: {
        companyNameResult: false,
        representativeResult:false,
        locationResult:false,
        industryResult:false,
        yearOfEstablishmentResult:false,
        listedYearResult:false,
        numberOfEmployeesResult:false,
        averageAnnualIncomeResult:false,
        averageAgeResult:false,
      },
      //連続で登録処理をさせない用
      isSubmit: false,
      cancelButton: 'キャンセル',
      applyCompanyButton: '申請する',
      RegistUser: null,
      sesLimit: null,
      debug: null,
    }
  },
  methods: {

    async applyCompany(){

      //会社名
      if (!this.applyCompanyForm.companyName) {
        //未入力チェック
        console.log("(applyCompany)会社名が未入力です");
        this.Validation.companyNameErrMsg = '会社名が未入力です'
        return false
      } else if(!validHalfNumAlp(this.applyCompanyForm.companyName)){
        // 半角英数時チェック
        console.log("(applyCompany)会社名は半角英数字で入力してください");
        this.Validation.companyNameErrMsg = '会社名は半角英数字で入力してください'
        return false
      } else if(validMaxLen(this.applyCompanyForm.companyName,APPLYCOMPANY_NUM.COMPANYNAME_MAXLEN)){
        // 最大文字数チェック
        console.log("(applyCompany)会社名は20文字以内にしてください");
        this.Validation.companyNameErrMsg = '会社名は20文字以内にしてください'
        return false
      } else if(validMinLen(this.applyCompanyForm.companyName,APPLYCOMPANY_NUM.COMPANYNAME_MINLEN)){
        // 最小文字数チェック
        console.log("(applyCompany)会社名は最小4文字以内にしてください");
        this.Validation.companyNameErrMsg = '会社名は最小4文字以上にしてください'
        return false
      } else {
        //バリテーションがOKな場合
        console.log("(applyCompany)会社名のバリテーションOKです");
        //初期化
        this.Validation.companyNameErrMsg = ""
        //結果の出力
        this.applyCompanyFormResult.companyNameResult = true;
      }

      //代表者欄
      if (!this.applyCompanyForm.representative) {
        //未入力チェック
        console.log("(applyCompany)代表者欄が未入力です。");
        this.Validation.representativeErrMsg = '代表者欄が未入力です'
        return false
      } else if(!validHalfNumAlp(this.applyCompanyForm.representative)){
        // 半角英数時チェック
        console.log("(applyCompany)代表者欄は半角英数字で入力してください");
        this.Validation.representativeErrMsg = '代表者欄は半角英数字で入力してください'
        return false
      } else if(validMaxLen(this.applyCompanyForm.representative,APPLYCOMPANY_NUM.REPRESENTATIVE_MAXLEN)){
        // 最大文字数チェック
        console.log("(applyCompany)代表者欄は20文字以内にしてください");
        this.Validation.representativeErrMsg = '代表者欄は20文字以内にしてください'
        return false
      } else if(validMinLen(this.applyCompanyForm.representative,APPLYCOMPANY_NUM.REPRESENTATIVE_MINLEN)){
        // 最小文字数チェック
        console.log("(applyCompany)代表者欄は最小4文字以内にしてください");
        this.Validation.representativeErrMsg = '代表者欄は最小4文字以上にしてください'
        return false
      } else {
        //バリテーションがOKな場合
        console.log("(applyCompany)代表者欄のバリテーションOKです");
        //初期化
        this.Validation.representativeErrMsg = "代表者欄のバリテーションOKです"
        //結果の出力
        this.applyCompanyFormResult.representativeResult = true;
      }

      //所在地欄
      if (!this.applyCompanyForm.location) {
        //未入力チェック
        console.log("(applyCompany)所在地欄が未入力です。");
        this.Validation.locationErrMsg = '所在地欄が未入力です'
        return false
      } else if(!validHalfNumAlp(this.applyCompanyForm.location)){
        // 半角英数時チェック
        console.log("(applyCompany)所在地欄は半角英数字で入力してください");
        this.Validation.locationErrMsg = '所在地欄は半角英数字で入力してください'
        return false
      } else if(validMaxLen(this.applyCompanyForm.location,APPLYCOMPANY_NUM.LOCATION_MAXLEN)){
        // 最大文字数チェック
        console.log("(applyCompany)所在地欄は20文字以内にしてください");
        this.Validation.locationErrMsg = '所在地欄は20文字以内にしてください'
        return false
      } else if(validMinLen(this.applyCompanyForm.location,APPLYCOMPANY_NUM.LOCATION_MINLEN)){
        // 最小文字数チェック
        console.log("(applyCompany)所在地欄は最小4文字以上にしてください");
        this.Validation.locationErrMsg = '所在地欄は最小4文字以上にしてください'
        return false
      } else {
        //バリテーションがOKな場合
        console.log("(applyCompany)所在地欄のバリテーションOKです");
        //初期化
        this.Validation.locationErrMsg = ""
        //結果の出力
        this.applyCompanyFormResult.locationResult = true;
      }

      //業界欄
      if (!this.applyCompanyForm.industry) {
        //未入力チェック
        console.log("(applyCompany)業界欄が未入力です");
        this.Validation.industryErrMsg = '業界欄が未入力です'
        return false
      } else if(!validHalfNumAlp(this.applyCompanyForm.industry)){
        // 半角英数時チェック
        console.log("(applyCompany)業界欄は半角英数字で入力してください");
        this.Validation.industryErrMsg = '業界欄は半角英数字で入力してください'
        return false
      } else if(validMaxLen(this.applyCompanyForm.industry,APPLYCOMPANY_NUM.INDUSTRY_MAXLEN)){
        // 最大文字数チェック
        console.log("(applyCompany)業界欄は20文字以内にしてください");
        this.Validation.industryErrMsg = '業界欄は20文字以内にしてください'
        return false
      } else if(validMinLen(this.applyCompanyForm.industry,APPLYCOMPANY_NUM.INDUSTRY_MINLEN)){
        // 最小文字数チェック
        console.log("(applyCompany)業界欄は最小4文字以上にしてください");
        this.Validation.industryErrMsg = '業界欄は最小4文字以上にしてください'
        return false
      } else {
        //バリテーションがOKな場合
        console.log("(applyCompany)業界欄のバリテーションOKです");
        //初期化
        this.Validation.industryErrMsg = ""
        //結果の出力
        this.applyCompanyFormResult.industryResult = true;
      }

      //設立年度欄
      if (!this.applyCompanyForm.yearOfEstablishment) {
        //未入力チェック
        console.log("(applyCompany)設立年度欄が未入力です");
        this.Validation.yearOfEstablishmentErrMsg = '設立年度欄が未入力です'
        return false
      } else if(!validHalfNumAlp(this.applyCompanyForm.yearOfEstablishment)){
        // 半角英数時チェック
        console.log("(applyCompany)設立年度欄は半角英数字で入力してください");
        this.Validation.yearOfEstablishmentErrMsg = '設立年度欄は半角英数字で入力してください'
        return false
      } else {
        //バリテーションがOKな場合
        console.log("(applyCompany)設立年度欄のバリテーションOKです");
        //初期化
        this.Validation.yearOfEstablishmentErrMsg = ""
        //結果の出力
        this.applyCompanyFormResult.yearOfEstablishmentResult = true;
      }

      //上場年
      if (!this.applyCompanyForm.listedYear) {
        //未入力チェック
        console.log("(applyCompany)設立年度欄が未入力です");
        this.Validation.listedYearErrMsg = '設立年度欄が未入力です'
        return false
      } else if(!validHalfNumAlp(this.applyCompanyForm.listedYear)){
        // 半角英数時チェック
        console.log("(applyCompany)設立年度欄は半角英数字で入力してください");
        this.Validation.listedYearErrMsg = '設立年度欄は半角英数字で入力してください'
        return false
      } else {
        //バリテーションがOKな場合
        console.log("(applyCompany)設立年度欄のバリテーションOKです");
        //初期化
        this.Validation.listedYearErrMsg = ""
        //結果の出力
        this.applyCompanyFormResult.listedYearResult = true;
      }

      //従業員数欄
      if (!this.applyCompanyForm.numberOfEmployees) {
        //未入力チェック
        console.log("(applyCompany)従業員数欄が未入力です");
        this.Validation.numberOfEmployeesErrMsg = '従業員数欄が未入力です'
        return false
      } else if(!validHalfNumAlp(this.applyCompanyForm.numberOfEmployees)){
        // 半角英数時チェック
        console.log("(applyCompany)従業員数欄は半角英数字で入力してください");
        this.Validation.numberOfEmployeesErrMsg = '従業員数欄は半角英数字で入力してください'
        return false
      } else {
        //バリテーションがOKな場合
        console.log("(applyCompany)従業員数欄のバリテーションOKです");
        //初期化
        this.Validation.numberOfEmployeesErrMsg = ""
        //結果の出力
        this.applyCompanyFormResult.numberOfEmployeesResult = true;
      }

      //平均年収
      if (!this.applyCompanyForm.averageAnnualIncome) {
        //未入力チェック
        console.log("(applyCompany)平均年収欄が未入力です。");
        this.Validation.averageAnnualIncomeErrMsg = ''
        return false
      } else if(!validHalfNumAlp(this.applyCompanyForm.averageAnnualIncome)){
        // 半角英数時チェック
        console.log("(applyCompany)平均年収は半角英数字で入力してください");
        this.Validation.averageAnnualIncomeErrMsg = '平均年収欄が未入力です。'
        return false
      } else {
        //バリテーションがOKな場合
        console.log("(applyCompany)平均年収のバリテーションOKです");
        //初期化
        this.Validation.averageAnnualIncomeErrMsg = ""
        //結果の出力
        this.applyCompanyFormResult.averageAnnualIncomeResult = true;
      }

      //平均年齢
      if (!this.applyCompanyForm.averageAge) {
        //未入力チェック
        console.log("(applyCompany)平均年齢欄が未入力です");
        this.Validation.averageAgeErrMsg = '平均年齢欄が未入力です'
        return false
      } else if(!validHalfNumAlp(this.applyCompanyForm.averageAge)){
        // 半角英数時チェック
        console.log("(applyCompany)平均年齢は半角英数字で入力してください");
        this.Validation.averageAgeErrMsg = '平均年齢は半角英数字で入力してください'
        return false
      } else {
        //バリテーションがOKな場合
        console.log("(applyCompany)平均年齢のバリテーションOKです");
        //初期化
        this.Validation.averageAgeErrMsg = ""
        //結果の出力
        this.applyCompanyFormResult.averageAgeResult = true;
      }

      // バリテーションが通っているかを確認。
      if(this.applyCompanyFormResult.companyNameResult === true
        && this.applyCompanyFormResult.representativeResult === true
        && this.applyCompanyFormResult.locationResult === true
        && this.applyCompanyFormResult.industryResult === true
        && this.applyCompanyFormResult.yearOfEstablishmentResult === true
        && this.applyCompanyFormResult.listedYearResult === true
        && this.applyCompanyFormResult.numberOfEmployeesResult === true
        && this.applyCompanyFormResult.averageAnnualIncomeResult === true
        && this.applyCompanyFormResult.averageAgeResult === true){
        console.log("会社登録申請のバリテーションOKです。");

        try {

          this.isSubmit = true;
          this.submitButton = '登録中です';
          // ロード画面実装処理
          // this.$store.dispatch("app/setLoading");
          this.Validation = "";
          console.log("登録処理に入りました。");
          // TODO:ここまだ
          // this.applyCompanyRegist = await axios.post('/api/applyCompany',this.applyCompanyForm);
          console.log('レスポンス内容'.applyCompanyRegist);

          //バリテーション結果の初期化
          this.applyCompanyFormResult.companyNameResult === false;
          this.applyCompanyFormResult.representativeResult === false;
          this.applyCompanyFormResult.locationResult === false;
          this.applyCompanyFormResult.industryResult === false;
          this.applyCompanyFormResult.yearOfEstablishmentResult === false;
          this.applyCompanyFormResult.listedYearResult === false;
          this.applyCompanyFormResult.numberOfEmployeesResult === false;
          this.applyCompanyFormResult.averageAnnualIncomeResult === false;
          this.applyCompanyFormResult.averageAgeResult === false;

        // this.$store.dispatch("users/setLoginUserInfo");
          this.submitButton = "登録";
        // マイページへ飛ばすパスを書く。
        // TODO:フラッシュメッセージで「会社登録申請をしました。」と表示させる。
          this.$router.push(`/mypage/${Cookies.get('user_id')}`)

        } catch (e) {
          console.log("登録処理中に例外エラーが発生しました。");
          this.Validation.applyCompanyCommonErrMsg = '接続に失敗しました。'
          this.applyCompanyFormResult.companyNameResult === false;
          this.applyCompanyFormResult.representativeResult === false;
          this.applyCompanyFormResult.locationResult === false;
          this.applyCompanyFormResult.industryResult === false;
          this.applyCompanyFormResult.yearOfEstablishmentResult === false;
          this.applyCompanyFormResult.listedYearResult === false;
          this.applyCompanyFormResult.numberOfEmployeesResult === false;
          this.applyCompanyFormResult.averageAnnualIncomeResult === false;
          this.applyCompanyFormResult.averageAgeResult === false;
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
  .revcrReviewCompanyRegistration{
    &__content{
      position: relative;
      top: -30px;
      height: 600px;
      width: 1400px;
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      margin: 0 auto;
    }
    &__title{
      padding:20px 0;
      text-align: center;
      font-size: 2rem;
    }
    &__inputComp{
      height: 27px;
      width: 250px;
      margin: 0 auto;
      padding-left: 10px;
      border: 0;
      border-bottom: 1px solid #b4becb;
      &::placeholder{
        font-size: 15px;
      }
      &:last-child{
        margin-bottom: 0px;
      }
      &:focus{
        outline: none;
        border-bottom: 1px solid #0082e6;
      }
    }
    &__infoWrap{
      width: 550px;
      margin: 0 auto;
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
