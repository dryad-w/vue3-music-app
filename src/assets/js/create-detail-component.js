import musicList from '@/components/music-list/music-list'
import storage from 'good-storage'
import { processSongs } from '@/service/song'

export default function createDetailComponent(name, key, fetch) {
  return {
    name: name,
    components: {
      musicList
    },
    props: {
      data: Object
    },
    data() {
      return {
        songs: [],
        loading: true
      }
    },
    computed: {
      computedData() {
        let ret = null
        const data = this.data
        if (data) {
          ret = data
        } else {
          const cache = storage.session.get(key)
          if (cache && (cache.mid || cache.id + '') === this.$route.params.id) {
            ret = cache
          }
        }
        return ret
      },
      title() {
        const data = this.computedData
        return data && (data.name || data.title)
      },
      pic() {
        const data = this.computedData
        return data && data.pic
      }
    },
    async created() {
      if (!this.computedData) {
        const path = this.$route.matched[0].path
        this.$router.push({
          path
        })
        return
      }
      const result = await fetch(this.computedData)
      this.songs = await processSongs(result.songs)
      this.loading = false
    }
  }
}
