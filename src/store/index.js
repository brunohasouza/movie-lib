import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
