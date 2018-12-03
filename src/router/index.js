import Vue from 'vue'
import Router from 'vue-router'
import house from '@/components/house'
import divorce from '@/components/divorce'
import contract from '@/components/contract'
import debt from '@/components/debt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'contract',
      component: contract
    },
    {
      path: '/fangchan',
      name: 'house',
      component: house
    },
    {
      path: '/lihun',
      name: 'divorce',
      component: divorce
    },
    {
      path: '/zhaiwu',
      name: 'debt',
      component: debt
    }
  ]
})
