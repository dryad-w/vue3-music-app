import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'

export default function useCd() {
  const cdRef = ref(null)
  const cdImageRef = ref(null)
  const store = useStore()
  const playing = computed(() => store.state.playing)

  const cdCls = computed(() => {
    return playing.value ? 'playing' : ''
  })

  watch(playing, (newPlaying) => {
    if (!newPlaying) {
      syncTransForm(cdRef.value, cdImageRef.value)
    }
  })

  function syncTransForm(wrapper, inner) {
    const wrapperTransForm = getComputedStyle(wrapper).transform
    const innerTransForm = getComputedStyle(inner).transform
    wrapper.style.transform = wrapperTransForm === 'none' ? innerTransForm : innerTransForm.concat(' ', wrapperTransForm)
  }

  return {
    cdCls,
    cdRef,
    cdImageRef
  }
}
