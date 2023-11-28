<template>
  <button class="ribbon" :class="{ '--active': isActive }" @click="$emit('click')">
    <svg class="ribbon__svg" width="24px" height="34px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
      <polygon class="svg-ribbon" fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
      <polygon class="svg-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
      <polygon class="svg-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>
    </svg>
    <v-icon class="ribbon__icon" :color="isActive ? 'black' : 'white'" width="24">{{ icon }}</v-icon>
  </button>
</template>

<script>
  export default {
    props: {
      active: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      icon() {
        return this.isActive ? 'mdi-check' : 'mdi-plus'
      },
    },

    data() {
      return {
        isActive: this.active
      }
    },

    watch: {
      active(val) {
        this.isActive = val
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './FavoriteRibbon.scss';
</style>