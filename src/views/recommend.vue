<template>
  <div class="recommend">
    推荐页面
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { getRecommend } from '@/service/recommend'

export default defineComponent({
  setup() {
    // async function getRecommend1() {
    //   const result = await getRecommend()
    //   console.log(result)
    // }
    // getRecommend1()
    onMounted(async () => {
      const result = await getRecommend()
      console.log(result)
    })
  }
})
</script>

<style lang='scss' scoped>

</style>
