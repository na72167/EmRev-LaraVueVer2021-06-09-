<template>
    <div>
        <Hero/>
        <Review/>
        <About/>
        <Contact/>
    </div>
</template>

<script>
//コンポーネントから別ファイルなどを読み込み際には元のコンポーネントファイルの位置がルートになる。
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Review from '../components/home/Review'

export default {
    components: {
    Hero,
    About,
    Contact,
    Review
    }
}
</script>
