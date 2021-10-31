import { useStore } from 'vuex'
import { computed } from 'vue'
import { save, remove } from '@/assets/js/array-store'
import { FAVORITE_KEY } from '@/assets/js/constant'

export default function useFavorite() {
  const store = useStore()
  const favoriteList = computed(() => store.state.favoriteList)
  const maxLen = 100

  function getFavoriteIcon(song) {
    return isFavorite(song) ? 'icon-favorite' : 'icon-not-favorite'
  }

  function toggleFavorite(song) {
    let list = favoriteList.value
    if (isFavorite(song)) {
      remove(FAVORITE_KEY, compare)
    } else {
      list = save(song, FAVORITE_KEY, compare, maxLen)
    }
    store.commit('setFavoriteList', list)

    // 闭包
    function compare(item) {
      return item.id === song.id
    }
  }

  function isFavorite(song) {
    const index = favoriteList.value.findIndex((item) => {
      return item.id === song.id
    })
    return index > -1
  }

  return {
    getFavoriteIcon,
    toggleFavorite
  }
}
