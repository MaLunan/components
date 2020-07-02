<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="collapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in dataList" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem'
//main.js导入import '@/components/Sidebar/style/sidebar.scss' // global css
export default {
  components: { SidebarItem },
  props:{
    dataList:{
      type: Array,
      default: ''
    },
    collapse:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
    }
  },
  computed: { 
  }
}
</script>
<style lang="scss">
  

</style>
