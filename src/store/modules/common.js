const common = {
  state: {
    navDrawer: false
  },
  mutations: {
    changeNavDrawer: (state) => {
      state.navDrawer = !state.navDrawer
    },
    falseNavDrawer: (state) => {
      state.navDrawer = false
    }
  }
}
export default common
