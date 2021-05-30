<template>
  <section class="revliReviewListSearch">
    <h1 class="revliReviewListSearch__title">Company Search</h1>
    <form class="revliReviewListSearch__form" method="POST">

      <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">会社名</h1>
        <input class="revliReviewListSearch__inputStyle" name="company_name" placeholder="入力してください">
      </div>

      <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">代表者名</h1>
        <input class="revliReviewListSearch__inputStyle" name="representative" placeholder="入力してください">
      </div>

      <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">所在地</h1>
        <input class="revliReviewListSearch__inputStyle" name="location" placeholder="入力してください">
      </div>

      <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">業界</h1>
        <input class="revliReviewListSearch__inputStyle" name="industry" placeholder="入力してください">
      </div>

      <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">設立年度</h1>
        <input class="revliReviewListSearch__inputStyle" name="year_of_establishment" placeholder="入力してください">
      </div>

      <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">上場年</h1>
        <input class="revliReviewListSearch__inputStyle" name="listed_year" placeholder="入力してください">
      </div>

      <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">従業員数</h1>
        <input class="revliReviewListSearch__inputStyle" name="number_of_employees" placeholder="入力してください">
      </div>

      <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">口コミ数</h1>
        <input class="revliReviewListSearch__inputStyle" name="number_of_reviews" placeholder="入力してください">
      </div>

      <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">平均年収</h1>
        <div class="revliReviewListSearch__betweenStyleWrap">
          <input class="revliReviewListSearch__betweenStyle" name="average_annual_income" placeholder="入力してください">
          <div class="revliReviewListSearch__betweenStyleHoge">~</div>
          <input class="revliReviewListSearch__betweenStyle" placeholder="入力してください">
        </div>
      </div>

      <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">平均年齢</h1>
        <div class="revliReviewListSearch__betweenStyleWrap">
          <input class="revliReviewListSearch__betweenStyle" name="average_age" placeholder="入力してください">
          <div class="revliReviewListSearch__betweenStyleHoge">~</div>
          <input class="revliReviewListSearch__betweenStyle" placeholder="入力してください">
        </div>
      </div>

      <!-- <div class="revliReviewListSearch__inputContentStyle">
        <h1 class="revliReviewListSearch__inputName">並び替え順序</h1>
        <input class="revliReviewListSearch__inputStyle" placeholder="入力してください">
      </div> -->

      <input type="submit" class="revliReviewListSearch__bottomStyle" name="search" value="検索する">
    </form>
  </section>
</template>

<style lang="scss" scope>
  .revliReviewListSearch{
    height: 670px;
    width: 290px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 30px;
    position: relative;
    left: 550px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    padding: 20px 20px;
    &__title{
      font-size: 22px;
      text-align: center;
    }
    &__form{
      height: 100%;
      margin-top: 10px;
    }
    &__inputContentStyle{
      margin: 0 auto 10px;
      padding: 0 10px;
    }
    &__inputName{
      font-size: 14px;
      height: 16px;
    }
    &__inputStyle{
      border: 1px solid #707070;
      width: 220px;
      border-radius: 5px;
    }
    &__betweenStyleWrap{
      margin-top: 5px;
      width: 370px;
      overflow: hidden;
    }
    &__betweenStyle{
      border: 1px solid #707070;
      border-radius: 5px;
      width: 101px;
      float: left;
    }
    &__betweenStyleHoge{
      font-size: 30px;
      margin-top: -18px;
      float: left;
    }
    &__bottomStyle{
      text-align: center;
      display: block;
      width: 150px;
      padding: 5px 0;
      margin: 20px auto 0;
      background-color: #06D1EC;
      color: #fff;
      border: none;
      border: 1px solid #fff;
    }
  }
</style>
