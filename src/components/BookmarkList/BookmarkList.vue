<template>
  <div class="bookmark-list">
    <movie-item
      v-for="movie in movies"
      :key="movie.imbdID"
      :movie="movie"
    ></movie-item>
  </div>
</template>

<script>
  import { mapState } from 'vuex'; 
  import MovieItem from '@/components/MovieItem/MovieItem.vue'

  export default {
    components: {
      MovieItem
    },

    computed: {
      ...mapState(['bookmarkList']),

      movies() {
        return [...this.bookmarkList].reverse()
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './BookmarkList.scss'
</style>