import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import firebase from 'firebase'
import db from './components//firebaseInit'
library.add(faCoffee)


Vue.use(Buefy)
Vue.use(VueResource)


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App }, router
    })
  }
})
