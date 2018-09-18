import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import axios from 'axios'
import Buefy from 'buefy'
import vSelect from 'vue-select'
import firebase from 'firebase'
import 'buefy/dist/buefy.css'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUser, faPhone, faGlobe, faBinoculars, faBriefcase
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'




//My Components
import router from './routes'
import db from './components//firebaseInit'

//My Reusable components
import userCard from './components/userCard.vue'


Vue.use(Buefy)
Vue.use(VueResource)

library.add(faUser, faPhone, faGlobe, faBinoculars, faBriefcase)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('v-select', vSelect)

Vue.component('userCard', userCard)


Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      render: h =>h(App)
    })
  }
})
