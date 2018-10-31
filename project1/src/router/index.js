import Vue from 'vue'
import Router from 'vue-router'
import City from '../components/1-Takeaway/component/city'
import SearchPath from '../components/1-Takeaway/component/search'
import Takeaway from '../components/1-Takeaway/takeaway'
import Order from '../components/home/order'
import Search from '../components/home/search'
import Search3 from '../components/components/search3'
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
import Hd from '../../src/components/components/hd'
import Mlt from "../components/components/mlt"
import Cxg from "../components/components/cxg"
import Bzzp from '../components/components/bzzp'
import Shopdetail from '../components/components/shopdetail'
import Swiper from '../components/components/swiper'
import LoginDetail from '../components/home/loginDetail'
import SetUsername  from '../components/home/setusername'
import Address  from '../components/home/address'
import Add  from '../components/home/add'
import AddDetail  from '../components/home/adddetail'
import Forget from '../components/home/forget'
import Dpdetail from '../components/components/dpdetail'
import Shopsafe from '../components/components/shopsafe'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/head',
      name: 'hd',
      component: Hd
    },
    {
      path:"/",
      component:City
    },
    {
      path: '/city/:id',
      name: 'search',
      component: SearchPath
    },
    {
      path: '/takeaway',
      component:Home,
      children:[
        {
          path:"/search3",
          component:Search3,
          name:"search3"
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
          path: '/takeaway',
          name: 'takeaway',
          component: Takeaway
        },
      ]
    },
    {
      path:"/search",
      component:Search,
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
      path:"/swiper",
      name:"swiper",
      component:Swiper
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
    }, {
      path: '/mlt/:id',
      name: 'mlt',
      component: Mlt
    },
    {
    path: "/cxg/:id?",
      name: "cxg",
      component: Cxg
    }, {
      path: "/bzzp/:id",
      name: "bzzp",
      component: Bzzp
    },
    {
      path: "/forget",
      name: "forget",
      component: Forget
    },
    {
      path:"/shopdetail",
      name:"shopdetail",
      component:Shopdetail
    },
    {
      path:"/shopdetail/dpdetail",
      name:"dpdetail",
      component:Dpdetail
    },
    {
path:"/shopdetail/dpdetail/shopsafe",
name:"shopsafe",
component:Shopsafe
    },
    {
      path:'/mine/logindetail',
      name:'logindetail',
      component:LoginDetail
    },
    {
      path:'/setusername',
      component:SetUsername
    },
    {
      path:'/address',
      component:Address
    },
    {
      path:'/address/add',
      component:Add
    },
    {
      path:'/add/adddetail',
      component:AddDetail
    },

  ]
})
