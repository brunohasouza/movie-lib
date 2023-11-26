<template>
    <div class="movie-skeleton">
      <v-skeleton-loader class="mb-2" type="image" />
      <v-skeleton-loader type="list-item-two-line" />
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  @import './MovieSkeleton.scss';
  ::v-deep .v-skeleton-loader.v-skeleton-loader--is-loading {
    .v-skeleton-loader__image {
      padding-bottom: 148.33%;
      width: 100%;
      height: 0;
    }
  }
</style>
