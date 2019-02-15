import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(Notifications)

Vue.filter('niceDate', function (date) {
  if (!date) return ''
  return (date.getMonth() + 1) +"/" + date.getDate() + "/" + date.getFullYear()
})

Vue.filter('dateValue', function (date) {
  if (!date) return ''
  return date.getFullYear() +"-" + (date.getMonth() + 1) + "-" + date.getDate()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
