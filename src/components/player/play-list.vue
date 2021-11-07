<template>
  <teleport to="body">
    <transition name="list-face">
      <div
        class="playlist"
        v-show="visible && playlist.length"
      >
        <div class="list-wrapper">
          <div class="list-header">
            <h1 class="title">
              <i
                class="icon"
                :class="modeIcon"
              ></i>
              <span class="text">{{modeText}}</span>
            </h1>
          </div>
          <scroll
            class="list-content"
          >
            <ul>
              <li
                class="item"
                v-for="song in sequenceList"
                :key="song.id"
              >
                <i
                  class="current"
                  :class="getCurrentIcon(song)"
                ></i>
                <span class="text">{{song.name}}</span>
                <span class="favorite">
                  <i :class="getFavoriteIcon(song)"></i>
                </span>
              </li>
            </ul>
          </scroll>
          <div class="list-footer">
            <span>关闭</span>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'play-list'
}
</script>

<style scoped>

</style>
