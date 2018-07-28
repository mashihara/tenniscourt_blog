<template>
  <v-app id="inspire">
    <!-- navigation -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-5"
      app
    >
      <v-list
        class="grey lighten-5 pt-5"
      >
        <template v-for="(item, i) in items">
          <v-divider
            v-if="item.divider"
            :key="i"
            class="my-3"
          ></v-divider>
          <v-list-tile
            v-else
            :key="i"
            @click="pushLink(item.link)"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="subheading grey--text text--darken-4">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- header -->
    <v-toolbar color="accent" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
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
  methods: {
    pushLink: function (link) {
      this.$router.push(link)
    },
    titlePush: function () {
      this.$router.push('/')
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
  .v-navigation-drawer__border {
    display: none;
  }
  .wf-nicomoji {
    font-family: "Nico Moji"!important;
  }
</style>
