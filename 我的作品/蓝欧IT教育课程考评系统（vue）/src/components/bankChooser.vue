<template>
<!-- 创建考试-弹出框 -->
  <div class="chooser-component">
    <ul class="chooser-list">
      <li
      v-for="(item, index) in banks"
      @click="chooseSelection(index)"
      :title="item.label"
      :class="[item.name, {active: index === nowIndex}]"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowIndex: 0,
      banks: [
          {
              id: 201,
              label: 'java',
              name: 'zhaoshang'
          },
          {
              id: 301,
              label: 'Android',
              name: 'jianshe'
          },
          {
              id: 601,
              label: 'C/C++',
              name: 'pufa'
          },
          {
              id: 1101,
              label: 'HTML/CSS',
              name: 'jiaotong'
          },
          {
              id: 101,
              label: 'C#',
              name: 'gongshang'
          },
          {
              id: 401,
              label: 'JavaScript',
              name: 'nongye'
          },
          {
              id: 1201,
              label: 'PHP',
              name: 'zhongguo'
          },
          {
              id: 501,
              label: '软件测试',
              name: 'zhongxin'
          }
      ]
    }
  },
  methods: {
    chooseSelection (index) {
      this.nowIndex = index
      this.$emit('on-change', this.banks[index])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li.active {
  border: 1px solid #2d78f4;
}
.chooser-list li { 
    display: inline-block;
    width: 130px;
    height: 32px;
    background-image: url(../assets/banks/lang.png);     /*选择语言图片*/
    background-repeat: no-repeat;
    margin: 5px;
    border: 1px solid #e3e3e3;
    cursor: pointer;
}
.zhaoshang {
    background-position: 2px 0;
}
.jianshe {
    background-position: -120px 0;
}
.pufa {
    background-position: -245px 0;
}
.jiaotong {
    background-position: -373px 0;
}
.minsheng {
    background-position: -300px 0;
}
.pingan {
    background-position: -670px 0;
}
.beijing {
    background-position: -650px 0;
}
.xingye {
    background-position: -900 0;
}
.shanghai {
    background-position: -670px 0;
}
.guangfa {
    background-position: -700px 0;
}
.gongshang {
    background-position: -500px 0;
}
.nongye {
    background-position: -627px 0;
}
.guangda {
    background-position: -800px 0;
}
.zhongguo {
    background-position: -755px 0;
}
.zhongxin {
    background-position: -880px 0;
}
.chuxu {
    background-position: -120px 0;
}
.bnongshang {
    background-position: -1440px 0;
}
.huaxia {
    background-position: -2040px 0;
}
.snongshang {
    background-position: -2880px 0;
}

.baifubao {
    background-position: -1320px 0;
}
</style>
