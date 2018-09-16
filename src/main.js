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
  faUser, faPhone, faGlobe
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import axios from 'axios'


import firebase from 'firebase'
import db from './components//firebaseInit'
import vSelect from 'vue-select'

import userCard from './components/userCard.vue'

Vue.use(Buefy)
Vue.use(VueResource)


library.add(faUser, faPhone, faGlobe)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-select', vSelect)


Vue.component('userCard', userCard)
Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: {
        App
      },
      router
    })
  }
})
