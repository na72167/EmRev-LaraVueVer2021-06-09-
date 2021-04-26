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
import Hero from '../components/home/hero'
import About from '../components/home/about'
import Contact from '../components/home/contact'
import Review from '../components/home/review'

export default {
    components: {
    Hero,
    About,
    Contact,
    Review
    }
}
</script>
