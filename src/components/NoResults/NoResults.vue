<template>
  <v-sheet class="no-results" rounded>
    <div class="no-results__icon blue-grey lighten-3">
      <v-icon color="white" size="96">{{ magnifyIcon }}</v-icon>
    </div>
    <p class="display-1 text-center">{{ $t('movies.notFound.title') }}</p>
    <p class="headline text-center mb-6">{{ $t('movies.notFound.text.first') }}<br>{{ $t('movies.notFound.text.second') }}</p>
    <v-btn :to="{ name: 'home' }" large color="primary">{{ $t('movies.notFound.return') }}</v-btn>
  </v-sheet>
</template>

<script>
  import { mdiMagnify } from '@mdi/js'

  export default {
    data() {
      return {
        magnifyIcon: mdiMagnify
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './NoResults.scss';
</style>