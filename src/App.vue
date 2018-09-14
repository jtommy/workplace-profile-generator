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
export default {
  components: {
    'vue-header': header,
    'add-profile': addProfile,
    'list-profiles': listProfiles,
    'settings' : settings
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
