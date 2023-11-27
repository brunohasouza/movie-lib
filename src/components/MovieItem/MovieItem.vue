<template>
  <div class="movie-item" :class="isDark">
    <span :style="{ backgroundImage: `url('${poster}')` }" class="poster mb-2"></span>
    <div class="movie-item__title">
      <p class="title" :title="title">{{ title }}</p>
      <p class="body-1 mb-0 year">{{ genre }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      poster: {
        type: String,
        required: true
      },

      title: {
        type: String,
        required: true
      },

      genre: {
        type: String,
        required: true
      }
    },

    computed: {
      isDark() {
        return this.$vuetify.theme.dark && '--dark'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './MovieItem.scss';
</style>
