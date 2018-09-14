<template>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h2 class="title">GoManage! SignUp</h2>
        <div>
          <div class="box">
            <div class="">
              <form>
                <div class="field">
                  <div class="control">
                    <input v-model="email" class="input" type="text" placeholder="Email">
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input v-model="pass" class="input" type="password" placeholder="Password">
                  </div>
                </div>
                <div>
                  <button v-on:click.prevent="signup" class="button is-info is-fullwidth"> Sign Up! </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p>
          Already have an account?
          <router-link to="/login">Login</router-link>
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
      email: '',
      pass: ''
    }
  },
  methods: {
    signup() {
      db
        .auth()
        .createUserWithEmailAndPassword(this.email, this.pass)
        .then(
          user => {
         this.$router.replace('/login')
          },
          err => {
            console.log(err)
                        console.log(this.email)
          }
        );
    }
  },
created() {

}
}
</script>


<style scoped>

</style>
