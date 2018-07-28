<template>
  <v-container class="grey lighten-5 pa-0">
    <v-layout>
      <v-flex>
        <v-breadcrumbs divider="/">
          <v-breadcrumbs-item
            v-for="item in breaditems"
            :key="item.text"
            :disabled="item.disabled"
            :to="item.to"
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: ['breaditems']
}
</script>

<style scoped>

</style>
