<template>
  <div>
    <v-btn color="secondary">ブログを書く</v-btn>
  </div>

</template>

<script>
export default {
  name: 'PlaceList',
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
      }
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
