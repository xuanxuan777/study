import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import Test from './../views/Test'
import A from './../views/A'
import B from './../views/B'
import Test3 from '../views/Test3'
import Test5 from '../views/Test5'
import IVueX from '@/views/Vuex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/home',
    name:'myhome',
    component:Home,
    children:[
      {
      path:'a',//子路由不需要写/
      component:A
    },{
      path:'b',
      component:B
    }
  ]
  },
  {
    path:'/test',
    component:Test
  },{
    path:'/vuex',
    component:IVueX
  },{
      path:'/test5',
      component:Test5,
      alias:'/aa'
  },
  {
    path:'/:id',
    redirect:'/test3/:id'
  },
  {
    path: '/test3/:id',
    component: Test3
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
