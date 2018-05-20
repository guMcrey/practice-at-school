<template>
<!-- 批量导入题库-右上 -->
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>批量导入题库</h2>
        <p>支持试题批量导入，支持图片，动画声音影片等多媒体试题，复杂的数学公式整张网页格式录入。</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                 试题数量：
              </div>
              <div class="sales-board-line-right">
                  <v-counter :max="10" :min="1"></v-counter>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  试题类型：
              </div>
              <div class="sales-board-line-right">
                  <v-mul-chooser :selections="versionList"></v-mul-chooser>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效期：
              </div>
              <div class="sales-board-line-right">
                  一年
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button">
                    立即上传
                  </div>
              </div>
          </div>
      </div>
      <!-- 批量导入题库-右下 -->
      <div class="sales-board-des">
        <h2>上传须知</h2>
        <p>1.所上传试卷须与自测版的分类相关；试题内容新颖、严谨；</p>
        <p>2.试题形式：选择题、填空题、问答题皆可，选择题和填空题的答案务必正确；</p>
        <p>3.试卷最好为WORD文档，可以编辑修改，并附有答案。没有答案或扫描版试卷一般不给审核通过；</p>
        <p>4.对于大于1MB的WORD或PPT文档上请将试卷压缩后上传。否则不予通过；</p>
        <p>5.上传为自己公司试卷为好，对于各类网校上下载的有版权标识的试卷，请不要上传。</p>
        <br>
        <h2>奖励</h2>
        <p>1.本站大部分试卷为不对于大于1MB的WORD或PPT文档上请将试卷压缩后上传。否则不予通过!扣点下载，用户只需注册后，即可下载本站不扣点试卷；</p>
        <p>2.为了试卷更好交流，对于一些较新的试卷仍实行扣点下载。用户可通过上传试卷换点，上传一份试卷，通过审核后可获得15点。</p>
      </div> 
    </div>
  </div>
</template>

<script>
import VCounter from '../../components/base/counter'
import VMulChooser from '../../components/base/multiplyChooser'
export default {
  components: {
    VCounter,
    VMulChooser
  },
  data () {
    return {
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
          label: '编程题',
          value: 2
        },
        {
          label: '精华专题',
          value: 3
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sales-board-des p{
    line-height: 29px;
}
</style>
