<template>
  <div class="movie-item" :class="isDark">
    <span :style="{ backgroundImage: `url('${movie.Poster}')` }" class="poster mb-2">
      <favorite-ribbon class="fav-btn" :active="isBookmarked" @click="markMovie"></favorite-ribbon>
    </span>
    <div class="movie-item__title">
      <div class="stars">
        <span
          v-for="n in 5"
          :key="n"
          @mouseover="onHover(n)"
          @mouseleave="onBlur"
          @click="submitRate(n)"
        >
          <v-icon color="amber">
            <template v-if="hoverIndex > 0">
              {{ n <= hoverIndex ? 'mdi-star' : 'mdi-star-outline' }}
            </template>
            <template v-else>
              {{ n <= stars ? 'mdi-star' : 'mdi-star-outline' }}
            </template>
          </v-icon>
        </span>
      </div>
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

    data() {
      return {
        hoverIndex: 0
      }
    },

    computed: {
      ...mapState(['userMovies', 'ratings']),

      isDark() {
        return this.$vuetify.theme.dark && '--dark'
      },

      isBookmarked() {
        return this.userMovies.some(movie => movie.imdbID === this.movie.imdbID)
      },

      icon() {
        return this.isBookmarked ? 'mdi-heart' : 'mdi-heart-outline'
      },

      stars() {
        return this.ratings[this.movie.imdbID] || -1
      }
    },

    methods: {
      ...mapActions(['addMovie', 'removeMovie', 'rateMovie']),

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
      },

      onHover(index) {
        this.hoverIndex = index
      },

      onBlur() {
        this.hoverIndex = -1
      },

      submitRate(stars) {
        this.rateMovie({
          stars,
          imdbID: this.movie.imdbID,
        })

        this.$toast.success(this.$t('movies.rated'))
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './MovieItem.scss';
</style>
