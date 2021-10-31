<template>
  <m-header></m-header>
  <tab></tab>
  <router-view></router-view>
  <player></player>
</template>
<script>
import { defineComponent } from 'vue'
import header from './components/header/Header.vue'
import Tab from './components/tab/Tab.vue'
import player from '@/components/player/player.vue'

export default defineComponent({
  components: {
    MHeader: header,
    Tab,
    player
  },

  setup () {

  }
})
</script>
