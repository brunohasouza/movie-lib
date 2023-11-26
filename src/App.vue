<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { client } from '@/service/http-client'

export default {
  name: 'App',

  data: () => ({ }),

  methods: {
    fetchMovies() {
      client.get(null, {
        params: {
          s: 'Guardians',
          page: 1
        }
      }).then(response => console.log(response.data))
        .catch(err => console.error(err))
    },
  },
};
</script>
