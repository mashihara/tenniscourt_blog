<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="display_id">
      <el-input v-model="form.display_id"></el-input>
    </el-form-item>
    <el-form-item label="コート場所名">
      <el-input v-model="form.place_name"></el-input>
    </el-form-item>
    <el-form-item label="URL">
      <el-input v-model="form.url"></el-input>
    </el-form-item>
    <el-form-item label="住所">
      <el-input v-model="form.adress"></el-input>
    </el-form-item>
    <el-form-item label="緯度">
      <el-input v-model="form.latitude"></el-input>
    </el-form-item>
    <el-form-item label="経度">
      <el-input v-model="form.longitude"></el-input>
    </el-form-item>
    <el-form-item label="営業時間">
      <el-input v-model="form.opne_hour"></el-input>
    </el-form-item>
    <el-form-item label="更衣室">
      <el-switch v-model="form.changing_room_flg"></el-switch>
    </el-form-item>
    <el-form-item label="シャワー">
      <el-switch v-model="form.shower_flg"></el-switch>
    </el-form-item>
    <el-form-item label="トイレ">
      <el-switch v-model="form.toilet_flg"></el-switch>
    </el-form-item>
    <el-form-item label="駐車場">
      <el-switch v-model="form.parking_flg"></el-switch>
    </el-form-item>
    <el-form-item label="アクセス方法">
      <el-input type="textarea" :rows="3" v-model="form.access"></el-input>
    </el-form-item>
    <el-form-item label="ブログ記事">
      <el-input type="textarea" :rows="6" v-model="form.description"></el-input>
    </el-form-item>

    <el-form-item label="Activity zone">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1"
                        style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.date2"
                        style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type"></el-checkbox>
        <el-checkbox label="Promotion activities" name="type"></el-checkbox>
        <el-checkbox label="Offline activities" name="type"></el-checkbox>
        <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio label="Sponsor"></el-radio>
        <el-radio label="Venue"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
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
