<template>
  <v-main class="py-12">
    <v-container>
      <v-row align="center">
        <v-col cols="12" class="text-center mb-6">
          <app-logo></app-logo>
        </v-col>
      </v-row>
    </v-container>
    <results-header
      v-if="loading || movies.length > 0"
      :total="totalMovies"
      :loading="loading"
    ></results-header>
    <movie-grid
      :loading="loading"
      :items="movies"
      :pages="pages"
      #default="{ item }"
    >
      <movie-item :movie="item"></movie-item>
    </movie-grid>
    <v-container class="pt-10" v-if="!loading && movies.length > 0">
      <v-row justify="center">
        <v-col cols="auto">
          <v-pagination
            v-model="page"
            :length="pages"
            :total-visible="7"
            @input="onChangePage"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import MovieGrid from '@/components/MovieGrid/MovieGrid.vue'
  import MovieItem from '@/components/MovieItem/MovieItem.vue'
  import AppLogo from '@/components/AppLogo/AppLogo.vue';
  import ResultsHeader from '@/components/ResultsHeader/ResultsHeader.vue'

  import { client } from '@/service/http-client';

  export default {
    components: {
      MovieGrid,
      MovieItem,
      AppLogo,
      ResultsHeader
    },

    data() {
      return {
        movies: [],
        page: 1,
        totalMovies: 0,
        loading: false,
      }
    },

    computed: {
      title() {
        return decodeURIComponent(this.$route.query.title)
      },

      pages() {
        return Math.ceil(this.totalMovies / 10)
      }
    },

    methods: {
      onChangePage(page) {
        this.$router.push({
          ...this.$route,
          query: {
            ...this.$route.query,
            page
          }
        })
      },

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
            this.totalMovies = parseInt(totalResults)
          } else {
            movies = []
            this.totalMovies = 0
          }
        } catch (error) {
          movies = []
          this.totalMovies = 0
            this.$toast.error(this.$t('movies.apiError'))
        }

        this.movies = movies
        this.loading = false
      },
    },

    mounted() {
      if (this.title) {
        this.fetchMovies()
      }
    },

    created() {
      const pageQuery = parseInt(this.$route.query.page)
      this.page = !isNaN(pageQuery) && pageQuery >= 1 ? pageQuery : 1
    },

    watch: {
      $route() {
        const pageQuery = parseInt(this.$route.query.page)
        this.page = !isNaN(pageQuery) && pageQuery >= 1 ? pageQuery : 1

        this.fetchMovies()
      },
    },
  }
</script>
