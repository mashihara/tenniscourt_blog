const store = ({
  state: {
    count: 0
  },
  getters: {
    count2bai: state => {
      return state.count * 2
    }
  },
  mutations: {
    increment: (state) => {
      state.count--
    },
    add: (state, payload) => {
      state.count += payload.amount
    }
  }
})
export default store
