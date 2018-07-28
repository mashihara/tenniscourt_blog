<template>
  <v-app id="inspire">
    <Navigation />
    <!-- header -->
    <v-toolbar color="accent" app absolute clipped-left>
      <v-toolbar-side-icon @click="changeNavDrawer"></v-toolbar-side-icon>
      <span class="teal--text text--darken-2 headline ml-3 mr-5 wf-nicomoji" @click="titlePush">
        テニスベア
      </span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-5 pa-0">
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/parts/common/Navigation'
export default {
  data: () => ({
    drawer: null,
    items: [
      {icon: 'home', text: 'ホーム', link: '/'},
      {divider: true},
      {icon: 'map', text: 'テニスコートを探す', link: '/tokyo-tennis-map'},
      {icon: 'people', text: 'テニスサークルを探す', link: '/tokyo-tennis-map'},
      {icon: 'directions_run', text: 'テニススクールを探す', link: '/tokyo-tennis-court'},
      {divider: true},
      {icon: 'touch_app', text: 'about us', link: '/tokyo-tennis-court'},
      {divider: true},
      {icon: 'fingerprint', text: 'ログイン', link: '/tokyo-tennis-court'},
      {divider: true},
      {icon: 'touch_app', text: '東京壁打ちマップ'}
    ]
  }),
  components: {Navigation},
  methods: {
    pushLink: function () {
      this.$router.push('/placeEdit')
    },
    titlePush: function () {
      this.$router.push('/')
    },
    changeNavDrawer: function () {
      this.$store.commit('changeNavDrawer')
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
    font-family: "Nico Moji"!important;
  }
</style>
