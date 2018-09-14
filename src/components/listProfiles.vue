<template>
<div id="listProfiles" class="container is-fluid">
  <div class="notification">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Workers
          </h1>
        </div>
      </div>
    </section>
    <div class="container">
      <div v-for="profile in profiles" class="profile">
        <h4> {{profile.name}} </h4>
        <p> {{profile.surname}} </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import db from './firebaseInit'
export default {
  components: {

  },
  data() {
    return {
      profiles: []
    }
  },
  methods: {

  },
  created() {
    db.collection('workers').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'type': doc.data().type,
          'name': doc.data().name,
          'surname': doc.data().surname,
          'departament': doc.data().departament,
          'phonenumber': doc.data().phonenumber,
          'location': doc.data().location
        }
        this.profiles.push(data)
      })
    })
  }
}
</script>

<style scoped>



</style>
