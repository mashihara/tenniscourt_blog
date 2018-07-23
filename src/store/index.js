import Vue from 'vue'
import Vuex from 'vuex'
import place from './modules/place'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    place
  }
})
