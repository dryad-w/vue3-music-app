<template>
  <m-header></m-header>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import header from './components/Header.vue'

export default defineComponent({
  components: {
    MHeader: header
  },

  setup () {

  }
})
</script>
