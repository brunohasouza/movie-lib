<template>
  <v-container class="mb-6">
    <v-row>
      <v-col cols="12">
        <v-skeleton-loader
          v-if="localLoading"
          height="50"
          type="heading"
          class="skeleton-head"
        ></v-skeleton-loader>
        <h1 v-else class="display-2">{{ $t('movies.results', { keywords }) }}</h1>
      </v-col>
      <v-col>
        <v-skeleton-loader
          v-if="localLoading"
          width="300"
          type="heading"
        ></v-skeleton-loader>
        <p v-else class="body-1 mb-0">
          {{ $t('movies.total', { number: localTotal }) }}
        </p>
      </v-col>
      <v-col class="text-right">
        <v-btn :to="{ name: 'home' }" :loading="localLoading" color="primary">
          <v-icon left>mdi-magnify</v-icon>
          {{ $t('movies.newSearch') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: {
      total: {
        type: [Number, String],
        default: 0
      },

      loading: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        localTotal: this.total,
        localLoading: this.loading,
        keywords: decodeURIComponent(this.$route.query.title)
      }
    },

    watch: {
      loading() {
        this.localLoading = this.loading
      },

      total() {
        this.localTotal = this.total
      }
    }
  }
</script>

<style lang="scss" scoped>
::v-deep .v-skeleton-loader.skeleton-head {
  .v-skeleton-loader__heading {
    height: 100%;
    border-radius: 25px;
  }
}
</style>