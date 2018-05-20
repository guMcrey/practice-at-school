<!-- 首页 -->
  <template> 
   <div class="index-wrap">
   <!-- 首页左上  -->
    <div class="index-left"> 
     <div class="index-left-block"> 
      <h2>让面试变得更简单</h2> 
      <template v-for="product in productList"> 
       <h3>{{ product.title}}</h3> 
       <ul> 
        <li v-for="item in product.list"> <a :href="item.url">{{ item.name }}</a> <span v-if="item.hot" class="hot-tag">HOT</span> </li> 
       </ul> 
       <div v-if="!product.last" class="hr"></div> 
      </template> 
     </div> 
     <!-- 首页左下 --> 
     <div class="index-left-block lastest-news"> 
      <h2>为你推荐</h2> 
      <ul> 
       <li v-for="item in newsList"> <a :href="item.url" class="new-item">{{ item.title }}</a> </li> 
      </ul> 
     </div> 
    </div> 
    <!-- 首页右下-课程考试 --> 
    <div class="index-right"> 
     <slide-show :slides="slides" :inv="invTime"></slide-show> 
     <div class="index-board-list"> 
      <div class="index-board-item" v-for="(item, index) in boardList" :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]"> 
       <div class="index-board-item-inner"> 
        <h2>{{ item.title }}</h2> 
        <p>{{ item.description }}</p> 
        <div class="index-board-button"> 
         <router-link class="button" :to="{path: 'detail/' + item.toKey}">
          开始考试
         </router-link> 
        </div> 
       </div> 
      </div> 
     </div> 
    </div> 
   </div> 
  </template> 
  <!-- 首页轮播 --> 
  <script>
import slideShow from '../components/slideShow'
export default {
  components: {
    slideShow
  },
  created: function () {
    this.$http.get('api/getNewsList')
    .then((res) => {
      this.newsList = res.data
    }, (err) => {
      console.log(err)
    })
  },
  data () {
    return {
      invTime: 2000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: '蓝欧在线考评系统',
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: '蓝欧在线考评系统',
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: '蓝欧在线考评系统',
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: '蓝欧在线考评系统',
        }
      ],
      // java、andriod、软件测试、web考试
      boardList: [
        {
          title: 'java开发工程师',
          description: '熟悉Java EE技术，包括Servlet/JSP、JDBC、JMS、Web Service等，对各种开源的软件如Spring、Struts、hibernate/ibatis、Tomcat等有深入的了解',
          id: 'car',
          toKey: '..//static/exam.html',
          saleout: false
        },
        {
          title: '安卓开发工程师',
          description: '熟悉Linux操作系统，具有J2ME或Java开发经验;熟悉ANDROID手机软件架构，熟悉Android平台MMI软件开发，了解基本软件开发流程',
          id: 'earth',
          toKey: '..//static/exam.html',
          saleout: false
        },
        {
          title: '软件测试工程师',
          description: '熟悉软件测试基本知识，软件质量管理基础知识，软件测试概念，软件测试标准，软件测试技术及方法，软件测试项目管理，软件工程开发知识及过程',
          id: 'loud',
          toKey: '..//static/exam.html',
          saleout: true
        },
        {
          title: 'web前端开发工程师',
          description: '熟悉Ajax、JavaScript、Apache、PHP、JSP等WEB开发技术;开发后台服务器搭配系统和后台服务器管理/分析工具的设计和开发;熟悉页面架构和布局',
          id: 'hill',
          toKey: '..//static/exam.html',
          saleout: false
        }
      ],
      // 首页左上
      newsList: [],
      productList: {
        pc: {
          title: '在线考试',
          list: [
            {
              name: '自主定义题型',
              url: 'detail/count'
            },
            {
              name: '批量导入题库',
              url: 'detail/forecast'
            },
            {
              name: '智能策略组卷',
              url: 'detail/analysis',
              hot: true
            },
            {
              name: '快速诊断短板',
              url: 'detail/publish'
            }
          ]
        },
        app: {
          title: '考试管理',
          last: true,
          list: [
            {
              name: '试卷管理',
              url: '#'
            },
            {
              name: '试题管理',
              url: '#',
              hot: true
            },
            {
              name: '考点管理',
              url: '#'
            },
            {
              name: '成绩管理',
              url: '#'
            },
             {
              name: '专业管理',
              url: '#'
            },
             {
              name: '成绩库',
              url: '#'
            }
            
          ]
        }
      }
    }
  }
}
</script> 
  <style scoped>
.index-wrap {
  width: 75%;
  margin: 0 325px;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 320px;
  text-align: left;
  margin: 0 10px;
  line-height: 19px;
}
.index-right {
  float: left;
  width: 960px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  margin-bottom: 20px;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background-color: rgb(34, 128, 188);
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
  font-size: 16px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
  font-size: 14px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-item-inner p{
  line-height: 25px;
}
/*首页轮播图*/
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.jpg) no-repeat;
  display: table-cell; 
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/3.jpg) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.jpg) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 479px;
}

.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 15px;
  white-space: nowrap;
}
</style> 
 </body>
</html>