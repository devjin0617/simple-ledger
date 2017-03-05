<template>

  <div>
    <el-table
    :data="dataList"
    border
    style="width: 100%"
    height="250">
      <el-table-column
        fixed
        prop="date"
        label="날짜"
        width="150">
      </el-table-column>
      <el-table-column
        prop="text"
        label="내용"
        width="200">
      </el-table-column>
      <el-table-column
        prop="profit"
        label="수익"
        width="120">
      </el-table-column>
      <el-table-column
        prop="expense"
        label="지출"
        width="120">
      </el-table-column>
      <el-table-column
        prop="etc"
        label="비고"
        width="300">
      </el-table-column>
      <el-table-column
        label="액션"
        width="120">
        <template scope="scope">
          <div class="el-button-group-wrap">
            <el-button-group>
              <el-button type="primary" @click="modifyItem" icon="edit" size="mini"></el-button>
              <el-button type="danger" @click="deleteItem" icon="delete" size="mini"></el-button>
            </el-button-group>
          </div>
      </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      dataList: [
        {
          date: '2017-03-06',
          text: '1/4분기 목장지원금',
          profit: 40000,
          expense: 0,
          etc: ''
        }
      ]
    }
  },
  methods: {
    modifyItem () {
      this.$message({
        showClose: true,
        message: `it's modify`
      })
    },
    deleteItem () {
      this.$message({
        showClose: true,
        message: `it's delete`,
        type: 'error'
      })
    }
  }
}
</script>


<style>

.el-button-group-wrap {
  text-align: center;
}

</style>
