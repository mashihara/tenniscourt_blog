<template>
  <v-snackbar
    v-model="flg"
    :timeout="3000"
    bottom
    right
  >
    {{ text }}
    <v-btn
      color="pink"
      flat
      @click="changeFlg(false)"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('common/SnackBar')
export default {
  name: 'SnackBar',
  props: ['text'],
  computed: {
    ...mapState(['snackBarFlg']),
    flg: {
      get () {
        return this.snackBarFlg
      },
      set (nextValue) {
        this.changeSnackBarFlg(nextValue)
      }
    }
  },
  methods: {
    ...mapMutations(['changeSnackBarFlg']),
    changeFlg (nextValue) {
      this.changeSnackBarFlg(nextValue)
    }
  }
}
</script>

<style scoped>

</style>
