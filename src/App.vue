<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" width="340" fixed temporary>
      <v-list-item class="absolute">
        <v-list-item-title class="text-h6">
          {{ $t('favoriteMovies.title', { number: moviesLength }) }}
        </v-list-item-title>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <bookmark-list></bookmark-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dense :collapse="true">
      <v-btn icon @click="drawer = !drawer" dark>
        <v-icon>mdi-bookmark-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-btn fab fixed bottom right @click="updateTheme">
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import BookmarkList from '@/components/BookmarkList/BookmarkList.vue'

export default {
  components: {
    BookmarkList
  },

  data() {
    return {
      drawer: false
    }
  },

  computed: {
    ...mapGetters(['moviesLength']),

    icon() {
      return this.$vuetify.theme.dark
        ? 'mdi-weather-night'
        : 'mdi-white-balance-sunny'
    }
  },

  methods: {
    updateTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
};
</script>
