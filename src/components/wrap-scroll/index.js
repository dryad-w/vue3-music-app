import scroll from '@/components/base/scroll/scroll'
import { computed, h, mergeProps, nextTick, ref, renderSlot, watch, withCtx } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'wrap-scroll',
  props: scroll.props,
  emits: scroll.emits,
  render(ctx) {
    return h(scroll, mergeProps({
      ref: 'scrollRef'
    }, ctx.$props, {
      onScroll: (e) => {
        ctx.$emit('scroll', e)
      }
    }), {
      default: withCtx(() => {
        return [renderSlot(ctx.$slots, 'default')]
      })
    })
  },
  setup() {
    const scrollRef = ref(null)
    const scroll = computed(() => {
      return scrollRef.value.scroll
    })

    const store = useStore()
    const playlist = computed(() => store.state.playList)

    watch(playlist, async () => {
      await nextTick()
      scroll.value.refresh()
    })

    return {
      scrollRef,
      scroll
    }
  }
}
