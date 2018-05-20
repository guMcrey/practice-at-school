<template>
<!-- 导航栏 -->
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
          <img src="../assets/lo.png">   <!-- logo图片 -->
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li> {{ username }}</li>
            <li v-if="username!== ''" class="nav-pile">|</li>
            <li v-if="username!== ''" @click="quit">退出</li>
            <li v-if="username=== ''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username=== ''" @click="regClick">注册</li>
            <li v-if="username=== ''" class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>  
      </div>
    </div>
    <!-- 中间 -->
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- 底部 -->
    <div class="app-foot">
      <p>© 2017 Taylor团队版权所有</p>
    </div>
    <!-- 关于 -->
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <h2>蓝欧考评系统</h2>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;本考试系统支持多终端 + 高稳定系统 + 个性化分析 + 分角色管理随时考试 轻松迈入互联网+时代</p>
      <h2>在线考试系统的优点：</h2>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;1.多学员无纸化，多终端全覆盖</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;2.智能错题锦集，方便回顾学习</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;3.自动批卷功能，节省时间精力<p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;4.考后综合预测，找准问题关键</p>
      <h2>160+项功能，应互联网+时代而生：</h2>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;1.搭建题库:批量导入试题、自主定义题型、丰富试题类型、音频/视频题</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;2.轻松组卷：智能策略组卷、灵活设置参数、真题模拟演练、智能阶段测评</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;3.放心考试：知识点反复练习、错题收录反练、制定考试计划、断电断网保护<p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;4.考后评估：电脑自动评分、详细图表解析、分析成绩排名、个人能力评估</p>
      <h2>稳如磐石，海量并发</h2>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;1.按角色发放权限:自定义管理角色，功能权限，栏目，界面，拓展功能可以细化到针对所以对象授权，每一场考试每一场作 业都可以授权。</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;2.有效防止作弊：在考试过程中禁止考试页面外的任何操作，同时可以调整试题的显示顺序有效避免了考试舞弊情况的发生。</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;3.性能稳如磐石：卓越的产品性能，可避免考试过程中任何问题；考试系统久经考验，性能稳定，可承担千人同时在线考试。<p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;4.多终端同步在线：支持PC，APP，移动端同步数据，同步考试,无地域性限制，利用碎片化时间复习和巩固。</p>
    </my-dialog>
    <!-- 登录 -->
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>
  </div>
</template>
<script>
import Dialog from './base/dialog'
import LogForm from './logForm'
import RegForm from './regForm'
export default {
  components: {
    MyDialog: Dialog,
    LogForm,
    RegForm
  },
  data () {
    return {
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      username: ''
    }
  },
  methods: {
    aboutClick () {
      this.isShowAboutDialog = true
    },
    logClick () {
      this.isShowLogDialog = true
    },
    regClick () {
      this.isShowRegDialog = true
    },
    closeDialog (attr) {
      this[attr] = false
    },
    onSuccessLog (data) {
      console.log(data)
      this.closeDialog ('isShowLogDialog')
      this.username = data.username
    }
  }
}

</script>

<style>
/*css重置*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  /*width: 100%;*/
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 370px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background-color: rgb(34, 128, 188);
  border-bottom: 1px solid #2d78f4;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #00ABF7;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
