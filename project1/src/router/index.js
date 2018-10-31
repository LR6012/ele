import Vue from 'vue'
import Router from 'vue-router'
import City from '../components/1-Takeaway/component/city'
import SearchPath from '../components/1-Takeaway/component/search'
import Takeaway from '../components/1-Takeaway/takeaway'
import Order from '../components/home/order'
import Search3 from '../components/components/search3'
import Mine from '../components/home/mine'
import Balance from '../components/home/balance'
import Benefit from '../components/1-Takeaway/benefit'
import Points from '../components/home/points'
import Wd from '../components/home/wd'
import Login from '../components/home/login'
import VipCard from "../components/home/vipCard"
import DownLoad from "../components/home/download"
import Service from "../components/home/service"
import Questiondetail from "../components/home/questiondetail"
import Home from '../components/home/home'
import Mlt from "../components/components/mlt"
import Cxg from "../components/components/cxg"
import Bzzp from '../components/components/bzzp'
<<<<<<< HEAD
import Shopdetail from '../components/components/shopdetail'
import Swiper from '../components/components/swiper'
=======
import Critic from '../components/components/critic'
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
import LoginDetail from '../components/home/loginDetail'
import SetUsername from '../components/home/setusername'
import Address from '../components/home/address'
import Add from '../components/home/add'
import AddDetail from '../components/home/adddetail'
import Forget from '../components/home/forget'
<<<<<<< HEAD
import Dpdetail from '../components/components/dpdetail'
import Shopsafe from '../components/components/shopsafe'
import Zsd from '../components/components/zsd'

=======
import Hongbao from '../components/1-Takeaway/hongbao'
import Daijinquan from '../components/1-Takeaway/daijinquan'
import PayLine from '../components/home/payline'
import VipDescription from '../components/home/vipdescription'
import Record from '../components/home/record'
import UseCard from '../components/home/usecard'
import Shopdetail from '../components/components/shopdetail'
import Dpdetail from '../components/components/dpdetail'
import Shopsafe from '../components/components/shopsafe'
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
Vue.use(Router)

export default new Router({
  routes: [
{
  path:"/zsd",
  component:Zsd
}
    ,
    {
      path: "/",
      component: City
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPath
    },
    {
      path: '/takeaway',
      component: Home,
      children: [
        {
          path: "/search3",
          component: Search3,
          name: "search3"
        },
        {
          path: "/order",
          name:'order',
          component: Order
        },
        {
          path: "/mine",
          component: Mine,
          name: 'mine'
        },
        {
          path: '/takeaway',
          name: 'takeaway',
          component: Takeaway
        },
      ]
    },
    {
      path: "/balance",
      component: Balance
    },
    {
      path: "/benefit",
      component: Benefit,
      children: [{
        path: "/benefit/hongbao",
        component: Hongbao
      }, {
        path: "/benefit/daijinquan",
        component: Daijinquan
      }]
    },
    {
      path: "/points",
      name: "points",
      component: Points
    },
    {
      path: "/wd",
      name: "wd",
      component: Wd
    },
    {
<<<<<<< HEAD
      path:"/swiper",
      name:"swiper",
      component:Swiper
    },
    {
      path:"/wd",
      name:"wd",
      component:Wd
=======
      path: "/login",
      component: Login
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
    },
    {
      path: "/vipcard",
      component: VipCard
    },
    {
      path: "/download",
      component: DownLoad
    },
    {
      path: '/service',
      component: Service,
    },
    {
      path: '/service/questiondetail',
      name: 'questiondetail',
      component: Questiondetail
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
      path: "/critic",
      component: Critic,
      name: "critic"
    },
    {
<<<<<<< HEAD
      path:"/shopdetail/dpdetail",
      name:"dpdetail",
      component:Dpdetail
    },
    {
path:"/shopdetail/dpdetail/shopsafe",
name:"shopsafe",
component:Shopsafe
=======
      path: '/mine/logindetail',
      name: 'logindetail',
      component: LoginDetail
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
    },
    {
      path: '/setusername',
      component: SetUsername
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/address/add',
      name: 'add',
      component: Add
    },
    {
      path: '/add/adddetail',
      component: AddDetail
    },
    {
      path: '/payline',
      component: PayLine
    },
    {
      path: '/vipcard/vipdesciption',
      component: VipDescription
    },
    {
      path: '/vipcard/record',
      component: Record
    },
    {
      path: '/vipcard/usecard',
      component: UseCard
    },
    {
      path: "/shopdetail",
      name: "shopdetail",
      component: Shopdetail
    },
    {
      path: "/shopdetail/dpdetail",
      name: "dpdetail",
      component: Dpdetail
    },
    {
      path: "/shopdetail/dpdetail/shopsafe",
      name: "shopsafe",
      component: Shopsafe
    },
  ]
});
