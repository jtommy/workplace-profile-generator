<template>
  <div id="addProfile">
    <h1> Add new workplace profile </h1>
    <form>
      <label>Name:</label>
      <input type="text" v-model.lazy="worker.name" required/>
      <label>Surname:</label>
      <input type="text" v-model.lazy="worker.surname"/>
      <label>Phone number:</label>
      <input type="text" v-model.lazy="worker.phonenumber"/>
      <label>Departament:</label>
      <select v-model="worker.departament">
        <option v-for="departament in departaments">{{ departament }}</option>
      </select>
      <label>Type:</label>
      <select v-model="worker.type">
        <option v-for="type in types">{{ type }}</option>
      </select>

      <label>Temporary: </label>
      <input type="checkbox" v-model="temp" true-value="yes" false-value="no">

    </form>

    <button>Submit</button>
    <div id="preview">
      <h4>{{ worker.name }}</h4>
      <p>{{ worker.surname }}</p>
      <ul>
        <li v-for="cat in worker.category">{{ cat }}</li>
      </ul>
      <p> {{ worker.author }} </p>
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
        temp: ''
      },
      types: ['Jack', 'Green', 'Em'],
      departaments: ['Finance', 'Marketing', 'Sales']
    }
  },
  methods: {

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
