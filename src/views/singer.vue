<template>
  <div class="singer" v-loading="!singerList.length">
    <IndexList :data="singerList"></IndexList>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/base/index-list/index-list.vue'

export default {
  name: 'singer',

  components: {
    IndexList
  },

  data() {
    return {
      singerList: []
    }
  },

  async created() {
    const result = await getSingerList()
    console.log(result)
    this.singerList = result.singers
  }
}
</script>

<style lang='scss' scoped>
.singer {
  position: fixed;
  top: 88px;
  width: 100%;
  bottom: 0;
}

</style>
