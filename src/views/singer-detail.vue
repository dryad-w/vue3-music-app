<template>
  <div class="singer-detail">
    <musicList
      :songs="songs"
      :title="title"
      :pic="pic"
      :loading="loading"
    ></musicList>
  </div>
</template>

<script>
import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/song'
import musicList from '@/components/music-list/music-list.vue'

export default {
  name: 'singer-detail',
  components: {
    musicList
  },
  props: {
    singer: Object
  },
  data() {
    return {
      songs: [],
      loading: true
    }
  },
  computed: {
    title() {
      return this.singer && this.singer.name
    },
    pic() {
      return this.singer && this.singer.pic
    }
  },
  async created() {
    const result = await getSingerDetail(this.singer)
    this.songs = await processSongs(result.songs)
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
  .singer-detail {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>
