import VueI18n from 'vue-i18n'
import Vue from 'vue'
import en from './en'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en,
  }
})