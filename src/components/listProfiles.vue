<template>
<div id="listworkers" class="container is-fluid">
  <div class="notification">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="">
          <h1 class="title">
            PROFILES
          </h1>
        </div>
      </div>
    </section>
    <div class="columns is-multiline" v-if="fetched">
      <userCard class="column" v-for="worker in workers" v-bind:worker="worker" />
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
      worker: {
        id: '',
        type: '',
        name: '',
        departament: '',
        phonenumber: '',
        country: {
          'name': ''
        },
        position: ''
      },
      workers: [],
      fetched: false
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
          'phonenumber': doc.data().phonenumber
        }
        this.worker = data
        this.workers.push(this.worker)
        console.log(this.worker)
      })
      this.fetched = true

    })
  }
}
</script>

<style scoped>



</style>
