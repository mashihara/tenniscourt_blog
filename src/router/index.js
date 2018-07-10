import Vue from 'vue'
import Router from 'vue-router'
import PlaceList from '@/components/pages/PlaceList'
import PlaceEdit from '@/components/pages/PlaceEdit'
import CourtEdit from '@/components/pages/CourtEdit'
import HelloWorld from '@/components/pages/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlaceList',
      component: PlaceList
    },
    {
      path: '/PlaceEdit',
      name: 'PlaceEdit',
      component: PlaceEdit
    },
    {
      path: '/CourtEdit',
      name: 'CourtEdit',
      component: CourtEdit
    }


    ,{
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
