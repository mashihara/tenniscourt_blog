import axios from 'axios'

const place = ({
  state: {
    tableData: [],
    loading: true
  },
  actions: {
    setPlaceList ({ commit }) {
      axios.get('/api/place').then(function (res) {
        commit('setPlaceList', res.data)
      })
    }
  },
  mutations: {
    setPlaceList: (state, tableData) => {
      state.tableData = tableData
      state.loading = false
    }
  }
})
export default place
