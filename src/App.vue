<template>
<div >
  <vue-header/>
  <router-view></router-view>
</div>
</template>

<script>
import addProfile from './components/addProfile.vue'
import listProfiles from './components/listProfiles.vue'
import header from './components/Header.vue'
import settings from './components/Settings.vue'
import login from './components/Login.vue'
import signup from './components/Signup.vue'
import userCard from './components/userCard.vue'
export default {
  components: {
    'vue-header': header,
    'add-profile': addProfile,
    'list-profiles': listProfiles,
    'settings' : settings,
    'login' : login,
    'signup': signup,
    'userCard': userCard,
  },
  data() {
    return {

    }
  },
  methods: {

  }

}
</script>

<style scoped>

</style>
