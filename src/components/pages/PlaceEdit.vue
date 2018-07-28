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
import BreadCrumbs from '@/components/parts/common/BreadCrumbs'
export default {
  components: { BreadCrumbs },
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
        {text: 'テニスコート一覧', disabled: true, to: {name: 'PlaceList'}},
        {text: 'テニスコート編集', disabled: false}
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }

}
</script>

<style scoped>

</style>
