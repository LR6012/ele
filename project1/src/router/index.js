import Vue from 'vue'
import Router from 'vue-router'
import Order from '../components/home/order'
import Search from '../components/home/search'
import Mine from '../components/home/mine'
import Balance from '../components/home/balance'
import Benefit from '../components/home/benefit'
import Points from '../components/home/points'
import Wd from '../components/home/wd'
import Login from '../components/home/login'
import VipCard from "../components/home/vipCard"
import DownLoad from "../components/home/download"
import Service from "../components/home/service"
import  Questiondetail from "../components/home/questiondetail"
import  Home from '../components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:Home
    },
    {
      path:'/shop',
      component:Home
    },
    {
      path:"/search",
      component:Search,
    },
    {
      path:"/order",
      component:Order
    },
    {
      path:"/mine",
      component:Mine,
      name:'mine'
    },
    {
      path:"/balance",
      component:Balance
    },
    {
      path:"/benefit",
      component:Benefit
    },
    {
      path:"/points",
      name:"points",
      component:Points
    },
    {
      path:"/wd",
      name:"wd",
      component:Wd
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/vipcard",
      component:VipCard
    },
    {
      path:"/download",
      component:DownLoad
    },
    {
      path:'/service',
      component:Service,
    },
    {
      path:'/service/questiondetail',
      name:'questiondetail',
      component:Questiondetail
    }
  ]
})
