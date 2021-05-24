<template>
  <div>
    <Intro/>
    <!-- @changePass〜・・・emit用動的プロパティ(?) -->
    <!-- 代入プロパティの記入方法・・・
    動的プロパティ・・・代入先のdata名をそのまま書く。
    例:@CangePassReminderComponents="ReminderCompMode"
    静的プロパティ・・・代入先のdata名に+ =$event
    例:@CangePassReminderComponents="ReminderCompMode = $event"
    propsと$emitでデータを引き渡す
    https://qiita.com/d0ne1s/items/f88ecd6aaa90c7bbc5d4 -->
    <PasswordReminder
      v-if="this.ReminderCompMode === 'reminder'"
      @CangePassReminderComponents="ReminderCompMode = $event"
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
  components: {
    Intro,
    PasswordReminder,
    PassRemindRecieve
  },
  data: function() {
    return {
      // TODO:デフォルトだと'reminder'
      ReminderCompMode: 'reminder',
    };
  }
}
</script>
