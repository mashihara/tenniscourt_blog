import Vue from 'vue'
import Router from 'vue-router'
import PlaceList from '@/components/pages/PlaceList'
import PlaceEdit from '@/components/pages/PlaceEdit'
import CourtTypeEdit from '@/components/pages/CourtTypeEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlaceList',
      component: PlaceList
    },
    {
      path: '/place/:display_id/edit',
      name: 'PlaceEdit',
      component: PlaceEdit
    },
    {
      path: '/place/:display_id/court/:court_type_id',
      name: 'CourtTypeEdit',
      component: CourtTypeEdit
    }
  ]
})
