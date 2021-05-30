<template>
  <section class="revliReviewListSorting">
    <h1 class="revliReviewListSorting__title">Company Sorting</h1>
    <form class="revliReviewListSorting__form">
      <div class="revliReviewListSorting__inputContentStyle">
        <h1 class="revliReviewListSorting__inputName">並び替え項目</h1>
        <input class="revliReviewListSorting__inputStyle" placeholder="入力してください">
      </div>
      <div class="revliReviewListSorting__inputContentStyle">
        <h1 class="revliReviewListSorting__inputName">並び替え順序</h1>
        <input class="revliReviewListSorting__inputStyle" placeholder="入力してください">
      </div>
      <button class="revliReviewListSorting__bottomStyle">並び替えをする</button>
    </form>
  </section>
</template>

<style lang="scss" scope>
  .revliReviewListSorting{
    height: 250px;
    width: 290px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    margin-top: 30px;
    position: relative;
    left: 550px;
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
