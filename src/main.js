import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

import VueConfetti from 'vue-confetti'

import {
  store
} from './store'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: colors.cyan.lighten1, // #E53935
    secondary: colors.green.lighten2, // #FFCDD2
    accent: colors.grey.lighten3
  }
})

Vue.use(VueConfetti)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
