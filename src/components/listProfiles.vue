<template>
  <div id="listProfiles">
  <h1> Profiles </h1>
  <div v-for="profile in profiles" class="profile">
    <h4> {{profile.name}} </h4>
    <p> {{profile.surname}} </p>
  </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      profiles: []
    }
  },
  methods: {

  },
  created() {
    this.$http.get('firebase link').then(function(data){
      this.profiles = data.body.slice(0,5)
    })
    }
  }
</script>

<style scoped>



</style>
