<template>
<div class="container">
  <div class="section">

    <div class="card">
      <div class="card-header">
        <p class="card-header-title">Departaments</p>
      </div>
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <div v-if="(Departaments.length == 0)">
              <h3>Looks like there is nothing here, feel free to add something...</h3>
            </div>
            <div class="field is-grouped is-grouped-multiline">
              <div v-for="departament in Departaments" class="control">
                <div class="tags has-addons">
                  <a class="tag is-link is-medium">{{departament.title}}</a>
                  <a class="tag is-delete is-medium" @click="deleteDepartament(departament.title)"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <a v-if="!newDep" class="button is-success is-fullwidth" @click="openNewDepartament">Add new departament</a>
            <div v-if="newDep">
              <div class="columns">
                <div class="column">
                  <form>
                    <div class="field">
                      <div class="control">
                        <input v-model='newDepTitle' class="input" type="text" placeholder="Name" />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="column">
                  <button v-on:click.prevent="submitDep" class="button is-success">Submit</button>
                  <button class="button is-text" v-on:click="newDep = ''">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">Positions</p>
      </div>
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <div v-if="(Positions.length == 0)">
              <h3>Looks like there is nothing here, feel free to add something...</h3>
            </div>
            <div class="field is-grouped is-grouped-multiline">
              <div v-for="position in Positions" class="control">
                <div class="tags has-addons">
                  <a class="tag is-link is-medium">{{position.title}}</a>
                  <a class="tag is-delete is-medium" @click="deletePosition(position.title)"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <a v-if="!newPos" class="button is-success is-fullwidth" @click="openNewPosition">Add new position</a>
            <div v-if="newPos">
              <div class="columns">
                <div class="column">
                  <form>
                    <div class="field">
                      <div class="control">
                        <input v-model='newPosTitle' class="input" type="text" placeholder="Name" />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="column">
                  <button v-on:click.prevent="submitPos" class="button is-success">Submit</button>
                  <button class="button is-text" v-on:click="newPos = ''">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      Positions: [],
      Departaments: [],
      newPos: false,
      newDep: false,
      newPosTitle: '',
      newDepTitle: '',
    }
  },
  methods: {
    deletePosition(title) {
      db
        .collection("Positions")
        .where("title", "==", title)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
          })
        })
      let remov = this.Positions.map(function(item) {
        return item.title
      }).indexOf(title)
      this.Positions.splice(remov, 1)

    },
    deleteDepartament(title) {
      db
        .collection("Departaments")
        .where("title", "==", title)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
            let remov = this.Departaments.map(function(item) {
              return item.title
            }).indexOf(title)
            this.Departaments.splice(remov, 1)
          })
        })

    },
    openNewPosition() {
      this.newPos = true
    },
    openNewDepartament() {
      this.newDep = true
    },
    submitPos() {
      let position = this.Positions.map(function(item) {
        return item.title
      }).indexOf(this.newPosTitle)
      if (position > -1) {
        // console.log('Item exists' + position)
      } else if (!this.newPosTitle) {
        //  console.log('Empty')
      } else {
        db.collection('Positions').add({
          title: this.newPosTitle,
        }).then(docRef =>
          this.newPos = false,
          this.Positions.push({
            id: '',
            title: this.newPosTitle
          }),
          this.newPosTitle = ''
        )
      }
    },
    submitDep() {
      let position = this.Departaments.map(function(item) {
        return item.title
      }).indexOf(this.newDepTitle)
      if (position > -1) {
        //console.log('Item exists' + position)
      } else if (!this.newDepTitle) {
        //console.log('Empty')
      } else {
        db.collection('Departaments').add({
          title: this.newDepTitle,
        }).then(docRef =>
          this.newDep = false,
          this.Departaments.push({
            id: '',
            title: this.newDepTitle
          }),
          this.newDepTitle = ''
        )
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
          this.Positions.push(data)
        })
      }),
      db.collection('Departaments').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'title': doc.data().title,
          }
          this.Departaments.push(data)
        })
      })
  }
}
</script>

<style scoped>



</style>
