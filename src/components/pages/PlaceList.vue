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
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
        place_name: '平和島公園'
      }
      ]
    }
  },
  methods: {
    handleDelete (index, row) {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
  computed: mapState({
    // アロー関数は、コードをとても簡潔にできます！
    count: state => state.count,
    // 文字列を渡すことは、`state => state.count` と同じです
    countAlias: 'count',
    // `this` からローカルステートを参照するときは、通常の関数を使わなければいけません
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })

}
</script>

<style scoped>

</style>
