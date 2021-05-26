<template>
  <div>
    <Intro/>
    <MiddleElement/>
    <ContributorRegistration/>
  </div>
</template>

<script>
import Intro from '../components/intro/Intro'
import DesignSpace from '../components/etc/DesignSpace'
import MiddleElement from '../components/etc/DesignSpace'
import ContributorRegistration from '../components/contributorRegistration/ContributorRegistration'

export default {
  components: {
    Intro,
    DesignSpace,
    MiddleElement,
    ContributorRegistration
  }
}
</script>
