<template>
  <el-table
    :data="tableData"
    :default-sort = "{prop: 'display_id', order: 'descending'}"
    style="width: 100%">

    <el-table-column
      property="display_id"
      label="display_id"
      width="120">
    </el-table-column>

    <el-table-column
      property="place_name"
      label="コート場所名"
      width="120">
    </el-table-column>

    <el-table-column
      >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">編集
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">削除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

  export default {
    name: "PlaceList",
    data() {
      return {
        tableData: [{
          display_id :'0001',
          place_name :'有明',
        }, {
          display_id :'0002',
          place_name :'大井埠頭',
        }, {
          display_id :'0003',
          place_name :'芝浦埠頭',
        }
        ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }

</script>

<style scoped>

</style>
