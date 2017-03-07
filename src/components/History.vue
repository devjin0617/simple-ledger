<template>

  <div>
    <div class="input-wrap">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-date-picker
              type="date"
              placeholder="Pick a day">
            </el-date-picker>
        </el-col>
        <el-col :span="7">
          <el-input placeholder="금액" type="number">
            <el-select v-model="select" slot="prepend" placeholder="종류">
              <el-option label="수익" value="1"></el-option>
              <el-option label="지출" value="2"></el-option>
            </el-select>
          </el-input>
        </el-col>
        <el-col :span="9">
          <el-input placeholder="내용"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">등록</el-button>
        </el-col>
      </el-row>
    </div>
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

.input-wrap {
  margin: 10px 0;
}

.el-select .el-input {
  width: 80px;
}

</style>
