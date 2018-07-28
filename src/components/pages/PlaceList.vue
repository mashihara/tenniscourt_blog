<template>
  <div>
    <v-container class="grey lighten-5 pa-0">
      <v-layout>
        <v-flex>
          <BreadCrumbs :breaditems="breaditems"/>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <PlaceTable/>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PlaceTable from '@/components/parts/place/PlaceTable'
import BreadCrumbs from '@/components/parts/common/BreadCrumbs'
export default {
  name: 'PlaceList',
  components: { PlaceTable, BreadCrumbs },
  data: () => ({
    breaditems: [
      {text: 'テニスコート一覧', disabled: false}
    ]
  })
}
</script>

<style scoped>

</style>
