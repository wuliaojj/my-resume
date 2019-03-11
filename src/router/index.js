import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import MasteringSkills from '../views/MasteringSkills.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/masteringSkills',
      name: 'MasteringSkills',
      component: MasteringSkills
    }
  ]
})
