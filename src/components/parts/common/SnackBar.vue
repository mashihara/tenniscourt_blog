<template>
  <v-snackbar
    :value="flg"
    :timeout="6000"
    bottom
    left
  >
    {{ text }}
    <v-btn
      color="pink"
      flat
      @click="$emit('changeSnackBarFlg',false)"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnackBar',
  props: ['snackbarFlg', 'text'],
  computed: {
    flg: {
      get () {
        console.log('get')
        return this.snackbarFlg
      },
      set () {
        console.log('set')
        this.$emit('changeSnackBarFlg')
      }
    }
  }
}
</script>

<style scoped>

</style>
