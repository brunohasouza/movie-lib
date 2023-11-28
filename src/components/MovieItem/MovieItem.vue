<template>
  <div class="movie-item" :class="isDark">
    <span :style="{ backgroundImage: `url('${movie.Poster}')` }" class="poster mb-2">
      <favorite-ribbon class="fav-btn" :active="isBookmarked" @click="markMovie"></favorite-ribbon>
    </span>
    <div class="movie-item__title">
      <p class="text-subtitle-1 font-weight-medium" :title="movie.Title">{{ movie.Title }}</p>
      <p class="text-body-1 text--disabled mb-0 year">{{ movie.Year }}</p>
    </div>
  </div>
</template>

<script>
  import FavoriteRibbon from '@/components/FavoriteRibbon/FavoriteRibbon.vue'
  import { mapActions, mapState } from 'vuex'

  export default {
    props: {
      movie: {
        type: Object,
        required: true
      },
    },

    components: {
      FavoriteRibbon
    },

    computed: {
      ...mapState(['userMovies']),

      isDark() {
        return this.$vuetify.theme.dark && '--dark'
      },

      isBookmarked() {
        return this.userMovies.some(movie => movie.imdbID === this.movie.imdbID)
      },

      icon() {
        return this.isBookmarked ? 'mdi-heart' : 'mdi-heart-outline'
      }
    },

    methods: {
      ...mapActions(['addMovie', 'removeMovie']),

      markMovie() {
        const action = this.isBookmarked ? this.removeMovie : this.addMovie
        const success = action(this.movie)

        if (success) {
          this.$toast.success(
            this.isBookmarked 
              ? this.$t('movies.added')
              : this.$t('movies.removed')
          )
        }        
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './MovieItem.scss';
</style>
