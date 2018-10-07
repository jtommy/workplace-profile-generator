<template>
<section class="section">
  <div id="addProfile" class="container is-fullhd">
    <div class="notification">
      <div class="columns">
        <div class="column">
          <div class="has-text-centered">
            <h1 class="title">
                Add profile
              </h1>
          </div>
          <form>
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
                <v-select class="vselect" label="name" v-model="worker.country" :options="countries"></v-select>
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="globe" />
                </span>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Rank</label>
                  <div class="control has-icons-left">
                    <div class="select is-fullwidth">
                      <select v-model="worker.type">
                  <option v-for="type in types">{{ type }}</option>
                </select>
                      <span class="icon is-small is-left">
                  <font-awesome-icon icon="binoculars" />
                </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">Departament</label>
                  <div class="control has-icons-left">
                    <div class="select is-fullwidth">
                      <select v-model="worker.departament">
                  <option v-for="departament in departaments">{{ departament.title }}</option>
                </select>
                      <span class="icon is-small is-left">
                  <font-awesome-icon icon="briefcase" />
                </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">Position</label>
                  <div class="control has-icons-left">
                    <div class="select is-fullwidth">
                      <select v-model="worker.position">
                  <option v-for="position in positions">{{ position.title }}</option>
                </select>
                    </div>
                    <span class="icon is-small is-left">
                      <font-awesome-icon icon="user"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="column is-4" id="preview">
          <div class="has-text-centered">
            <h1 class="title">
                Profile preview
              </h1>
          </div>
          <userCard v-bind:active=true v-bind:worker="worker" />
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
        id: Math.floor((Math.random() * 10) + 1),
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
      selected: null,
      loadingFullScreen: false,
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
          id: Math.floor((Math.random() * 1000) + 1),
          type: this.worker.type,
          name: this.worker.name,
          departament: this.worker.departament,
          phone: this.worker.phonenumber,
          //          country: this.worker.country,
          position: this.worker.position
        }).then(docRef =>
          this.submitted = true)
        this.$toast.open({
          message: 'Successfully submitted!',
          type: 'is-success'
        })
        this.clearForm()
      } else {
        this.$toast.open({
          duration: 3500,
          message: this.errors[0],
          type: 'is-danger',
          queue: false
        })
      }
    },
    clearForm: function() {
      this.worker = {
        id: Math.floor((Math.random() * 10) + 1),
        type: null,
        name: null,
        departament: null,
        phonenumber: null,
        country: {
          'name': ''
        },
        position: null
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
  },
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
<style>
/*
Styles for vselect module
*/

.v-select,
.v-select.searchable .dropdown-toggle {
  background: #fff;
  width: 100%;
}

.v-select input[type=search],
.v-select input[type=search]:focus,
.v-select .selected-tag {
  padding-left: 2.25em
}

.v-select.open .dropdown-toggle {
  border-color: #5cb3fd;
}

.v-select .dropdown-toggle .clear {
  visibility: hidden;
}

/** Bulma style **/

.v-select .open-indicator:before {
  border-color: #3273dc;
}

.v-select .dropdown-toggle:focus {
  border-color: #3273dc;
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

.v-select .spinner {
  border-left-color: #3273dc;
}

.v-select .dropdown-toggle .clear {
  color: #3273dc;
}

.v-select.open .dropdown-toggle {
  border-color: #3273dc;
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

</style>
