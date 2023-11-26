<template>
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
</template>

<script>
  export default {
    data() {
      return {
        search: '',
        valid: true,
      }
    },

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
      onSubmit() {
        const isValid = this.$refs.searchForm.validate()

        if (!isValid) return

        this.$router.push({
          name: 'movies',
          query: {
            title: encodeURIComponent(this.search)
          }
        })
      }
    }
  }
</script>
