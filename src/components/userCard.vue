<template>
<div class="">
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
    }
  },
}
</script>


<style scoped>

</style>
