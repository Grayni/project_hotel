// router
import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

// pages
import Home from '@/components/pages/Home'
import Contacts from '@/components/pages/Contacts'
import About from '@/components/pages/About'

// Services => category
import Rooms from '@/components/pages/services-category/Rooms'
import Sauna from '@/components/pages/services-category/Sauna'
import Caffee from '@/components/pages/services-category/Caffee'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/contacts', name: 'Contacts', component: Contacts },
    { path: '/rooms', name: 'Rooms', component: Rooms },
    { path: '/sauna', name: 'Sauna', component: Sauna },
    { path: '/caffee-restorant', name: 'Caffee', component: Caffee }
  ],
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // },
  mode: 'history'
})
