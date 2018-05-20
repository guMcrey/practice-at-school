# 一个使用vue.js搭建的蓝欧IT教育课程考评系统

# 启动项目
  详情参见：http://www.cnblogs.com/pengjunhao/p/6762141.html

# 核心部分：

    src —— assets —— 所有图片都在这

        —— components —— base —— chooser.vue         —— detail选择组件
                              —— counter.vue         —— detail数量组件
                              —— datepicker.vue      —— 考试记录时间组件
                              —— muktiplyChooser.vue —— detail累加组件
                              —— selection.vue       —— 考试记录列表

                      —— bankChooser.vue —— 点击：创建考试-弹出框
                      —— checkOrder.vue  —— 创建考试-状态
                      —— layout.vue      —— 首页组件
                      —— logForm.vue     —— 登录组件
                      —— regForm.vue     —— 注册组件
                      —— sildeShow.vue   —— detail页组件

        —— pages —— index.vue     —— 首页
                 —— orderList.vue —— 考试记录
                 —— detail.vue    —— 在线考试

             —— detail —— analysis.vue —— 智能策略组卷
		               —— count.vue    —— 自主定义题型
			           —— forecast.vue —— 批量导入题库
			           —— public.vue   —— 快速诊断短板

        —— App.vue —— 主组件，所有页面都是在App.vue下进行切换的（所有路由都是App.vue的子组件)
        —— main.js —— 入口文件，用于初始化vue实例并使用需要的插件

  static —— .gitkeep —— 使用.gitkeep来追踪空的文件夹
           exam.html —— 引用一个html考试题库



# 其他（一般不用管）：
  
  文件夹：

      bulid        —— webpack的文件，参数配置
      config       —— vue全局配置
      node_modules —— node依赖，通过npm下载到项目中

  文件：

      index.html   —— 项目的入口
      package.json —— 使用vue-cli脚手架新建的项目中，含有package.json。
      db.json      —— 使用本地json数据来模仿后台获取数据的流程
     .gitignore    —— 指定需要忽略的文件
     .eslintignore —— 可设置忽略文件。默认为/node_module/* /bower_componenets/*
     .editorconfig —— 编辑器配置文件
     .babelrc      —— babel用来将es6代码转换成浏览器能够识别的代码
