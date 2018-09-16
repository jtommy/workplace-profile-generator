<template>
<div class="">
  <div class="tile is-parent has-text-centered">
    <article v-if="front" @click="flipCard" class="tile is-child notification is-info">
      <p class="title">GoManage!</p>
      <p class="subtitle">subtitle</p>
      </p>
      <p class="subtitle" v-if="!worker.phonenumber">
        +353 652 424 4242
      </p>
      <p class="subtitle">
        {{ worker.phonenumber }}
      </p>
      <p class="subtitle">
        {{ worker.country.name }}
      </p>
      <figure class="image is-128x128 center-image">
        <img src="https://bulma.io/images/placeholders/256x256.png">
      </figure>
    </br>
      <p class="title" v-if="!worker.name">John Doe</p>
      <p class="title">{{worker.name}}</p>
      <p class="subtitle" v-if="!(worker.type || worker.departament || worker.position)">
        Position
      </p>
      <p class="subtitle">
        {{ worker.type }} {{ worker.departament }} {{ worker.position }}
      </p>
      <figure class="image is-3by1 center-image">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
    </article>
    <article v-if="!front" @click="flipCard" class="tile is-child notification is-info">
      <p class="title">GoMxanage!</p>
      <p class="subtitle">subtitle</p>
    </article>

  </div>
</div>
</template>

<script>
export default {
  props: {
   worker: {
     type: Object
   }
 },
  data() {
    return {
      front: true
    }
  },
  methods: {
    flipCard: function() {
      this.front = !this.front
    }
  }
}
</script>


<style scoped>
.center-image {
  margin-left: auto;
  margin-right: auto;
}
.card {
  background-image: url();
}
</style>
