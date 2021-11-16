import { onMounted, onUnmounted, ref } from 'vue'
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(PullUp)
BScroll.use(ObserveDOM)

export default function usePullUpLoad(requestData, preventPullUpload) {
  const scroll = ref(null)
  const rootRef = ref(null)
  const isPullUpload = ref(false)

  onMounted(() => {
    const scrollVal = scroll.value = new BScroll(rootRef.value, {
      pullUpLoad: true,
      observeDOM: true,
      click: true
    })

    scrollVal.on('pullingUp', pullingUpHandler)

    async function pullingUpHandler() {
      if (preventPullUpload.value) {
        scrollVal.finishPullUp()
        return
      }
      isPullUpload.value = true
      await requestData()
      scrollVal.finishPullUp()
      isPullUpload.value = false
    }
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })

  return {
    scroll,
    rootRef,
    isPullUpload
  }
}
