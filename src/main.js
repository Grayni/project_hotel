/* eslint-disable */
import Vue from 'vue'

// router
import VueRouter from 'vue-router'
import router from './router'

// components, plugins
import IndexTemplate from './IndexTemplate'

// import sal from 'sal.js'
// Object.defineProperty(Vue.prototype, '$sal', { value: sal })

// gsap
import { TweenMax, TimelineMax, Bounce, Back } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'
import 'debug.addIndicators'

import focus from './components/directives/focus'

// Vue.directive('scroll-act', scrollAct)
Vue.directive('focus', focus)

Vue.config.productionTip = false

var vm1 = new Vue({
  el: '#main-frame',
  router,
  render: h => h(IndexTemplate)
})