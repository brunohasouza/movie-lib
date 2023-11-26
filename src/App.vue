<template>
  <v-app>

    <v-main>
      <v-container fill-height fluid>
        <v-row no-gutters justify="center" align="center">
          <v-col md="6">
            <v-form ref="searchForm" v-model="valid" @submit.prevent="onSubmit">
              <v-text-field
                v-model="search"
                :rules="searchRules"
                :placeholder="$t('search.placeholder')"
                prepend-inner-icon="mdi-magnify"
                rounded
                filled
              ></v-text-field>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { client } from './service/http-client'

export default {
  name: 'App',

  data: () => ({
    search: '',
    valid: true,
    movies: []
  }),

  computed: {
    searchRules() {
      return [
        v => {
          const value = v?.trim()

          return !!value || this.$t('validations.required', { field: 'This field' })
        }
      ]
    }
  },

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

    onSubmit() {
      const isValid = this.$refs.searchForm.validate()
      if (!isValid) return
    }
  },
};
</script>
