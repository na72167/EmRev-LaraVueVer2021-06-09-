<template>
    <div>
      <Intro/>
      <DesignSpace/>
      <MiddleElement/>
      <MypeUserProfile/>
      <MypeMyReviewList/>
      <MypeDmList/>
      <MypeMyFavoriteList/>
    </div>
</template>

<script>
//コンポーネントから別ファイルなどを読み込み際には元のコンポーネントファイルの位置がルートになる。
import Intro from '../components/intro/Intro'
import DesignSpace from '../components/etc/DesignSpace'
import MiddleElement from '../components/etc/DesignSpace'
import MypeUserProfile from '../components/mypage/MypeUserProfile'
import MypeMyReviewList from '../components/mypage/MypeMyReviewList'
import MypeDmList from '../components/mypage/MypeDmList'
import MypeMyFavoriteList from '../components/mypage/MypeMyFavoriteList'

export default {
  components: {
    Intro,
    DesignSpace,
    MiddleElement,
    MypeUserProfile,
    MypeMyReviewList,
    MypeDmList,
    MypeMyFavoriteList
  }
}
</script>
<style lang="scss" scope>
</style>
