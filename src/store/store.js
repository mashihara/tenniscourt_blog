import axios from 'axios'

const store = ({
  state: {
    count: 0,
    tableData: [{
      display_id: '0001',
      place_name: '有明'
    }, {
      display_id: '0002',
      place_name: '大井埠頭'
    }, {
      display_id: '0003',
      place_name: '平和島公園'
    }
    ]
  },
  getters: {
    count2bai: state => {
      return state.count * 2
    }
  },
  actions: {
    setPlacelist ({ commit }) {
      let tableData = axios.get('/api/tableData')
      commit('setPlacelist', tableData)
    }
  },
  mutations: {
    increment: (state) => {
      state.count--
    },
    add: (state, payload) => {
      state.count += payload.amount
    },
    setPlacelist: (state, tableData) => {
      state.tableData = tableData
    }
  }
})
export default store
