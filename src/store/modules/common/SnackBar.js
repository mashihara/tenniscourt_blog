const SnackBar = {
  namespaced: true,
  state () {
    return {
      snackBarFlg: false
    }
  },
  mutations: {
    changeSnackBarFlg: (state, nextValue) => {
      state.snackBarFlg = nextValue === undefined ? !state.snackBarFlg : nextValue
    }
  }
}
export default SnackBar
