//Sidebaritem.vue
<template>
  <div class="menu-wrapper">
      <template v-if="!item.children||!item.children.length>0">
        <router-link :to="{path:item.path}">
          <el-menu-item :index="item.path" :class="{'submenu-title-noDropdown':!isNest}">
            <item v-if="item.meta" :icon="item.meta.icon||item.meta.icon" :title="item.meta.title" />
          </el-menu-item>
        </router-link>
      </template>

      <el-submenu v-else :index="item.meta.title">
        <template slot="title">
          <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title" />
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item
            v-if="child.children&&child.children.length>0"
            :is-nest="true"
            :item="child"
            :isOne='false'
            :key="child.title"
            :base-path="child.path"
            class="nest-menu" />
          <router-link v-else :to="{path:child.path}" :key="child.name">
            <el-menu-item :index="child.path">
              <item v-if="child.meta" :icon="child.meta.icon" :title="child.meta.title" />
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </div>
</template>

<script>
import path from 'path'
import Item from './Item'

export default {
  name: 'SidebarItem',
  components: { Item },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    },
    isOne:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })

      if (showingChildren.length === 1) {
        return true
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
        return routePath
    },
  }
}
</script>
