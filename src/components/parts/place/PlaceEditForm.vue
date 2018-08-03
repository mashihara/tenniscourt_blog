<template>
  <div>
    <form>
      <v-text-field
        label="display_id"
        :value="placeDetailData.display_id"
        outline
        disabled
      ></v-text-field>
      <v-text-field
        label="テニス場所名"
        :value="placeDetailData.place_name"
        outline
        disabled
      ></v-text-field>
      <v-text-field
        label="section_id"
        :value="placeDetailData.section_id"
        outline
        disabled
      ></v-text-field>
      <v-text-field
        label="system_id"
        :value="placeDetailData.system_id"
        outline
        disabled
      ></v-text-field>
      <v-text-field
        label="place_id"
        :value="placeDetailData.place_id"
        outline
        disabled
      ></v-text-field>
      <v-text-field
        label="place_url"
        v-model="placeDetailData.place_url"
        v-validate="'required|max:100'"
        :counter="100"
        outline
      ></v-text-field>
      <v-textarea
        label="adress"
        v-model="placeDetailData.adress"
        v-validate="'required|max:100'"
        :counter="100"
        outline
      ></v-textarea>
      <v-text-field
        label="latitude"
        v-model="placeDetailData.latitude"
        v-validate="'required|max:100'"
        :counter="100"
        outline
      ></v-text-field>
      <v-text-field
        label="longitude"
        v-model="placeDetailData.longitude"
        v-validate="'required|max:100'"
        :counter="100"
        outline
      ></v-text-field>
      <v-switch
        label="更衣室あり"
        v-model="placeDetailData.changing_room_flg"
        color="secondary"
      ></v-switch>
      <v-switch
        label="シャワールームあり"
        v-model="placeDetailData.shower_flg"
        color="secondary"
      ></v-switch>
      <v-switch
        label="トイレあり"
        v-model="placeDetailData.toilet_flg"
        color="secondary"
      ></v-switch>
      <v-switch
        label="駐車場あり"
        v-model="placeDetailData.parking_flg"
        color="secondary"
      ></v-switch>
      <v-textarea
        label="アクセス方法"
        v-model="placeDetailData.access"
        v-validate="'required|max:100'"
        :counter="100"
        outline
      ></v-textarea>
      <v-btn @click="submit" color="primary" block>更新する</v-btn>
    </form>
    <SnackBar :snackbarFlg="snackbarFlg" @changeSnackBarFlg="changeSnackBarFlg" :text="snackbarText" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import SnackBar from '@/components/parts/common/SnackBar'
const { mapState, mapActions } = createNamespacedHelpers('placeDetail')

export default {
  name: 'PlaceEditForm',
  components: { SnackBar },
  data: () => ({
    testFlg: true,
    snackbarText: '更新が完了しました'
  }),
  mounted: function () {
    let displayId = this.$route.params.display_id
    this.selectPlaceDetail(displayId)
  },
  methods: {
    submit () {
      this.updatePlaceDetail(this.placeDetailData)
    },
    ...mapActions(['selectPlaceDetail', 'updatePlaceDetail']),
    changeSnackBarFlg (value) {
      console.log(value)
      this.$store.commit('completeUpdate', value)
    }
  },
  computed: {
    ...mapState(['placeDetailData', 'completeUpdateFlg']),
    snackbarFlg: {
      get () {
        return this.completeUpdateFlg
      },
      set (value) {
        this.$store.commit('completeUpdate', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
