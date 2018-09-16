<template>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-6 is-offset-3">
        <h2 class="title">GoManage! Login</h2>
        <div>
          <div class="box">
            <div class="">
              <form>
                <div class="field">
                  <label class="label"> Test user with Admin privileges</label>
                  <div class="control">
                    <input v-model="email" class="input" type="text" disabled placeholder="Email">
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input v-model="pass" class="input" type="password" disabled placeholder="Password">
                  </div>
                </div>
                <div>
                  <button v-on:click.prevent="login" class="button is-info is-fullwidth"> Login </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p>
          Dont have an account yet?
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import db from "firebase";
export default {
  components: {

  },
  data() {
    return {
      email: "admin@admin.com",
      pass: "admin@admin.com"
    }
  },
  methods: {
    login() {
      db
        .auth()
        .signInWithEmailAndPassword(this.email, this.pass)
        .then(
          user => {
            this.$router.replace('/')
          },
          err => {
            console.log(err)
          }
        );
    }
  },
  created() {}
}
</script>


<style scoped>

</style>
