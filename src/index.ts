import Vue from 'vue'
import Vuetify from 'vuetify'
import App from '~App.vue'
import router from '~router'
import store from '~store'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  iconfont: 'md'
})
import 'vuetify/dist/vuetify.min.css'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
