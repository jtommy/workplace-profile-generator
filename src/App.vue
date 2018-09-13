<template>
  <div>
    <!--<add-profile/>-->
    <list-profiles/>
  </div>
</template>

<script>
import addProfile from './components/addProfile.vue'
import listProfiles from './components/listProfiles.vue'
export default {
  components: {
    'add-profile':addProfile,
    'list-profiles': listProfiles,
  },
  data () {
    return {

    }
  },
  methods: {

    }

  }
</script>

<style>

</style>
