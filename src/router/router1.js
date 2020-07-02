// import home from '@/views/Home.vue'
const routers=[{
    path:'/',
    redirect: '/home'
},{
    path:'/page1',
    name:'page1',
    component:()=>import('@/views/page1')
}]
export default routers