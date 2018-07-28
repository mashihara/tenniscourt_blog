<template>
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
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: ['breaditems']
}
</script>

<style scoped>

</style>
