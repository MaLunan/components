import Vue from 'vue'
import VueRouter from 'vue-router'
import router1 from '@/router/router1'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    ...router1
  ]
})

export default router
