<template>
<section class="section">
  <div v-if="submitted">
    <h4>Profile added</h4>
  </div>
  <div id="addProfile" class="container is-fluid">
    <div class="columns">
      <div class="column">
        <div class="container  has-text-centered">
              <h1 class="title">
                Add new worker
              </h1>
        </div>
        <form v-if="!submitted">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name" v-model.lazy="worker.name" />
            </div>
          </div>
          <div class="field">
            <label class="label">Surname</label>
            <div class="control">
              <input class="input" type="text" placeholder="Surname" v-model.lazy="worker.surname" />
            </div>
          </div>
          <div class="field">
            <label class="label">Phone number</label>
            <div class="control">
              <input class="input" type="text" placeholder="Phone number" v-model.lazy="worker.phonenumber" />
            </div>
          </div>
          <div class="field">
            <label class="label">Location</label>
            <div class="control">
              <input class="input" type="text" placeholder="Location" v-model.lazy="worker.location" required/>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Departament</label>
                <div class="control">
                  <div class="select">
                    <select>
                  <option selected="true" disabled="disabled">Departament</option>
                  <option v-for="departament in departaments">{{ departament }}</option>
                </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Rank</label>
                <div class="control">
                  <div class="select">
                    <select>
                  <option selected="true" disabled="disabled">Rank</option>
                  <option v-for="type in types">{{ type }}</option>
                </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Position</label>
                <div class="control">
                  <div class="select">
                    <select>
                  <option selected="true" disabled="disabled">Position</option>
                  <option v-for="position in positions">{{ position }}</option>
                </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
          <div class="control">
            <button v-on:click.prevent="submit" class="button is-fullwidth is-link">Submit</button>
          </div>
      </div>
      <div class="column" id="preview">
        <h4>{{ worker.name }}</h4>
        <p>{{ worker.surname }}</p>
        <p>{{ worker.phonenumber }}</p>
        <p>{{ worker.location }}</p>
        <p>{{ worker.departament }}</p>
        <p>{{ worker.position }}</p>
        <p>{{ worker.type }}</p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import db from './firebaseInit'
export default {
  components: {

  },
  data() {
    return {
      worker: {
        type: null,
        name: null,
        surname: null,
        departament: null,
        phonenumber: null,
        location: null,
        position: null
      },
      types: ['Junior', 'Senior', 'Expert'],
      departaments: ['Finance', 'Marketing', 'Sales'],
      positions: ['Coffee guy', 'Manager', 'Associate'],
      submitted: false
    }
  },
  methods: {
    submit: function() {
      db.collection('workers').add({
        type: this.worker.type,
        name: this.worker.name,
        surname: this.worker.surname,
        departament: this.worker.departament,
        phone: this.worker.phonenumber,
        location: this.worker.location,
        position: this.worker.position
      }).then(docRef =>
        this.submitted = true)


    }
  }
}
</script>

<style scoped>
#addProfile {
  margin: 10px auto;

}
select option:disabled {
    color: gray;
}
button {
  margin: 10px 0 0 0;
}
</style>
