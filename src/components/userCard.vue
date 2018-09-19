<template>
<div class="usercard">
  <div class="tile is-parent has-text-centered">
    <b-tooltip  class="flipper" :active="isActive" type="is-black" label="Flip me!" position="is-top" always>
    </b-tooltip>
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
      <p class="title">Back side!</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
    },
    active: {
      type: Boolean
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
      //this.active = false
    }
  },
  computed: {
    getImage: function() {
      return 'https://ui-avatars.com/api/?size=128&rounded=true&name='+ this.worker.name
    },
    isActive: function() {
      return this.active
    },
  }
}
</script>


<style scoped>
.flipper {
  float: left
}
.center-image,
.barcode {
  margin-left: auto;
  margin-right: auto;
}

.card {
  background-image: url();
}
.tile.is-parent{
  min-height: 550px;
}

</style>
