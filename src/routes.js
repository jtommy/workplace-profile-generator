import Router from 'vue-router'
import firebase from "firebase";
import VueRouter from 'vue-router'
import Vue from 'vue'
import addProfile from './components/addProfile.vue'
import listProfiles from './components/listProfiles.vue'
import settings from './components/Settings.vue'
import login from './components/Login.vue'
import signup from './components/Signup.vue'
import db from './components/firebaseInit'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/login',
      meta: {
        auth: false
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        auth: false
      }
    },
    {
      path: '/signup',
      component: signup,
      meta: {
        auth: false
      }
    },
    {
      path: '/',
      component:  listProfiles,
      meta: {
        auth: true
      }
    },
    {
      path: '/add',
      component: addProfile,
      meta: {
        auth: true
      }
    },
    {
      path: '/settings',
      component: settings,
      meta: {
        auth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(router)
  let user = firebase.auth().currentUser
  let auth = to.matched.some(record => record.meta.auth)
  if (auth && !user) next('/login')
  else if (!auth && user) next('/')
  else next()
})


export default router
