import Vue from 'vue'
import Router from 'vue-router'
import PlaceList from '@/components/pages/PlaceList'
import PlaceEdit from '@/components/pages/PlaceEdit'
import CourtEdit from '@/components/pages/CourtEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlaceList',
      component: PlaceList
    },
    {
      path: '/tennis-place-edit',
      name: 'PlaceEdit',
      component: PlaceEdit
    },
    {
      path: '/tennis-court-edit',
      name: 'CourtEdit',
      component: CourtEdit
    }
  ]
})
