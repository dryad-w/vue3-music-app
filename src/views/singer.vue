<template>
  <div class="singer" v-loading="!singerList.length">
    <indexList :data="singerList" @select="selectSinger"></indexList>
    <router-view v-slot="{ Component }">
      <transition appear name="slide">
        <component :is="Component" :singer="selectedSinger"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import indexList from '@/components/index-list/index-list.vue'
import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/js/constant'

export default {
  name: 'singer',

  components: {
    indexList
  },

  data() {
    return {
      singerList: [],
      selectedSinger: null
    }
  },

  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer
      this.cacheSinger(singer)
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    },
    cacheSinger(singer) {
      storage.session.set(SINGER_KEY, singer)
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
