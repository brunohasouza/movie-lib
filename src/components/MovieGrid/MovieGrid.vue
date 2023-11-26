<template>
  <v-container>
    <v-row>
      <template v-if="localLoading">
        <v-col v-for="n in 10" :key="`skl_${n}`" class="movie-col">
          <movie-skeleton></movie-skeleton>
        </v-col>
      </template>
      <template v-else>
        <v-col v-for="(item, index) in items" :key="index" class="movie-col">
          <slot :item="item"></slot>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
  import MovieSkeleton from './../MovieSkeleton/MovieSkeleton.vue'

  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      },

      loading: {
        type: Boolean,
        default: false
      }
    },

    components: {
      MovieSkeleton
    },

    data() {
      return {
        localLoading: this.loading
      }
    },

    watch: {
      loading(newValue) {
        this.localLoading = newValue
      }
    }
  }
</script>

<style lang="scss" scoped>
  .movie-col {
    flex: 0 0 50%;
    max-width: 50%;

    @media (min-width: 600px) {
      flex: 0 0 33.33%;
      max-width: 33.33%;
    }

    @media (min-width: 960px) {
      flex: 0 0 25%;
      max-width: 25%;
    }

    @media (min-width: 1264px) {
      flex: 0 0 20%;
      max-width: 20%;
    }
  }
</style>