import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common/index'
import place from './modules/place/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    place,
    common
  }
})
