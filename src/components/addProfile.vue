<template>
<section class="section">
  <div v-if="submitted">
    <h4>Profile added</h4>
  </div>
  <div id="addProfile" class="container is-fullhd">
    <div class="notification">
      <div class="columns">
        <div class="column">
          <div class="has-text-centered">
            <h1 class="title">
                Add profile
              </h1>
          </div>
          <form v-if="!submitted">
            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left ">
                <input ref="name" class="input" type="text" placeholder="Name" v-model.lazy="worker.name" />
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="user" />
   </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Phone number</label>
              <div class="control has-icons-left">
                <input class="input" type="text" placeholder="Phone number" v-model.lazy="worker.phonenumber" />
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="phone" />
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Country</label>
              <div class="control has-icons-left">
                <v-select class="" label="name" v-model="worker.country" :options="countries"></v-select>
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="globe" />
                </span>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Rank</label>
                  <div class="control">
                    <div class="select">
                      <select v-model="worker.type">
                  <option v-for="type in types">{{ type }}</option>
                </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">Departament</label>
                  <div class="control">
                    <div class="select">
                      <select v-model="worker.departament">
                  <option v-for="departament in departaments">{{ departament.title }}</option>
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
                      <select v-model="worker.position">
                  <option v-for="position in positions">{{ position.title }}</option>
                </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="column" id="preview">
          <div class="has-text-centered">
            <h1 class="title">
                Profile preview
              </h1>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title" v-if="!worker.name">John Doe</p>
              <p class="title">{{worker.name}}</p>
              </p>
              <p class="subtitle">
                {{ worker.type }} {{ worker.departament }} {{ worker.position }}
              </p>
              <p class="subtitle">
                {{ worker.phonenumber }}
              </p>
              <p class="subtitle">
                {{ worker.country.name }}
              </p>
              <figure class="image is-5by4">
                <img src="https://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div>
        </div>
      </div>
      <div class="control">
        <button v-on:click.prevent="submit" class="button is-fullwidth is-link">Submit</button>
      </div>
    </div>
  </div>
  </div>
</section>
</template>

<script>
import db from './firebaseInit'
import axios from 'axios'
import vSelect from 'vue-select'

export default {
  data() {
    return {
      worker: {
        type: null,
        name: null,
        departament: null,
        phonenumber: null,
        country: {
          'name': ''
        },
        position: null
      },
      types: ['Junior', 'Senior'],
      departaments: [],
      positions: [],
      submitted: false,
      errors: [],
      countries: [],
      selected: null
    }
  },
  methods: {
    checkSubmit: function(e) {
      this.errors = []

      if (this.worker.name && this.worker.departament && this.worker.position) {
        return true
      }

      if (!this.worker.name) {
        this.$refs.name.focus()
        this.errors.push('Name field is empty')
      }
      if (!(this.worker.departament && this.worker.position)) {
        this.errors.push('Departament and position empty')
      }
      return false
      e.preventDefault();

    },
    submit: function() {
      if (this.checkSubmit()) {
        db.collection('workers').add({
          type: this.worker.type,
          name: this.worker.name,
          departament: this.worker.departament,
          phone: this.worker.phonenumber,
          country: this.worker.country,
          position: this.worker.position
        }).then(docRef =>
          this.submitted = true)
      }
    }
  },
  created() {
    db.collection('Positions').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'title': doc.data().title,
        }
        this.positions.push(data)
      })
    })
    db.collection('Departaments').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'title': doc.data().title,
        }
        this.departaments.push(data)
      })
    })
  },
  mounted() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => (this.countries = response.data))
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

.v-select {
  background: #fff;
}

.v-select.open .dropdown-toggle {
  border-color: #5cb3fd;
}
</style>
