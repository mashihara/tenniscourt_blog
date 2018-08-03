// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'

// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import colors from 'vuetify/es5/util/colors'

// Element-ui
// import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/ja'
// import 'element-ui/lib/theme-chalk/index.css'

// Bootstrap
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vee-Validate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

Vue.config.productionTip = false

// Vuetify
Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.lighten1, // #E53935
    secondary: colors.red.lighten1, // #FFCDD2
    accent: colors.grey.lighten5, // #3F51B5
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

// Element-ui
// Vue.use(ElementUI, {locale})

// Bootstrap
// Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
