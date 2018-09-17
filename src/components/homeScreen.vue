<template>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-6 is-offset-3">
        <h1 class="title is-size-1">
              Go manage!
        </h1>
        <h2 class="subtitle">
              Application which creates ID cards, generates barcode and stores them in a database.
        </h2>
        <div class="box">
          <div class="field">
            <h2 class="subtitle"> Test it yourself!</h2>
            <div class="columns">
              <div class="column">
                <router-link class="button is-info is-fullwidth" to="/add">Add profile</router-link>
              </div>
              <div class="column">
                <router-link class="button is-danger is-fullwidth" to="/list">View Profiles</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

</section>
</template>


<script>
export default {


}
</script>

<style scoped>



</style>
