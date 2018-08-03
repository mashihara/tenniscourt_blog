import axios from 'axios'

const place = ({
  namespaced: true,
  state: {
    placeData: [],
    loading: true
  },
  actions: {
    selectPlaceList ({ commit }) {
      axios.get('/api/places').then(function (res) {
        commit('selectPlaceList', res.data)
      })
    }
  },
  mutations: {
    selectPlaceList: (state, placeData) => {
      state.placeData = placeData
      state.loading = false
    }
  }
})
export default place
