(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/validate */ "./resources/js/components/applyCompany/utils/validate.js");
/* harmony import */ var _utils_applyCompany_mappings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/applyCompany-mappings */ "./resources/js/components/applyCompany/utils/applyCompany-mappings.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // 入力情報を保持
      applyCompanyForm: {
        company_name: null,
        representative: null,
        location: null,
        industry: null,
        year_of_establishment: null,
        listed_year: null,
        number_of_employees: null,
        average_annual_income: null,
        average_age: null
      },
      // エラーメッセージを保持
      Validation: {
        companyNameErrMsg: null,
        representativeErrMsg: null,
        locationErrMsg: null,
        industryErrMsg: null,
        yearOfEstablishmentErrMsg: null,
        listedYearErrMsg: null,
        numberOfEmployeesErrMsg: null,
        averageAnnualIncomeErrMsg: null,
        averageAgeErrMsg: null,
        applyCompanyCommonErrMsg: null
      },
      // 各バリテーションの総合的な結果情報の管理
      // (上のValidation内の各プロパティ内にmsgがあるかどうかで判定してもいいけど今後TS導入予定なのでもしかすると
      //「扱う情報の型数を狭めて管理するプロパティの数を増やした方が型制御の恩恵を受けやすいのかな？」
      // と思ったので一旦この形で)
      applyCompanyFormResult: {
        companyNameResult: false,
        representativeResult: false,
        locationResult: false,
        industryResult: false,
        yearOfEstablishmentResult: false,
        listedYearResult: false,
        numberOfEmployeesResult: false,
        averageAnnualIncomeResult: false,
        averageAgeResult: false
      },
      //連続で登録処理をさせない用
      isSubmit: false,
      submitButton: '申請する',
      cancelButton: 'キャンセル',
      applyCompanyButton: '申請する',
      RegistUser: null,
      sesLimit: null,
      debug: null
    };
  },
  methods: {
    applyCompany: function applyCompany() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.applyCompanyForm.company_name) {
                  _context.next = 6;
                  break;
                }

                //未入力チェック
                console.log("(applyCompany)会社名が未入力です");
                _this.Validation.companyNameErrMsg = '会社名が未入力です';
                return _context.abrupt("return", false);

              case 6:
                if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validHalfNumAlp"])(_this.applyCompanyForm.company_name)) {
                  _context.next = 12;
                  break;
                }

                // 半角英数時チェック
                console.log("(applyCompany)会社名は半角英数字で入力してください");
                _this.Validation.companyNameErrMsg = '会社名は半角英数字で入力してください';
                return _context.abrupt("return", false);

              case 12:
                if (!Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validMaxLen"])(_this.applyCompanyForm.company_name, _utils_applyCompany_mappings__WEBPACK_IMPORTED_MODULE_5__["APPLYCOMPANY_NUM"].COMPANYNAME_MAXLEN)) {
                  _context.next = 18;
                  break;
                }

                // 最大文字数チェック
                console.log("(applyCompany)会社名は20文字以内にしてください");
                _this.Validation.companyNameErrMsg = '会社名は20文字以内にしてください';
                return _context.abrupt("return", false);

              case 18:
                if (!Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validMinLen"])(_this.applyCompanyForm.company_name, _utils_applyCompany_mappings__WEBPACK_IMPORTED_MODULE_5__["APPLYCOMPANY_NUM"].COMPANYNAME_MINLEN)) {
                  _context.next = 24;
                  break;
                }

                // 最小文字数チェック
                console.log("(applyCompany)会社名は最小4文字以内にしてください");
                _this.Validation.companyNameErrMsg = '会社名は最小4文字以上にしてください';
                return _context.abrupt("return", false);

              case 24:
                //バリテーションがOKな場合
                console.log("(applyCompany)会社名のバリテーションOKです"); //初期化

                _this.Validation.companyNameErrMsg = ""; //結果の出力

                _this.applyCompanyFormResult.companyNameResult = true;

              case 27:
                if (_this.applyCompanyForm.representative) {
                  _context.next = 33;
                  break;
                }

                //未入力チェック
                console.log("(applyCompany)代表者欄が未入力です。");
                _this.Validation.representativeErrMsg = '代表者欄が未入力です';
                return _context.abrupt("return", false);

              case 33:
                if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validHalfNumAlp"])(_this.applyCompanyForm.representative)) {
                  _context.next = 39;
                  break;
                }

                // 半角英数時チェック
                console.log("(applyCompany)代表者欄は半角英数字で入力してください");
                _this.Validation.representativeErrMsg = '代表者欄は半角英数字で入力してください';
                return _context.abrupt("return", false);

              case 39:
                if (!Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validMaxLen"])(_this.applyCompanyForm.representative, _utils_applyCompany_mappings__WEBPACK_IMPORTED_MODULE_5__["APPLYCOMPANY_NUM"].REPRESENTATIVE_MAXLEN)) {
                  _context.next = 45;
                  break;
                }

                // 最大文字数チェック
                console.log("(applyCompany)代表者欄は20文字以内にしてください");
                _this.Validation.representativeErrMsg = '代表者欄は20文字以内にしてください';
                return _context.abrupt("return", false);

              case 45:
                if (!Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validMinLen"])(_this.applyCompanyForm.representative, _utils_applyCompany_mappings__WEBPACK_IMPORTED_MODULE_5__["APPLYCOMPANY_NUM"].REPRESENTATIVE_MINLEN)) {
                  _context.next = 51;
                  break;
                }

                // 最小文字数チェック
                console.log("(applyCompany)代表者欄は最小4文字以内にしてください");
                _this.Validation.representativeErrMsg = '代表者欄は最小4文字以上にしてください';
                return _context.abrupt("return", false);

              case 51:
                //バリテーションがOKな場合
                console.log("(applyCompany)代表者欄のバリテーションOKです"); //初期化

                _this.Validation.representativeErrMsg = ""; //結果の出力

                _this.applyCompanyFormResult.representativeResult = true;

              case 54:
                if (_this.applyCompanyForm.location) {
                  _context.next = 60;
                  break;
                }

                //未入力チェック
                console.log("(applyCompany)所在地欄が未入力です。");
                _this.Validation.locationErrMsg = '所在地欄が未入力です';
                return _context.abrupt("return", false);

              case 60:
                if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validHalfNumAlp"])(_this.applyCompanyForm.location)) {
                  _context.next = 66;
                  break;
                }

                // 半角英数時チェック
                console.log("(applyCompany)所在地欄は半角英数字で入力してください");
                _this.Validation.locationErrMsg = '所在地欄は半角英数字で入力してください';
                return _context.abrupt("return", false);

              case 66:
                if (!Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validMaxLen"])(_this.applyCompanyForm.location, _utils_applyCompany_mappings__WEBPACK_IMPORTED_MODULE_5__["APPLYCOMPANY_NUM"].LOCATION_MAXLEN)) {
                  _context.next = 72;
                  break;
                }

                // 最大文字数チェック
                console.log("(applyCompany)所在地欄は20文字以内にしてください");
                _this.Validation.locationErrMsg = '所在地欄は20文字以内にしてください';
                return _context.abrupt("return", false);

              case 72:
                if (!Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validMinLen"])(_this.applyCompanyForm.location, _utils_applyCompany_mappings__WEBPACK_IMPORTED_MODULE_5__["APPLYCOMPANY_NUM"].LOCATION_MINLEN)) {
                  _context.next = 78;
                  break;
                }

                // 最小文字数チェック
                console.log("(applyCompany)所在地欄は最小4文字以上にしてください");
                _this.Validation.locationErrMsg = '所在地欄は最小4文字以上にしてください';
                return _context.abrupt("return", false);

              case 78:
                //バリテーションがOKな場合
                console.log("(applyCompany)所在地欄のバリテーションOKです"); //初期化

                _this.Validation.locationErrMsg = ""; //結果の出力

                _this.applyCompanyFormResult.locationResult = true;

              case 81:
                if (_this.applyCompanyForm.industry) {
                  _context.next = 87;
                  break;
                }

                //未入力チェック
                console.log("(applyCompany)業界欄が未入力です");
                _this.Validation.industryErrMsg = '業界欄が未入力です';
                return _context.abrupt("return", false);

              case 87:
                if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validHalfNumAlp"])(_this.applyCompanyForm.industry)) {
                  _context.next = 93;
                  break;
                }

                // 半角英数時チェック
                console.log("(applyCompany)業界欄は半角英数字で入力してください");
                _this.Validation.industryErrMsg = '業界欄は半角英数字で入力してください';
                return _context.abrupt("return", false);

              case 93:
                if (!Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validMaxLen"])(_this.applyCompanyForm.industry, _utils_applyCompany_mappings__WEBPACK_IMPORTED_MODULE_5__["APPLYCOMPANY_NUM"].INDUSTRY_MAXLEN)) {
                  _context.next = 99;
                  break;
                }

                // 最大文字数チェック
                console.log("(applyCompany)業界欄は20文字以内にしてください");
                _this.Validation.industryErrMsg = '業界欄は20文字以内にしてください';
                return _context.abrupt("return", false);

              case 99:
                if (!Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validMinLen"])(_this.applyCompanyForm.industry, _utils_applyCompany_mappings__WEBPACK_IMPORTED_MODULE_5__["APPLYCOMPANY_NUM"].INDUSTRY_MINLEN)) {
                  _context.next = 105;
                  break;
                }

                // 最小文字数チェック
                console.log("(applyCompany)業界欄は最小4文字以上にしてください");
                _this.Validation.industryErrMsg = '業界欄は最小4文字以上にしてください';
                return _context.abrupt("return", false);

              case 105:
                //バリテーションがOKな場合
                console.log("(applyCompany)業界欄のバリテーションOKです"); //初期化

                _this.Validation.industryErrMsg = ""; //結果の出力

                _this.applyCompanyFormResult.industryResult = true;

              case 108:
                if (_this.applyCompanyForm.year_of_establishment) {
                  _context.next = 114;
                  break;
                }

                //未入力チェック
                console.log("(applyCompany)設立年度欄が未入力です");
                _this.Validation.yearOfEstablishmentErrMsg = '設立年度欄が未入力です';
                return _context.abrupt("return", false);

              case 114:
                if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validHalfNumAlp"])(_this.applyCompanyForm.year_of_establishment)) {
                  _context.next = 120;
                  break;
                }

                // 半角英数時チェック
                console.log("(applyCompany)設立年度欄は半角英数字で入力してください");
                _this.Validation.yearOfEstablishmentErrMsg = '設立年度欄は半角英数字で入力してください';
                return _context.abrupt("return", false);

              case 120:
                //バリテーションがOKな場合
                console.log("(applyCompany)設立年度欄のバリテーションOKです"); //初期化

                _this.Validation.yearOfEstablishmentErrMsg = ""; //結果の出力

                _this.applyCompanyFormResult.yearOfEstablishmentResult = true;

              case 123:
                if (_this.applyCompanyForm.listed_year) {
                  _context.next = 129;
                  break;
                }

                //未入力チェック
                console.log("(applyCompany)設立年度欄が未入力です");
                _this.Validation.listedYearErrMsg = '設立年度欄が未入力です';
                return _context.abrupt("return", false);

              case 129:
                if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validHalfNumAlp"])(_this.applyCompanyForm.listed_year)) {
                  _context.next = 135;
                  break;
                }

                // 半角英数時チェック
                console.log("(applyCompany)設立年度欄は半角英数字で入力してください");
                _this.Validation.listedYearErrMsg = '設立年度欄は半角英数字で入力してください';
                return _context.abrupt("return", false);

              case 135:
                //バリテーションがOKな場合
                console.log("(applyCompany)設立年度欄のバリテーションOKです"); //初期化

                _this.Validation.listedYearErrMsg = ""; //結果の出力

                _this.applyCompanyFormResult.listedYearResult = true;

              case 138:
                if (_this.applyCompanyForm.number_of_employees) {
                  _context.next = 144;
                  break;
                }

                //未入力チェック
                console.log("(applyCompany)従業員数欄が未入力です");
                _this.Validation.numberOfEmployeesErrMsg = '従業員数欄が未入力です';
                return _context.abrupt("return", false);

              case 144:
                if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validHalfNumAlp"])(_this.applyCompanyForm.number_of_employees)) {
                  _context.next = 150;
                  break;
                }

                // 半角英数時チェック
                console.log("(applyCompany)従業員数欄は半角英数字で入力してください");
                _this.Validation.numberOfEmployeesErrMsg = '従業員数欄は半角英数字で入力してください';
                return _context.abrupt("return", false);

              case 150:
                //バリテーションがOKな場合
                console.log("(applyCompany)従業員数欄のバリテーションOKです"); //初期化

                _this.Validation.numberOfEmployeesErrMsg = ""; //結果の出力

                _this.applyCompanyFormResult.numberOfEmployeesResult = true;

              case 153:
                if (_this.applyCompanyForm.average_annual_income) {
                  _context.next = 159;
                  break;
                }

                //未入力チェック
                console.log("(applyCompany)平均年収欄が未入力です。");
                _this.Validation.averageAnnualIncomeErrMsg = '';
                return _context.abrupt("return", false);

              case 159:
                if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validHalfNumAlp"])(_this.applyCompanyForm.average_annual_income)) {
                  _context.next = 165;
                  break;
                }

                // 半角英数時チェック
                console.log("(applyCompany)平均年収は半角英数字で入力してください");
                _this.Validation.averageAnnualIncomeErrMsg = '平均年収欄が未入力です。';
                return _context.abrupt("return", false);

              case 165:
                //バリテーションがOKな場合
                console.log("(applyCompany)平均年収のバリテーションOKです"); //初期化

                _this.Validation.averageAnnualIncomeErrMsg = ""; //結果の出力

                _this.applyCompanyFormResult.averageAnnualIncomeResult = true;

              case 168:
                if (_this.applyCompanyForm.average_age) {
                  _context.next = 174;
                  break;
                }

                //未入力チェック
                console.log("(applyCompany)平均年齢欄が未入力です");
                _this.Validation.averageAgeErrMsg = '平均年齢欄が未入力です';
                return _context.abrupt("return", false);

              case 174:
                if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validHalfNumAlp"])(_this.applyCompanyForm.average_age)) {
                  _context.next = 180;
                  break;
                }

                // 半角英数時チェック
                console.log("(applyCompany)平均年齢は半角英数字で入力してください");
                _this.Validation.averageAgeErrMsg = '平均年齢は半角英数字で入力してください';
                return _context.abrupt("return", false);

              case 180:
                //バリテーションがOKな場合
                console.log("(applyCompany)平均年齢のバリテーションOKです"); //初期化

                _this.Validation.averageAgeErrMsg = ""; //結果の出力

                _this.applyCompanyFormResult.averageAgeResult = true;

              case 183:
                if (!(_this.applyCompanyFormResult.companyNameResult === true && _this.applyCompanyFormResult.representativeResult === true && _this.applyCompanyFormResult.locationResult === true && _this.applyCompanyFormResult.industryResult === true && _this.applyCompanyFormResult.yearOfEstablishmentResult === true && _this.applyCompanyFormResult.listedYearResult === true && _this.applyCompanyFormResult.numberOfEmployeesResult === true && _this.applyCompanyFormResult.averageAnnualIncomeResult === true && _this.applyCompanyFormResult.averageAgeResult === true)) {
                  _context.next = 224;
                  break;
                }

                console.log("会社登録申請のバリテーションOKです。");
                _context.prev = 185;
                _this.isSubmit = true;
                _this.submitButton = '登録中です'; // ロード画面実装処理
                // this.$store.dispatch("app/setLoading");

                _this.Validation = "";
                console.log("登録処理に入りました。");
                _context.next = 192;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/applyCompany', _this.applyCompanyForm);

              case 192:
                _this.applyCompanyRegist = _context.sent;
                console.log('レスポンス内容'.applyCompanyRegist); //バリテーション結果の初期化

                _this.applyCompanyFormResult.companyNameResult === false;
                _this.applyCompanyFormResult.representativeResult === false;
                _this.applyCompanyFormResult.locationResult === false;
                _this.applyCompanyFormResult.industryResult === false;
                _this.applyCompanyFormResult.yearOfEstablishmentResult === false;
                _this.applyCompanyFormResult.listedYearResult === false;
                _this.applyCompanyFormResult.numberOfEmployeesResult === false;
                _this.applyCompanyFormResult.averageAnnualIncomeResult === false;
                _this.applyCompanyFormResult.averageAgeResult === false; // this.$store.dispatch("users/setLoginUserInfo");

                _this.submitButton = "登録"; // マイページへ飛ばすパスを書く。
                // TODO:フラッシュメッセージで「会社登録申請をしました。」と表示させる。

                _this.$router.push("/mypage/".concat(js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('user_id')));

                _context.next = 220;
                break;

              case 207:
                _context.prev = 207;
                _context.t0 = _context["catch"](185);
                console.log("登録処理中に例外エラーが発生しました。");
                _this.Validation.applyCompanyCommonErrMsg = "接続に失敗しました。";
                _this.applyCompanyFormResult.companyNameResult === false;
                _this.applyCompanyFormResult.representativeResult === false;
                _this.applyCompanyFormResult.locationResult === false;
                _this.applyCompanyFormResult.industryResult === false;
                _this.applyCompanyFormResult.yearOfEstablishmentResult === false;
                _this.applyCompanyFormResult.listedYearResult === false;
                _this.applyCompanyFormResult.numberOfEmployeesResult === false;
                _this.applyCompanyFormResult.averageAnnualIncomeResult === false;
                _this.applyCompanyFormResult.averageAgeResult === false;

              case 220:
                _context.prev = 220;
                // 必ず実行する処理の記述(try..catch..finally)
                // https://www.javadrive.jp/start/exception/index3.html
                // ローディング画面の終了
                _this.isSubmitting = false;
                _this.isSubmit = false;
                return _context.finish(220);

              case 224:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[185, 207, 220, 224]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/intro/Intro.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/intro/Intro.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ApplyCompany.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ApplyCompany.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_intro_Intro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/intro/Intro */ "./resources/js/components/intro/Intro.vue");
/* harmony import */ var _components_applyCompany_ApplyCompany__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/applyCompany/ApplyCompany */ "./resources/js/components/applyCompany/ApplyCompany.vue");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Intro: _components_intro_Intro__WEBPACK_IMPORTED_MODULE_0__["default"],
    ApplyCompany: _components_applyCompany_ApplyCompany__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".revcrReviewCompanyRegistration__content {\n  position: relative;\n  top: -30px;\n  height: 600px;\n  width: 1400px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  margin: 0 auto;\n}\n.revcrReviewCompanyRegistration__title {\n  padding: 20px 0;\n  text-align: center;\n  font-size: 2rem;\n}\n.revcrReviewCompanyRegistration__inputComp {\n  height: 27px;\n  width: 250px;\n  margin: 0 auto;\n  padding-left: 10px;\n  border: 0;\n  border-bottom: 1px solid #b4becb;\n}\n.revcrReviewCompanyRegistration__inputComp::-moz-placeholder {\n  font-size: 15px;\n}\n.revcrReviewCompanyRegistration__inputComp:-ms-input-placeholder {\n  font-size: 15px;\n}\n.revcrReviewCompanyRegistration__inputComp::placeholder {\n  font-size: 15px;\n}\n.revcrReviewCompanyRegistration__inputComp:last-child {\n  margin-bottom: 0px;\n}\n.revcrReviewCompanyRegistration__inputComp:focus {\n  outline: none;\n  border-bottom: 1px solid #0082e6;\n}\n.revcrReviewCompanyRegistration__infoWrap {\n  width: 550px;\n  margin: 0 auto;\n}\n.revcrReviewCompanyRegistration__bottom-return {\n  padding: 10px 45px;\n  background-color: #fff;\n  color: #06D1EC;\n  border: none;\n  border: 1px solid #06D1EC;\n}\n.revcrReviewCompanyRegistration__bottom-next {\n  padding: 10px 47px;\n  margin-left: 50px;\n  background-color: #06D1EC;\n  color: #fff;\n  border: none;\n  border: 1px solid #fff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=template&id=7df00a18&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=template&id=7df00a18& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "revcrReviewCompanyRegistration" }, [
    _c("div", { staticClass: "revcrReviewCompanyRegistration__content" }, [
      _c("div", { staticClass: "revcrReviewCompanyRegistration__title" }, [
        _vm._v("Review Company Registration")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "revcrReviewCompanyRegistration__infoWrap" }, [
        _c("div", { staticClass: "#" }, [
          _c("span", { staticClass: "#" }, [
            _c("strong", [
              _vm._v(_vm._s(_vm.Validation.applyCompanyCommonErrMsg))
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.applyCompany($event)
              }
            }
          },
          [
            _c(
              "div",
              { staticClass: "revcrReviewCompanyRegistration__inputComp" },
              [
                _vm._v("会社名\n          "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.applyCompanyForm.company_name,
                      expression: "applyCompanyForm.company_name"
                    }
                  ],
                  class: { errInput: _vm.Validation.companyNameErrMsg },
                  attrs: { type: "text", placeholder: "入力してください" },
                  domProps: { value: _vm.applyCompanyForm.company_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.applyCompanyForm,
                        "company_name",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "revcrReviewCompany-areaMsg" }, [
                  _c("span", { staticClass: "#" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm.Validation.companyNameErrMsg))
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", {}, [
              _c("div", {}, [
                _vm._v("代表者\n            "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.applyCompanyForm.representative,
                      expression: "applyCompanyForm.representative"
                    }
                  ],
                  class: { errInput: _vm.Validation.representativeErrMsg },
                  attrs: { type: "text", placeholder: "入力してください" },
                  domProps: { value: _vm.applyCompanyForm.representative },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.applyCompanyForm,
                        "representative",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "revcrReviewCompany-areaMsg" }, [
                  _c("span", { staticClass: "#" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm.Validation.representativeErrMsg))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", {}, [
                _vm._v("所在地\n            "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.applyCompanyForm.location,
                      expression: "applyCompanyForm.location"
                    }
                  ],
                  class: { errInput: _vm.Validation.locationErrMsg },
                  attrs: { type: "text", placeholder: "入力してください" },
                  domProps: { value: _vm.applyCompanyForm.location },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.applyCompanyForm,
                        "location",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "revcrReviewCompany-areaMsg" }, [
                  _c("span", { staticClass: "#" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm.Validation.locationErrMsg))
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c("div", {}, [
                _vm._v("業界\n            "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.applyCompanyForm.industry,
                      expression: "applyCompanyForm.industry"
                    }
                  ],
                  class: { errInput: _vm.Validation.industryErrMsg },
                  attrs: { type: "text", placeholder: "入力してください" },
                  domProps: { value: _vm.applyCompanyForm.industry },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.applyCompanyForm,
                        "industry",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "revcrReviewCompany-areaMsg" }, [
                  _c("span", { staticClass: "#" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm.Validation.industryErrMsg))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", {}, [
                _vm._v("設立年度\n            "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.applyCompanyForm.year_of_establishment,
                      expression: "applyCompanyForm.year_of_establishment"
                    }
                  ],
                  class: { errInput: _vm.Validation.yearOfEstablishmentErrMsg },
                  attrs: { type: "text", placeholder: "入力してください" },
                  domProps: {
                    value: _vm.applyCompanyForm.year_of_establishment
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.applyCompanyForm,
                        "year_of_establishment",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "revcrReviewCompany-areaMsg" }, [
                  _c("span", { staticClass: "#" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm.Validation.yearOfEstablishmentErrMsg))
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c("div", {}, [
                _vm._v("上場年\n            "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.applyCompanyForm.listed_year,
                      expression: "applyCompanyForm.listed_year"
                    }
                  ],
                  class: { errInput: _vm.Validation.listedYearErrMsg },
                  attrs: { type: "text", placeholder: "入力してください" },
                  domProps: { value: _vm.applyCompanyForm.listed_year },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.applyCompanyForm,
                        "listed_year",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "revcrReviewCompany-areaMsg" }, [
                  _c("span", { staticClass: "#" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm.Validation.listedYearErrMsg))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", {}, [
                _vm._v("従業員数\n            "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.applyCompanyForm.number_of_employees,
                      expression: "applyCompanyForm.number_of_employees"
                    }
                  ],
                  class: { errInput: _vm.Validation.numberOfEmployeesErrMsg },
                  attrs: { type: "text", placeholder: "入力してください" },
                  domProps: { value: _vm.applyCompanyForm.number_of_employees },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.applyCompanyForm,
                        "number_of_employees",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "revcrReviewCompany-areaMsg" }, [
                  _c("span", { staticClass: "#" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm.Validation.numberOfEmployeesErrMsg))
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c("div", {}, [
                _vm._v("平均年収\n            "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.applyCompanyForm.average_annual_income,
                      expression: "applyCompanyForm.average_annual_income"
                    }
                  ],
                  class: { errInput: _vm.Validation.averageAnnualIncomeErrMsg },
                  attrs: { type: "text", placeholder: "入力してください" },
                  domProps: {
                    value: _vm.applyCompanyForm.average_annual_income
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.applyCompanyForm,
                        "average_annual_income",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "revcrReviewCompany-areaMsg" }, [
                  _c("span", { staticClass: "#" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm.Validation.averageAnnualIncomeErrMs))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", {}, [
                _vm._v("平均年齢\n            "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.applyCompanyForm.average_age,
                      expression: "applyCompanyForm.average_age"
                    }
                  ],
                  class: { errInput: _vm.Validation.averageAgeErrMsg },
                  attrs: { type: "text", placeholder: "入力してください" },
                  domProps: { value: _vm.applyCompanyForm.average_age },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.applyCompanyForm,
                        "average_age",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "revcrReviewCompany-areaMsg" }, [
                  _c("span", { staticClass: "#" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm.Validation.averageAgeErrMsg))
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("div", [
                _c("button", { attrs: { type: "submit" } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.cancelButton) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("button", { attrs: { type: "submit" } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.submitButton) +
                      "\n            "
                  )
                ])
              ])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "intro" }, [
      _c("div", { staticClass: "intro__wrap" }, [
        _c("div", { staticClass: "intro__text" }, [
          _c("div", { staticClass: "intro__text-title" }, [
            _c("span", { staticClass: "intro__text-sub" })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ApplyCompany.vue?vue&type=template&id=2c1bf24e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ApplyCompany.vue?vue&type=template&id=2c1bf24e& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("Intro"), _vm._v(" "), _c("ApplyCompany")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/applyCompany/ApplyCompany.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/applyCompany/ApplyCompany.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApplyCompany_vue_vue_type_template_id_7df00a18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplyCompany.vue?vue&type=template&id=7df00a18& */ "./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=template&id=7df00a18&");
/* harmony import */ var _ApplyCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplyCompany.vue?vue&type=script&lang=js& */ "./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ApplyCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ApplyCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ApplyCompany_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ApplyCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApplyCompany_vue_vue_type_template_id_7df00a18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApplyCompany_vue_vue_type_template_id_7df00a18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/applyCompany/ApplyCompany.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplyCompany.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=template&id=7df00a18&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=template&id=7df00a18& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_template_id_7df00a18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplyCompany.vue?vue&type=template&id=7df00a18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/applyCompany/ApplyCompany.vue?vue&type=template&id=7df00a18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_template_id_7df00a18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_template_id_7df00a18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/applyCompany/utils/applyCompany-mappings.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/applyCompany/utils/applyCompany-mappings.js ***!
  \*****************************************************************************/
/*! exports provided: APPLYCOMPANY_NUM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLYCOMPANY_NUM", function() { return APPLYCOMPANY_NUM; });
// TODO: utilファイルをまとめる。
var APPLYCOMPANY_NUM = {
  COMPANYNAME_MAXLEN: 20,
  COMPANYNAME_MINLEN: 4,
  REPRESENTATIVE_MAXLEN: 20,
  REPRESENTATIVE_MINLEN: 4,
  LOCATION_MAXLEN: 20,
  LOCATION_MINLEN: 4,
  INDUSTRY_MAXLEN: 20,
  INDUSTRY_MINLEN: 4,
  SES_LIMIT: 604800
};

/***/ }),

/***/ "./resources/js/components/applyCompany/utils/validate.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/applyCompany/utils/validate.js ***!
  \****************************************************************/
/*! exports provided: validLowerCase, validUpperCase, validAlphabets, validEmail, validEmailDup, validPassword, validNum, validNonLeadingZero, validZip, validTel, validHalfNumAlp, validNumber, validWhiteSpace, validMaxLen, validMinLen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validLowerCase", function() { return validLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validUpperCase", function() { return validUpperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validAlphabets", function() { return validAlphabets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validEmail", function() { return validEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validEmailDup", function() { return validEmailDup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPassword", function() { return validPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validNum", function() { return validNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validNonLeadingZero", function() { return validNonLeadingZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validZip", function() { return validZip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validTel", function() { return validTel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validHalfNumAlp", function() { return validHalfNumAlp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validNumber", function() { return validNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validWhiteSpace", function() { return validWhiteSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMaxLen", function() { return validMaxLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMinLen", function() { return validMinLen; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/**
 * 小文字の文字列か検証するvalidHalfNumAlp
 * @return {Boolean}
 * @param {String} str
 */

function validLowerCase(str) {
  var reg = /^[a-z]+$/;
  return reg.test(str);
}
/**
 * 大文字の文字列を検証する
 * @return {Boolean}
 * @param {String} str
 */

function validUpperCase(str) {
  var reg = /^[A-Z]+$/;
  return reg.test(str);
}
/**
 * 文字列にアルファベットだけが含まれているかどうかを調べる
 * @param {String} str
 * @param {Boolean}
 */

function validAlphabets(str) {
  var reg = /^[A-Za-z]+$/;
  return reg.test(str);
}
/**
 * メールアドレスの検証
 * @param {String} email
 * @return {Boolean}
 */

function validEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
/**
 * メールアドレスの重複検証
 * @param {String} email
 * @return {Boolean}
 */

function validEmailDup(_x) {
  return _validEmailDup.apply(this, arguments);
}
/**
 * パスワードの検証
 * @param {String} password
 * @return {Boolean}
 */

function _validEmailDup() {
  _validEmailDup = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email) {
    var query, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // request内でのキー割り振り
            query = {
              'email': email
            };
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/emailDup', query);

          case 3:
            response = _context.sent;
            // TODO:重複が合った場合のresponseの内容の確認
            // 重複が合った場合はtrueを返す処理を書く。
            console.dir(response);
            return _context.abrupt("return", response);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validEmailDup.apply(this, arguments);
}

function validPassword(password) {
  var re = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,20}$/;
  return re.test(password);
}
/**
 * 数値を検証する
 * @param {String} number
 * @return {Boolean}
 */

function validNum(num) {
  var re = /^[0-9]+$/;
  return re.test(num);
}
/**
 * 数字の先頭が0でないことを確認する
 * @param {String} number
 * @return {Boolean}
 */

function validNonLeadingZero(num) {
  return num.toString()[0] !== "0";
}
/**
 * 郵便番号の検証
 * @param {String} zip
 * @return {Boolean}
 */

function validZip(zip) {
  var re = /^\d{3}[-]\d{4}$|^\d{3}[-]\d{2}$|^\d{3}$/;
  return re.test(zip);
}
/**
 * 電話番号の検証
 * @param {String} tel
 * @return {Boolean}
 */

function validTel(tel) {
  var re = /^0\d{1,4}-\d{1,4}-\d{3,4}$/;
  return re.test(tel);
}
/**
 * 半角英数字であるかを検証にする
 * @param {String} halfNumAlp
 * @return {Boolean}
 */

function validHalfNumAlp(halfNumAlp) {
  var re = /^[0-9a-zA-Z]*$/;
  return re.test(halfNumAlp);
}
/**
 * 半角数字であるかを検証する
 * @param {String} validNumber
 * @return {Boolean}
 */

function validNumber(Number) {
  var re = /^[0-9]+$/;
  return re.test(Number);
}
/**
 * 空白かどうかを検証する
*/

function validWhiteSpace(string) {
  var re = /^[\x20\u3000]+$/;
  return re.test(string);
}
/**
 * 最大文字数の検証
 * @param {String} string
 * @param {Integer} maxNum
 * @return {Boolean}
 */

function validMaxLen(string, maxNum) {
  if (string.length >= maxNum) {
    return true;
  } else {
    return false;
  }
}
/**
* 最小文字数の検証
* @param {String} string
* @param {Integer} minNum
* @return {Boolean}
*/

function validMinLen(string, minNum) {
  if (string.length <= minNum) {
    return true;
  } else {
    return false;
  }
}

/***/ }),

/***/ "./resources/js/components/intro/Intro.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/intro/Intro.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Intro.vue?vue&type=template&id=ba507124& */ "./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124&");
/* harmony import */ var _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Intro.vue?vue&type=script&lang=js& */ "./resources/js/components/intro/Intro.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/intro/Intro.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/intro/Intro.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/intro/Intro.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Intro.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/intro/Intro.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Intro.vue?vue&type=template&id=ba507124& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ApplyCompany.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/ApplyCompany.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApplyCompany_vue_vue_type_template_id_2c1bf24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplyCompany.vue?vue&type=template&id=2c1bf24e& */ "./resources/js/views/ApplyCompany.vue?vue&type=template&id=2c1bf24e&");
/* harmony import */ var _ApplyCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplyCompany.vue?vue&type=script&lang=js& */ "./resources/js/views/ApplyCompany.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApplyCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApplyCompany_vue_vue_type_template_id_2c1bf24e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApplyCompany_vue_vue_type_template_id_2c1bf24e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ApplyCompany.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ApplyCompany.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/ApplyCompany.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ApplyCompany.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ApplyCompany.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ApplyCompany.vue?vue&type=template&id=2c1bf24e&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/ApplyCompany.vue?vue&type=template&id=2c1bf24e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_template_id_2c1bf24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ApplyCompany.vue?vue&type=template&id=2c1bf24e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ApplyCompany.vue?vue&type=template&id=2c1bf24e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_template_id_2c1bf24e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplyCompany_vue_vue_type_template_id_2c1bf24e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);