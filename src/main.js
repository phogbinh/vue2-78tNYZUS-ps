import Vue from 'vue'
import App from './App.vue'
import { extend } from 'vee-validate'
import { min } from 'vee-validate/dist/rules'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

extend('min', {
  ...min,
  message: 'The {_field_} field must be at least {length} character(s)'
}) // `extend' must be called here (refer to https://app.asana.com/0/1200919752168875/1200919752168879/f)

library.add(faMinusCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  'render': h => h(App),
}).$mount('#app')
