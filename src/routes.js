import addProfile from './components/addProfile.vue'
import listProfiles from './components/listProfiles.vue'
export default [
  {
    path: '/', component: listProfiles
  },
  {
    path: '/add', component: addProfile
  }
]
