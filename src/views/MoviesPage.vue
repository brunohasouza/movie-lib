<template>
  <v-main>
    <movie-grid :loading="loading" :items="movies" :pages="pages" #default="{ item }">
      <movie-item
        :poster="item.Poster"
        :genre="item.Year"
        :title="item.Title"
      ></movie-item>
    </movie-grid>
    <v-snackbar v-model="error" color="error" top multi-line>
      <p class="title mb-0">{{ errorMessage }}</p>
    </v-snackbar>
  </v-main>
</template>

<script>
  import MovieGrid from '@/components/MovieGrid/MovieGrid.vue'
  import MovieItem from '@/components/MovieItem/MovieItem.vue'
  import { client } from '@/service/http-client';

  export default {
    components: {
      MovieGrid,
      MovieItem
    },

    data() {
      return {
        movies: [],
        error: false,
        errorMessage: '',
        page: 1,
        loading: false,
        pages: 0,
      }
    },

    computed: {
      title() {
        return decodeURIComponent(this.$route.query.title)
      }
    },

    methods: {
      async fetchMovies() {
        this.loading = true
        
        let movies = []

        try {
          const { data } = await client.get(null, {
            params: {
              s: this.title,
              page: this.page,
            }
          })

          const { Response, Search, totalResults } = data

          if (Response === 'True') {
            movies = Search
            this.pages = Math.ceil(parseInt(totalResults) / 10)
          } else {
            movies = []
            this.pages = 0
          }

          this.loading = false
        } catch (error) {
          movies = []
          this.pages = 0
          this.errorMessage = this.$t('movies.apiError')
          this.error = true
        }

        this.movies = movies
        this.loading = false
      },
    },

    created() {
      if (this.title) {
        this.fetchMovies()
      }
    }
  }
</script>
