<template>
<!-- 自主定义题型-右上 -->
  <div class="sales-board">
      <div class="sales-board-intro">
       <h2>自主定义题型</h2>
        <p>题型可由讲师自主定义修改现有题型增加新题型，同时支持图片，文档，音/视频多附件的下载及浏览。</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  编程语言：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections="buyTypes" @on-change="onParamChange('buyType', $event)"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  考试时长：
              </div>
              <div class="sales-board-line-right">
                  <v-chooser
                  :selections="periodList"
                  @on-change="onParamChange('period', $event)"></v-chooser>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  试题类型：
              </div>
              <div class="sales-board-line-right">
                  <v-mul-chooser
                  :selections="versionList"
                  @on-change="onParamChange('versions', $event)"></v-mul-chooser>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总分：
              </div>
              <div class="sales-board-line-right">
                  100分
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button" @click="showPayDialog">
                    创建考试
                  </div>
              </div>
          </div>
      </div>
      <!-- 自主定义题型-右下 -->
      <div class="sales-board-des">
        <h2>考试说明</h2>
        <p>1.自定义管理角色，功能权限，栏目，界面，拓展功能 可以细化到针对所以对象授权，每一场考试每一场作 业都可以授权。</p>
        <p>2.在考试过程中禁止考试页面外的任何操作，同时可以 调整试题的显示顺序有效避免了考试舞弊情况的发生。</p>
        <p>3.全栈程序员入门到精通之必学技能GET &#8595; </p>
        <table class="sales-board-table">
          <tbody>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>数学和逻辑</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>算法</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>网络基础</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>数据库</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>操作系统</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>加密和安全</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>编程基础</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>编译和体系结构</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>数据结构</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>软件工程</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>软件测试</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>Linux</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>Windows</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>数理统计</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>机器学习</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>开发</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>Spring</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>ios</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>Android</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>链表</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>树</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>ZOJ</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>HDOJ</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>POJ</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>排序</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>动态规划</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>分治</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>Java</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>C/C++</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>通讯服务设备</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>HTML/CSS</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>PHP</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>运维</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>数组</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>队列</label>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      </div>
      <!-- 点击-创建考试-弹出窗口 -->
      <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
        <table class="buy-dialog-table">
          <tr>
            <th>试卷数量</th>
            <th>试题难度</th>
            <th>考试时长</th>
            <th>试题类型</th>
            <th>题库试卷</th>
          </tr>
          <tr>
            <td>{{ buyNum }}</td>
            <td>{{ buyType.label }}</td>
            <td>{{ period.label }}</td>
            <td>
              <span v-for="item in versions">{{ item.label }}</span>
            </td>
            <td>{{ price }}</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择组卷语言</h3>
        <bank-chooser @on-change="onChangeBanks"></bank-chooser>
        <div class="button buy-dialog-btn" @click="confirmBuy">
          开始组卷
        </div>
      </my-dialog>
      <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrder"></check-order>
  </div>
</template>

<script>
import VSelection from '../../components/base/selection'
import VCounter from '../../components/base/counter'
import VChooser from '../../components/base/chooser'
import VMulChooser from '../../components/base/multiplyChooser'
import Dialog from '../../components/base/dialog'
import BankChooser from '../../components/bankChooser'
import CheckOrder from '../../components/checkOrder'
import _ from 'lodash'
export default {
  components: {
    VSelection,
    VCounter,
    VChooser,
    VMulChooser,
    MyDialog: Dialog,
    BankChooser,
    CheckOrder
  },
  data () {
    return {
      buyNum: 0,
      buyType: {},
      versions: [],
      period: {},
      price: 0,
      versionList: [
        {
          label: '公司真题',
          value: 0
        },
        {
          label: '专项练习',
          value: 1
        },
        {
          label: '在线编程',
          value: 2
        }
      ],
      periodList: [
        {
          label: '60分钟',
          value: 0
        },
        {
          label: '90分钟',
          value: 1
        },
        {
          label: '120分钟',
          value: 2
        }
      ],
      buyTypes: [
        {
          label: 'Java',
          value: 0
        },
        {
          label: 'C/C++',
          value: 1
        },
        {
          label: 'C#',
          value: 2
        },
        {
          label: 'HTML/CSS',
          value: 3
        },
        {
          label: 'JavaScript',
          value: 4
        },
        {
          label: 'Android',
          value: 5
        }
      ],
      isShowPayDialog: false,
      bankId: null,
      orderId: null,
      isShowCheckOrder: false,
      isShowErrDialog: false
    }
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
      this.getPrice()
    },
    getPrice () {
      let buyVersionsArray = _.map(this.versions, (item) => {
        return item.value
      })
      let reqParams = {
        buyNumber: this.buyNum,
        buyType: this.buyType.value,
        period: this.period.value,
        version: buyVersionsArray.join(',')
      }
      this.$http.post('/api/getPrice', reqParams)
      .then((res) => {
        this.price = res.data.amount
      })
    },
    showPayDialog () {
      this.isShowPayDialog = true
    },
    hidePayDialog () {
      this.isShowPayDialog = false
    },
    hideErrDialog () {
      this.isShowErrDialog = false
    },
    hideCheckOrder () {
      this.isShowCheckOrder = false
    },
    onChangeBanks (bankObj) {
      this.bankId = bankObj.id
    },
    confirmBuy () {
      let buyVersionsArray = _.map(this.versions, (item) => {
        return item.value
      })
      let reqParams = {
        buyNumber: this.buyNum,
        buyType: this.buyType.value,
        period: this.period.value,
        version: buyVersionsArray.join(','),
        bankId: this.bankId
      }
      this.$http.post('/api/createOrder', reqParams)
      .then((res) => {
        this.orderId = res.data.orderId
        this.isShowCheckOrder = true
        this.isShowPayDialog = false
      }, (err) => {
        this.isShowBuyDialog = false
        this.isShowErrDialog = true
      })
    }
  },
  mounted () {
    this.buyNum = 1
    this.buyType = this.buyTypes[0]
    this.versions = [this.versionList[0]]
    this.period = this.periodList[0]
    this.getPrice()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  
  : 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background-color: rgb(34, 128, 188);
  border-bottom: 1px solid #2d78f4;
  color: #fff;
}
.sales-board-des p{
  line-height: 29px;
  }
</style>

