<template>
  <div>
    <h1>{{ count }}</h1>
    <el-table
      :data="tableData"
      :default-sort="{prop: 'display_id', order: 'ascending'}"
      style="width: 100%">

      <el-table-column
        property="display_id"
        label="display_id"
        width="100">
      </el-table-column>

      <el-table-column
        label="コート名"
        width="100">
        <template slot-scope="scope">
          <router-link to="/PlaceEdit">{{ scope.row.place_name }}</router-link>
        </template>
      </el-table-column>

      <el-table-column>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">削除
          </el-button>
          <el-button
            size="mini"
            @click="handleAdd(scope.$index, scope.row)">追加
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PlaceList',
  data () {
    return {
      payload: {
        amount: 10
      }
    }
  },
  // TODO:check created,beforemount,mount
  created: function () {
    this.$store.dispatch('setPlaceList')
  },
  methods: {
    handleDelete (index, row) {
      this.$store.commit('increment')
    },
    handleAdd (index, row) {
      this.$store.commit('add', this.$data.payload)
    }
  },
  computed: {
    ...mapState({
      count: state => state.count,
      tableData: state => state.tableData
    }),
    ...mapGetters([
      'count2bai'
    ])
  }
}
</script>

<style scoped>

</style>
