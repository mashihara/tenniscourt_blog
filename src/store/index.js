import Vue from 'vue'
import Vuex from 'vuex'
import place from './modules/place'
import placeDetail from './modules/placeDetail'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    place,
    placeDetail,
    common
  }
})
