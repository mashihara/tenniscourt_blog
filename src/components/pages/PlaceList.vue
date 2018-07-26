<template>
  <v-layout justify-center>
    <v-flex>
      <PlaceTable/>
    </v-flex>
  </v-layout>
</template>

<script>
import PlaceTable from '@/components/parts/place/PlaceTable'
export default {
  name: 'PlaceList',
  components: { PlaceTable }
}
</script>

<style scoped>

</style>
