<template>
  <div class="revliReviewListSearch">
    <div class="revliReviewListSearch__header">
      <h1 class="revliReviewListSearch__title">Register Review List</h1>

      $companyData内のtotalキー内のバリューを出力
      <h3>検索結果:<span><?php echo etc::sanitize($companyData['total']);?></span>件</h3>
    </div>

    <!-- コンテンツ -->
    <!-- getについての参考記事
    https://qiita.com/Sekky0905/items/dff3d0da059d6f5bfabf -->

      <?php
        // ここで会社情報を取得 asでエイリアス設定
        // 上の処理で取得した会社情報を$key => $valの形で管理
        foreach($companyData['compDate'] as $key => $val):
      ?>
        <div class="revliReviewListSearch__mainContent">

          <div class="revliReviewListSearch__imgComInfoWrap">
            <!-- 個別の写真を表示 -->
            <div class="revliReviewListSearch__imgStyle">
              <!-- alt属性はアプリ使用者が画像を表示できない環境やブラウザを使っている際に
              代わりの処理を走らせる物 -->
              <!-- 今回の場合だと会社名を表示させる。 -->
              <img class="revliReviewListSearch__img"
              src="<?php echo etc::showImg(etc::sanitize($val['pic1'])); ?>"
              alt="<?php echo etc::sanitize($val['name']); ?>">
            </div>

            <div class="revliReviewListSearch__companyWrap">
              <div class="revliReviewListSearch__industryClassification">業界分類:<span><?php echo etc::sanitize($val['industry']); ?></span></div>
              <div class="revliReviewListSearch__companyName">会社名:<span><?php echo etc::sanitize($val['company_name']); ?></span></div>
              <div class="revliReviewListSearch__location">所在地:<span><?php echo etc::sanitize($val['location']); ?></span></div>
            </div>
            <div class="revliReviewListSearch__reviewLink">>この会社のレビュー数(<span><?php echo etc::sanitize($val['number_of_reviews']); ?></span>)件</div>
          </div>

          <div class="revliReviewListSearch__userDetail">
            <div class="revliReviewListSearch__name">(総合的な会社の印象が出力される予定)</div>
            <div class="revliReviewListSearch__dmIncumbentWrap">
              <div class="revliReviewListSearch__age">投稿日:<span>0000/00/00</span></div>
              <div class="revliReviewListSearch__dm">総評:<span>サンプルサンプルサンプルサンプル<br>サンプルサンプルサンプルサンプルサ...</span><h1 class="revliReviewListSearch__userProfLink">このレビューの詳細を見る</h1></div>
            </div>
            <div class="revliReviewListSearch__userNameAgeFavoliteWrap">
              <div class="revliReviewListSearch__userNameAgeWrap">:<span>ユーザー名</span>さん<span>〇〇</span>歳</div>
              <div class="revliReviewListSearch__favorite">☆</div>
            </div>
          </div>

          <!-- 参考コードのappendGetParam()について調べる。 -->
          <!-- ここから選択した会社のID情報をreviewRegister-jrへ送信する。 -->
          <form method="post">
            <input type="hidden" name="company_id" value=<?php echo $val['id'] ?>>
            <input class="#" type="submit" value="この会社のレビューをする">
          </form>

        </div>
      <?php
        endforeach;
      ?>


    <!-- ここまで -->
    <div class="revliReviewListSearch__pageTransition">
      <div class="revliReviewListSearch__pageTransition-contentWrap">
        <span class="revliReviewListSearch__pageTransition-leftArrow">◁</span>
          <div class="revliReviewListSearch__pageTransition-guideNumber">12345</div>
        <span class="revliReviewListSearch__pageTransition-rightArrow">▷</span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scope>
  .revliReviewList{
  height: 100%;
  width: 720px;
  padding: 20px 20px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  margin-top: -950px;
  margin-left: 870px;
  margin-right: auto;
  &__header{
    border-bottom: 1px solid #b4becb;
    padding:5px 20px;
    text-align: center;
  }
  &__title{
    font-size: 2rem;
  }
  &__mainContent{
    height: 100%;
    width: 680px;
    margin: 12px 0;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
  }

  &__imgComInfoWrap{
    width: 380px;
  }

  &__industryClassification{
    font-size: 12px;
    width: 360px;
  }

  &__companyName{
    font-size: 12px;
  }

  &__location{
    font-size: 12px;
  }

  &__reviewLink{
    width: 230px;
    font-size: 12px;
    float: left;
    position: relative;
    top:120px;
    left: -95px;
  }

  &__imgStyle{
    height: 90px;
    width: 90px;
    border-radius: 5px;
    margin: 20px 15px 10px 15px;
    float: left;
    overflow: hidden;
  }

  &__img{
    height: 90px;
    width: 90px;
    border-radius: 5px;
    border: 1px solid #b4becb;
    background-color: black;
    float: left;
  }

  &__companyWrap{
    font-size: 20px;
    height: 1px;
    position: relative;
    top:35px;
    right: 5px;
  }

  &__userDetail{
    height: 155px;
    width: 330px;
    float: right;
    margin-top: -20px;
    padding: 15px 5px 5px 20px;
    border-left: 1px solid #b4becb;
  }

  &__nameAgeWrap{
    width: 300px;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 3px;
  }

  &__name{
    float: left;
  }

  &__age{
    float: left;
    margin-top: 10px;
    font-size: 14px;
  }

  &__dmIncumbentWrap{
    width: 350px;
    overflow: hidden;
  }

  &__dm{
    float: left;
  }

  &__userNameAgeFavoliteWrap{
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
    margin-left:20px;
    width: 320px;
  }

  &__userNameAgeWrap{
    float: left;
  }

  &__affiliatedCompanyStateWrap{
    width: 350px;
    overflow: hidden;
    margin-bottom: 5px;
  }

  &__Incumbent{
    float: left;
    margin-left: 10px;
  }

  &__affiliatedCompanyStateWrap{
    width: 350px;
    overflow: hidden;
    margin-bottom: 5px;
  }

  &__affiliatedCompany{
    float: left;
    width: 80px;
    margin-top: 35px;
  }

  &__san{
    float: left;
    width: 32px;
    margin-top: 40px;
  }

  &__favorite{
    margin-right: 0px;
    margin-top: -10px;
    font-size: 20px;
    float: right;
  }

  &__state{
    float: left;
    margin-left: 10px;
  }

  &__userProfLink{
    font-size: 12px;
    margin-top: 2px;
  }

  &__pageTransition{
    height: 50px;
    border-top: 1px solid #b4becb;
    border-bottom: 1px solid #b4becb;
  }
  &__pageTransition-contentWrap{
    width: 80px;
    margin: 10px auto 0;
  }
  &__pageTransition-leftArrow{
    float: left;
  }
  &__pageTransition-guideNumber{
    float: left;
  }
  &__pageTransition-rightArrow{
    float: left;
  }
}
</style>
