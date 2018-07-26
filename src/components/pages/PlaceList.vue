<template>
  <v-data-table
    :headers="headers"
    :items="placeData"
    :loading="loading"
    hide-actions
    class="elevation-1"
  >
    <v-progress-linear slot="progress" color="primary" indeterminate></v-progress-linear>
    <template slot="items" slot-scope="props">
      <td>{{ props.item.display_id }}</td>
      <td><router-link to="/PlaceEdit">{{ props.item.place_name }}</router-link></td>
    </template>
  </v-data-table>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PlaceList',
  data () {
    return {
      headers: [
        { text: 'display_id', value: 'display_id' },
        { text: 'コート名', value: 'place_name' }
      ]
    }
  },
  // TODO:check created,beforemount,mount
  created: function () {
    this.$store.dispatch('setPlaceList')
  },
  computed: {
    ...mapState({
      placeData: store => store.place.tableData,
      loading: store => store.place.loading
    })
  }
}
</script>

<style scoped>

</style>
