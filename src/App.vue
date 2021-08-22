<template>
  <m-header></m-header>
  <tab></tab>
  <router-view></router-view>
</template>
<script>
import { defineComponent } from 'vue'
import header from './components/header/Header.vue'
import Tab from './components/tab/Tab.vue'

export default defineComponent({
  components: {
    MHeader: header,
    Tab
  },

  setup () {

  }
})
</script>
