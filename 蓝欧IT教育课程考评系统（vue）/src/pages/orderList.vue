<template>
<!-- 考试记录页 -->
  <div class="order-wrap">
    <h3>考试记录</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>

      <div class="order-list-option">
        开始日期：
        <v-date-picker @on-change="getStartDate"></v-date-picker>
      </div>

      <div class="order-list-option">
        结束日期：
        <v-date-picker @on-change="getEndDate"></v-date-picker>
      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads" @click="changeOrderType(head)" :class="{active:head.active}">{{ head.label }}</th>
        </tr>
        <tr v-for="item in tableData" :key="item.period">
          <td v-for="head in tableHeads">{{ item[head.key] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VSelection from '../components/base/selection'
import VDatePicker from '../components/base/datepicker'
import _ from 'lodash'
export default {
  components: {
    VSelection,
    VDatePicker
  },
  data () {
    return {
  query: '',
      productId: 0,
      startDate: '',
      endDate: '',
      products: [
        {
          label: '自主定义题型',
          value: 0
        },
        {
          label: '批量导入题库',
          value: 1
        },
        {
          label: '智能策略组卷',
          value: 2
        },
        {
          label: '快速诊断短板',
          value: 3
        }
      ],
      tableHeads: [
        {
          label: '考试编号',
          key: 'orderId'
        },
        {
          label: '考试科目',
          key: 'product'
        },
        {
          label: '考试难度',
          key: 'version'
        },
        {
          label: '考试时长',
          key: 'period'
        },
        {
          label: '考试时间',
          key: 'date'
        },
        {
          label: '提交状态',
          key: 'buyNum'
        },
        {
          label: '总分',
          key: 'amount'
        }
      ],
      currentOrder: 'asc',
      tableData: []
    }
  },
  watch: {
    query () {
      this.getList()
    }
  },
  methods: {
    productChange (obj) {
      this.productId = obj.value
      this.getList()
    },
    getStartDate (date) {
      this.startDate = date
      this.getList()
    },
    getEndDate (date) {
      this.endDate = date
      this.getList()
    },
    getList () {
      let reqParams = {
        query: this.query,
        productId: this.productId,
        startDate: this.startDate,
        endDate: this.endDate
      }
      this.$http.post('/api/getOrderList', reqParams)
      .then((res) => {
        this.tableData = res.data.list
      }, (err) => {

      })
    },
    changeOrderType (headItem) {
      this.tableHeads.map((item) => {
        item.active = false
        return item
      })
      headItem.active = true
      if (this.currentOrder === 'asc') {
        this.currentOrder = 'desc'
      }
      else if (this.currentOrder === 'desc') {
        this.currentOrder = 'asc'
      }
      this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style scoped>
.order-wrap {
  width: 62%;
  min-height: 800px;
  margin: 30px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 30px;
  line-height: 30px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background-color: rgb(34, 128, 188);
  border-bottom: 1px solid #2d78f4;
  color: #fff;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
</style>
