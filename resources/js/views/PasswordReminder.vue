<template>
  <div>
    <Intro/>
    <PasswordReminder/>
    <!-- <PassRemindRecieve/> -->
  </div>
</template>

<script>
import Intro from '../components/intro/Intro'
import PasswordReminder from '../components/password/PasswordReminder'
import PassRemindRecieve from '../components/password/PassRemindRecieve'

export default {
  components: {
  Intro,
  PasswordReminder,
  PassRemindRecieve
  }
}
</script>
