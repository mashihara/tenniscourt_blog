<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="display_idかコート名で検索"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="placeData"
      :loading="loading"
      :search="search"
      :rows-per-page-items="[25, 50, 100]"
      rows-per-page-text="1ページあたりの件数"
      hide-headers
      class="elevation-0"
    >
      <v-progress-linear slot="progress" color="primary" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.display_id }}</td>
        <td><router-link to="/tennis-place-edit">{{ props.item.place_name }}</router-link></td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        "{{ search }}"というコートはありません。
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PlaceTable',
  data () {
    return {
      headers: [
        { text: 'display_id', value: 'display_id' },
        { text: 'コート名', value: 'place_name' }
      ],
      search: ''
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
