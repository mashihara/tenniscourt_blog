import axios from 'axios'

const place = ({
  state: {
    count: 0,
    tableData: [],
    loading: true
  },
  getters: {
    count2bai: state => {
      return state.count * 2
    }
  },
  actions: {
    setPlaceList ({ commit }) {
      axios.get('/api/place').then(function (res) {
        console.log(res)
        commit('setPlaceList', res.data)
      })
    }
  },
  mutations: {
    increment: (state) => {
      state.count--
    },
    add: (state, payload) => {
      state.count += payload.amount
    },
    setPlaceList: (state, tableData) => {
      state.tableData = tableData
      state.loading = false
    }
  }
})
export default place
