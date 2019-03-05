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

// yandex map


const options = { // you may define your apiKey, lang and version or skip this.
  apiKey: '447e33e3-ae1b-4b9f-af57-ab467ccda698', // '' by default
  lang: 'ru_RU', // 'ru_RU' by default
  version: '2.1' // '2.1' by default
}

import focus from './components/directives/focus'

// Vue.directive('scroll-act', scrollAct)
Vue.directive('focus', focus)

Vue.config.productionTip = false

var vm1 = new Vue({
  el: '#main-frame',
  router,
  render: h => h(IndexTemplate)
})