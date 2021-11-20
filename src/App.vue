<template>
  <m-header></m-header>
  <tab></tab>
  <router-view :style="viewStyle"></router-view>
  <router-view
    v-slot="{ Component }"
    name="user"
    :style="viewStyle">
    <transition appear name="slide">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <player></player>
</template>
<script>
import header from './components/header/Header.vue'
import Tab from './components/tab/Tab.vue'
import player from '@/components/player/player.vue'
import { mapState } from 'vuex'

export default {
  components: {
    MHeader: header,
    Tab,
    player
  },
  computed: {
    viewStyle() {
      return {
        bottom: this.playList.length ? '60px' : '0'
      }
    },
    ...mapState(['playList'])
  }
}
</script>
