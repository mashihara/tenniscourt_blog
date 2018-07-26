<template>
  <v-navigation-drawer
    :value="drawer"
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
</template>

<script>
export default {
  data: () => ({
    items: [
      {icon: 'home', text: 'ホーム', link: '/'},
      {divider: true},
      {icon: 'map', text: 'テニスコートを探す', link: '/tokyo-tennis-map'},
      {icon: 'people', text: 'テニスサークルを探す', link: '/tokyo-tennis-map'},
      {icon: 'touch_app', text: 'テニススクールを探す', link: '/tokyo-tennis-court'},
      {divider: true},
      {icon: 'touch_app', text: 'about us', link: '/tokyo-tennis-court'},
      {divider: true},
      {icon: 'touch_app', text: 'ログイン', link: '/tokyo-tennis-court'},
      {divider: true},
      {icon: 'settings', text: '東京壁打ちマップ'}
    ]
  }),
  methods: {
    pushLink: function (link) {
      this.$router.push(link)
    },
    titlePush: function () {
      this.$router.push('/')
    }
  },
  computed: {
    drawer: function () {
      return this.$store.state.common.navDrawer
    }
  }
}
</script>

<style scoped>
  .v-navigation-drawer__border {
    display: none;
  }
</style>
