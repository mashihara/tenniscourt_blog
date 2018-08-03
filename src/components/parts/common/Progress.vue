<template>
  <v-progress-circular
    v-if="progressFlg"
    :size="50"
    color="primary"
    indeterminate
    class="my_absolute_center"
  ></v-progress-circular>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('common/Progress')
export default {
  name: 'Progress',
  computed: {
    ...mapState(['progressFlg']),
    flg: {
      get () {
        return this.progressFlg
      },
      set (nextValue) {
        this.changeProgressFlg(nextValue)
      }
    }
  },
  methods: {
    ...mapMutations(['changeProgressFlg']),
    changeFlg (nextValue) {
      this.changeProgressFlg(nextValue)
    }
  }
}

</script>

<style scoped>
.my_absolute_center{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  margin:auto;
}
</style>
