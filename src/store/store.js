import axios from 'axios'

const store = ({
  state: {
    count: 0,
    tableData: []
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
    }
  }
})
export default store
