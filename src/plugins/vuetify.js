import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export const vuetify = new Vuetify({
  theme: {
    dark: true,

    themes: {
      light: {
        primary: colors.indigo.base
      },

      dark: {
        primary: colors.indigo.base
      }
    }
  }
});
