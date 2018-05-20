<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>智能策略组卷</h2>
        <p>考试酷网站提供了通用性非常强的智能组卷功能，也支持非常灵活的智能组卷策略，可以依据题型、知识点和章节、难度等各种分类方法进行智能组卷。</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  试题难度：
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
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button" @click="showPayDialog">
                    创建考试
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
      <h2>考试说明</h2>
        <p>1.智能组卷：从题库里以随机选题的方式组成一份高质量的试卷；</p>
        <p>2.随机选题考试模式：组织一次考试、考核或竞赛，让每个考生拿到的试卷试题都不相同，以防止舞弊，或者适用于跨地区跨时间的竞赛或考试场合；</p>
        <p>3.随机选题练习模式：让学生随机选题练习，每次练习都自动从题库中抽选出随机的试题进行练习。</p>
        <br>
        <h2>题库、策略、组卷等概念</h2>
        <p>题库：题库就是你的所有试题的集合。</p>
        <p>策略：策略就是你以什么样的规则来选题，从而组成一份试卷。</p>
        <p>组卷：组卷就是依据规划好的策略，从题库里选题，组成一份试卷的过程。</p>
        <p>特别需要用户理解的是：在考试酷里，题库、策略、组卷这三个概念，都设计为“试卷”了。这样的设计，可以提供非常强大的通用性和扩展性。而且，题库本身不但可以当作“库”使用，同时也可以当作“试卷”使用。</p>
      </div>
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
          label: '入门版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
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
