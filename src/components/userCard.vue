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
      <figure class="image is-128x128 center-image">
        <img v-bind:src="getImage">
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
      <div class="barcode">
        <barcode text=" " lineColor="white" class="barcode" width="2" height="50" background="none" v-bind:value="worker.departament">
      </barcode>
      </div>
    </article>
    <article v-if="!front" @click="flipCard" class="tile is-child notification is-info">
      <p class="title">GoMxanage!</p>
      <p class="subtitle">subtitle</p>
    </article>

  </div>
</div>
</template>

<script>
import VueBarcode from 'vue-barcode'
export default {
  components: {
    'barcode': VueBarcode
  },
  props: {
    profileImg: 'null',
    worker: {
      type: Object
    }
  },
  data() {
    return {
      front: true,
    }
  },
  methods: {
    flipCard: function() {
      this.front = !this.front
    }
  },
  computed: {
    getImage: function() {
      return 'https://ui-avatars.com/api/?size=128&rounded=true&name='+ this.worker.name
    }
  }
}
</script>


<style scoped>
.center-image,
.barcode {
  margin-left: auto;
  margin-right: auto;
}

.card {
  background-image: url();
}

</style>
