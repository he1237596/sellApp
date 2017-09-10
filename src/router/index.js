import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/Goods'
import ratings from '@/components/ratings/Ratings'
import seller from '@/components/seller/Seller'

Vue.use(Router);

export default new Router({
  linkActiveClass:'active',//动态类名
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path:'*',
      redirect:'/goods'
    }
  ]
})
