import addProfile from './components/addProfile.vue'
import listProfiles from './components/listProfiles.vue'
import settings from './components/Settings.vue'
export default [
  {
    path: '/', component: listProfiles
  },
  {
    path: '/add', component: addProfile
  },
  {
    path: '/settings', component: settings
  }
]
