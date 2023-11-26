<template>
  <div class="movie-item">
    <span :style="{ backgroundImage: `url('${poster}')` }" class="poster mb-2"></span>
    <p class="title mb-1" :title="title">{{ title }}</p>
    <p class="body-1 mb-0">{{ genre }}</p>
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
    }
  }
</script>

<style lang="scss" scoped>
@import './MovieItem.scss';
</style>
