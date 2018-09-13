<template>
  <div id="addProfile">
    <h1> Add new workplace profile </h1>
    <form v-if="!submitted">
      <label>Name:</label>
      <input type="text" v-model.lazy="worker.name" required/>
      <label>Surname:</label>
      <input type="text" v-model.lazy="worker.surname"/>
      <label>Phone number:</label>
      <input type="text" v-model.lazy="worker.phonenumber"/>
      <label>Location:</label>
      <input type="text" v-model.lazy="worker.location"/>
      <label>Departament:</label>
      <select v-model="worker.departament">
        <option v-for="departament in departaments">{{ departament }}</option>
      </select>
      <label>Position:</label>
      <select v-model="worker.position">
        <option v-for="position in positions">{{ position }}</option>
      </select>
      <label>Type:</label>
      <select v-model="worker.type">
        <option v-for="type in types">{{ type }}</option>
      </select>

    </form>

    <button v-on:click.prevent="submit">Add Profile</button>
    <div v-if="submitted">
      <h4>Profile added</h4>
    </div>
    <div id="preview">
      <h4>{{ worker.name }}</h4>
      <p>{{ worker.surname }}</p>
      <p>{{ worker.phonenumber }}</p>
      <p>{{ worker.location }}</p>
      <p>{{ worker.departament }}</p>
      <p>{{ worker.position }}</p>
      <p>{{ worker.type }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      worker: {
        type: '',
        name: '',
        surname: '',
        departament: '',
        phonenumber: '',
        location: ''
      },
      types: ['Junior', 'Senior', 'Expert'],
      departaments: ['Finance', 'Marketing', 'Sales'],
      positions: ['Coffee guy', 'Manager', 'Associate'],
      submitted: false
    }
  },
  methods: {
      submit: function(){
        this.$http.post('firebase link', {
          title: this.worker.title,
          name: this.worker.name,
          surname: this.worker.surname,
          departament: this.worker.departament,
          phonenumber: this.worker.phonenumber,
          location: this.worker.location
        }).then(function(data){
          console.log(data)
          this.submitted = true
        })
      }
    }

  }
</script>

<style scoped>
#addProfile{
  margin: 10px auto;
  max-width: 400px;
}
label {
  display: block;
  margin: 10px 0 10px;
}
input[type=text], textarea {
  width: 50%;
}
button {
  margin: 10px 0 0 0;
  width: 100%;
}
p {
  word-break: break-all;
}


</style>
