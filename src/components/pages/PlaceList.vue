<template>
  <div>
    <el-table
      :data="tableData"
      :default-sort="{prop: 'display_id', order: 'ascending'}"
      style="width: 100%">

      <el-table-column
        property="display_id"
        label="display_id"
        width="120">
      </el-table-column>

      <el-table-column
        label="コート場所名"
        width="180">
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
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'PlaceList',
  data () {
    return {
      tableData: [{
        display_id: '0001',
        place_name: '有明'
      }, {
        display_id: '0002',
        place_name: '大井埠頭'
      }, {
        display_id: '0003',
        place_name: '芝浦埠頭'
      }
      ]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>

</style>
