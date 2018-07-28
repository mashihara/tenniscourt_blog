<template>
  <div>
    <BreadCrumbs :breaditems="breaditems"/>
    <v-container class="grey lighten-5">
      <v-layout>
        <v-flex>
          <PlaceEditForm/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import BreadCrumbs from '@/components/parts/common/BreadCrumbs'
import PlaceEditForm from '@/components/parts/place/PlaceEditForm'
export default {
  components: { BreadCrumbs, PlaceEditForm },
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      breaditems: [
        {text: 'テニス場所一覧', disabled: true, to: {name: 'PlaceList'}},
        {text: 'テニス場所編集', disabled: false}
      ]
    }
  }
}
</script>

<style scoped>

</style>
