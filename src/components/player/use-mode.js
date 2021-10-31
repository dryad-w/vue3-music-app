import { useStore } from 'vuex'
import { computed } from 'vue'
import { PLAY_MODE } from '@/assets/js/constant'

export default function useMode() {
  const store = useStore()
  const playMode = computed(() => store.state.playMode)

  const modeIcon = computed(() => {
    const mode = playMode.value
    return mode === PLAY_MODE.sequence ? 'icon-sequence'
      : mode === PLAY_MODE.random ? 'icon-random' : 'icon-loop'
  })

  function changeMode() {
    const mode = (playMode.value + 1) % 3

    store.dispatch('changeMode', mode)
  }

  return {
    modeIcon,
    changeMode
  }
}
