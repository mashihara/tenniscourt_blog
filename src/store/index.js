import Vue from 'vue'
import Vuex from 'vuex'
import place from './modules/place'
import placeDetail from './modules/placeDetail'
import Navigation from './modules/common/Navigation'
import SnackBar from './modules/common/SnackBar'
import Progress from './modules/common/Progress'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    place,
    placeDetail,
    Navigation,
    SnackBar,
    Progress
  }
})
