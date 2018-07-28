const common = {
  state: {
    navDrawer: false
  },
  mutations: {
    changeNavDrawer: (state, nextValue) => {
      state.navDrawer = nextValue === undefined ? !state.navDrawer : nextValue
    }
  }
}
export default common
