<template>
  <v-container>
    <v-row>
      <template v-if="localLoading">
        <v-col v-for="n in 10" :key="`skl_${n}`" class="movie-col">
          <movie-skeleton></movie-skeleton>
        </v-col>
      </template>
      <template v-else-if="items.length === 0">
        <v-col cols="auto" class="mx-auto">
          <no-results></no-results>
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
  import MovieSkeleton from '@/components/MovieSkeleton/MovieSkeleton.vue'
  import NoResults from '@/components/NoResults/NoResults.vue'

  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      },

      loading: {
        type: Boolean,
        default: false
      },
    },

    components: {
      MovieSkeleton,
      NoResults
    },

    data() {
      return {
        localLoading: this.loading,
        page: 1
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
@import './MovieGrid.scss';
</style>