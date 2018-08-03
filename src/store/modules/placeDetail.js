import axios from 'axios'

const placeDetail = ({
  namespaced: true,
  state: {
    placeDetailData: {},
    loading: true
  },
  actions: {
    selectPlaceDetail ({ commit }, displayId) {
      axios.get(`/api/places/${displayId}`).then(function (res) {
        commit('selectPlaceDetail', res.data)
      })
    },
    updatePlaceDetail ({ commit, rootState }, model) {
      axios.post(`/api/places/${model.display_id}`, model).then(function (res) {
        commit('SnackBar/changeSnackBarFlg', true, { root: true })
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
