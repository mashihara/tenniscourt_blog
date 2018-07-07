import Vue from 'vue'
import Router from 'vue-router'
import PlaceList from '@/components/page/PlaceList'
import HelloWorld from '@/components/page/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlaceList',
      component: PlaceList
    }
    ,{
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
