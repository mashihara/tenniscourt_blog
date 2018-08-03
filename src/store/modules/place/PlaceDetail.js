import axios from 'axios'

const placeDetail = ({
  namespaced: true,
  state: {
    placeDetailData: {},
    loading: true
  },
  actions: {
    selectPlaceDetail ({ commit }, displayId) {
      commit('common/Progress/changeProgressFlg', true, { root: true })
      axios.get(`/api/places/${displayId}`).then(function (res) {
        commit('selectPlaceDetail', res.data)
        commit('common/Progress/changeProgressFlg', false, { root: true })
      })
    },
    updatePlaceDetail ({ commit, rootState }, model) {
      axios.post(`/api/places/${model.display_id}`, model).then(function (res) {
        commit('common/SnackBar/changeSnackBarFlg', true, { root: true })
      })
    }
  },
  mutations: {
    selectPlaceDetail: (state, placeDetailData) => {
      state.placeDetailData = placeDetailData
      state.loading = false
    }
  }
})
export default placeDetail
