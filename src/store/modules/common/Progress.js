const Progress = {
  namespaced: true,
  state () {
    return {
      progressFlg: false
    }
  },
  mutations: {
    changeProgressFlg: (state, nextValue) => {
      state.progressFlg = nextValue === undefined ? !state.progressFlg : nextValue
    }
  }
}
export default Progress
