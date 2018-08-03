<template>
  <v-bottom-nav
    :active.sync="bottomNav"
    :color="color"
    :value="true"
    fixed

  >
    <v-btn dark>
      <span>blog</span>
      <v-icon>note</v-icon>
    </v-btn>

    <v-btn dark>
      <span>info</span>
      <v-icon>inbox</v-icon>
    </v-btn>

    <v-btn dark>
      <span>money</span>
      <v-icon>attach_money</v-icon>
    </v-btn>
  </v-bottom-nav>

</template>

<script>
export default {
  name: 'PlaceBottomNav',
  data () {
    return {
      bottomNav: 2
    }
  },
  computed: {
    color () {
      switch (this.bottomNav) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
      }
    }
  }

}
</script>

<style scoped>

</style>
