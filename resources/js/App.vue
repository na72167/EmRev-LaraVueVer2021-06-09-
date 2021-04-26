<template>
  <div>
    <Header/>
      <main>
        <div class="#">
          <RouterView />
        </div>
      </main>
    <Footer/>
  </div>
</template>

<script>
//コンポーネントから別ファイルなどを読み込み際には元のコンポーネントファイルの位置がルートになる。
import Header from './layout/components/header/header'
import Footer from './layout/components/footer/footer'

export default {
    components: {
    Header,
    Footer
    }
}
</script>
