// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'

// router
import VueRouter from 'vue-router'
import router from './router'

// components, plugins
import IndexTemplate from './IndexTemplate'

import sal from 'sal.js'
Object.defineProperty(Vue.prototype, '$sal', { value: sal })


// directives

Vue.directive('focus', {
  inserted: (e) => e.focus()
})

Vue.config.productionTip = false

var vm1 = new Vue({
  el: '#main-frame',
  router,
  render: h => h(IndexTemplate)
})