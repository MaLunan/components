// import home from '@/views/Home.vue'
const routers=[{
    path:'/',
    redirect: '/home'
},{
    path:'/selectUser',
    name:'selectUser',
    component:()=>import('@/views/selectUser')
},{
    path:'/Pagination',
    name:'Pagination',
    component:()=>import('@/views/Pagination')
},{
    path:'/tree',
    name:'tree',
    component:()=>import('@/views/tree')
},{
    path:'/404',
    name:'404',
    component:()=>import('@/views/404')
}]
export default routers