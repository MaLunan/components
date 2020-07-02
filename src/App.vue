//app.js
<template>
  <div id="app">
    <el-container :class="{'hideSidebar':collapse}">
            <layout-com  class="sidebar-container" :dataList='permission_routers' :collapse='collapse'/>
      <el-container>
        <el-button style="margin-left:230px;z-index:1002; position: absolute;;width:50px" :class="['el-icon-menu',{'active':collapse}]" @click="collapseShow()"> </el-button>
        <el-header height="auto">
          
          <div :class="['headerss',{'active':collapse}]" >导航栏</div>
        </el-header>
        <el-main :class="['mains',{'active':collapse}]">
          <!-- <div>Main</div> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutCom from '@/components/Sidebar/index.vue'
import layoutData from '@/views/layout/data.js'
export default {
  name: 'app',
  components: {
    layoutCom
  },
  data () {
    return {
      collapse:false,
      permission_routers:layoutData
    }
  },
  created () {},
  mounted () {},
  methods: {
    collapseShow(){
      this.collapse=!this.collapse
    },
    go(routerUrl){
      // 字符串
      this.$router.push(routerUrl)

      // // 对象
      // router.push({ path: 'home' })

      // // 命名的路由
      // router.push({ name: 'user', params: { userId: '123' }})

      // // 带查询参数，变成 /register?plan=private
      // router.push({ path: 'register', query: { plan: 'private' }})
    },
  }
}
</script>

<style lang='less'>
#app {
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}

.headerss{
  margin-left: 230px;
  height: 54px;
  line-height: 54px;
 
}
.mains{
  flex: 1;
}
.active{
  margin-left:64px !important;
}
.el-header, .el-footer {
  margin-left: 230px;
  background: rgba(255,255,255,1);
  color: #333;
  text-align: center;
}
// .el-aside {
//   background: rgba(30,34,53,1);
//   color: #333;
//   text-align: center;
// }
.el-main {
  margin-left: 230px;
  background: rgba(244,245,248,1);
  color: #333;
}
</style>
