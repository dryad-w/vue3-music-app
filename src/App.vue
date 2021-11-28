<template>
  <m-header></m-header>
  <tab></tab>
  <router-view :style="viewStyle" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
  <router-view
    v-slot="{ Component }"
    name="user"
    :style="viewStyle">
    <transition appear name="slide">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
  <player></player>
  <confirm
    ref="confirmRef"
    :text="confirmText"
  ></confirm>
</template>
<script>
import header from './components/header/Header.vue'
import Tab from './components/tab/Tab.vue'
import player from '@/components/player/player.vue'
import { mapState } from 'vuex'
import Confirm from '@/components/base/confirm/confirm'

export default {
  components: {
    Confirm,
    MHeader: header,
    Tab,
    player
  },
  data() {
    return {
      confirmText: '你当前没有网络，访问的是缓存'
    }
  },
  mounted() {
    this.useNotification()
  },
  computed: {
    viewStyle() {
      return {
        bottom: this.playList.length ? '60px' : '0'
      }
    },
    ...mapState(['playList'])
  },
  methods: {
    useNotification() {
      if (Notification.permission === 'default') {
        Notification.requestPermission()
      }
      window.addEventListener('offline', () => {
        this.offlineNotification()
      })
      window.addEventListener('online', () => {
        window.location.reload()
      })
    },

    offlineNotification() {
      if (Notification.permission === 'granted') {
        // eslint-disable-next-line no-new
        new Notification('提示', {
          body: this.confirmText
        })
      } else {
        this.$refs.confirmRef.show()
      }
    }
  }
}
</script>
