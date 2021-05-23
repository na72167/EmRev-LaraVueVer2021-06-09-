<template>
  <div>
    <Intro/>
    <PasswordReminder
      v-if="this.ReminderCompMode === 'reminder'"
    />
    <PassRemindRecieve
      v-if="this.ReminderCompMode === 'receive'"
    />
  </div>
</template>

<script>
import Intro from '../components/intro/Intro'
import PasswordReminder from '../components/passwordReminder/PasswordReminder'
import PassRemindRecieve from '../components/passwordReminder/PasswordReceive'

export default {
  data: function() {
    return {
      ReminderCompMode: 'reminder',
    };
  },
  components: {
    Intro,
    PasswordReminder,
    PassRemindRecieve
  }
}
</script>
