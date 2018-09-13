import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faCoffee)


Vue.use(Buefy)
Vue.use(VueResource)
Vue.use(VueRouter)


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
