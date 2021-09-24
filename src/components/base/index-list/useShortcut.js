import { computed, ref } from 'vue'

export default function useShortcut(props, groupRef) {
  const scrollRef = ref(null)
  const ANCHOR_HEIGHT = 18

  const shortcutList = computed(() => {
    return props.data.map((group) => {
      return group.title
    })
  })

  const touch = {}

  function onShortcutTouchStart(e) {
    // 了解target和currentTarget的区别，target主要用于事件代理
    // 节点上的data-xxx 对应于target.dataset.xxx
    const anchorIndex = parseInt(e.target.dataset.index)
    touch.y1 = e.touches[0].pageY
    touch.anchorIndex = anchorIndex

    scrollTo(anchorIndex)
  }

  function onShortcutTouchMove(e) {
    touch.y2 = e.touches[0].pageY
    // 或0，向下取整的简略写法
    const delta = (touch.y2 - touch.y1) / ANCHOR_HEIGHT | 0
    const anchorIndex = touch.anchorIndex + delta

    scrollTo(anchorIndex)
  }

  function scrollTo(index) {
    if (isNaN(index)) {
      return
    }
    // 限定index
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    const targetEl = groupRef.value.children[index]
    const scroll = scrollRef.value.scroll
    scroll.scrollToElement(targetEl, 0)
  }

  return {
    shortcutList,
    onShortcutTouchStart,
    scrollRef,
    onShortcutTouchMove
  }
}
