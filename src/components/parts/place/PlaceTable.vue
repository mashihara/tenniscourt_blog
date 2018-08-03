<template>
  <v-card>
    <v-card-title class="pt-0">
      <v-text-field
        v-model="search"
        append-icon="search"
        label="display_idかコート名で検索"
        single-line
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
        <td><router-link :to="{ name: 'PlaceEdit', params: { display_id: props.item.display_id }}">{{ props.item.place_name }}</router-link></td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        "{{ search }}"というコートはありません。
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('place/PlaceList')

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
  methods: {
    ...mapActions(['selectPlaceList'])
  },
  created: function () {
    this.selectPlaceList()
  },
  computed: {
    ...mapState(['placeData', 'loading'])
  }
}
</script>

<style scoped>

</style>
