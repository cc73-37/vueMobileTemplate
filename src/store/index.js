import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters.js'
import * as mutations from './mutations.js'
import * as actions from './actions.js'

Vue.use(Vuex)

const state = {
  info:{a:1},
  showLoading:false
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
