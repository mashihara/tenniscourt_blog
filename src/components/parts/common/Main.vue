<template>
  <v-app id="inspire">
    <Navigation/>
    <!-- navigation -->
    <!-- header -->
    <v-toolbar color="accent" app absolute clipped-left>
      <v-toolbar-side-icon @click="changeNavDrawer"></v-toolbar-side-icon>
      <span class="teal--text text--darken-2 headline ml-3 mr-5 wf-nicomoji" @click="titlePush">
        テニスベア
      </span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/parts/common/Navigation'

export default {
  components: {Navigation},
  methods: {
    pushLink: function () {
      this.$router.push('/placeEdit')
    },
    titlePush: function () {
      this.$router.push('/')
    },
    changeNavDrawer: function (event) {
      this.$store.commit('common/Navigation/changeNavDrawer')
    }
  }
}
</script>
<style>
  #keep main .container {
    height: 660px;
  }
  .text {
    font-weight: 400;
  }

  .wf-nicomoji {
    font-family: "Nico Moji" !important;
  }
</style>
