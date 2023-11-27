<template>
  <v-sheet class="no-results" rounded>
    <div class="no-results__icon blue-grey lighten-3">
      <v-icon color="white" size="96">mdi-magnify</v-icon>
    </div>
    <p class="display-1 text-center">{{ $t('movies.notFound.title') }}</p>
    <p class="headline text-center mb-0">{{ $t('movies.notFound.text.first') }}<br>{{ $t('movies.notFound.text.second') }}</p>
  </v-sheet>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
@import './NoResults.scss';
</style>