<template>
  <v-main>
    <v-container fill-height fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center mb-6">
          <app-logo large></app-logo>
        </v-col>
        <v-col md="6">
          <v-form
            ref="searchForm"
            v-model="valid"
            @submit.prevent="onSubmit"
          >
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
  import AppLogo from '@/components/AppLogo/AppLogo.vue'
  export default {
    components: {
      AppLogo
    },

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
