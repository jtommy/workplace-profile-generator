<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item" id="logo">GoManage!</router-link>
        <span v-bind:class="{'is-active': isActive}" @click="expandMenu" class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
    <div id="nav" class="navbar-menu" v-bind:class="{'is-active': isActive}">
      <div class="navbar-end" @click="isActive=false">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/add" class="navbar-item">Profiles</router-link>
        <router-link to="/settings" class="navbar-item">Settings</router-link>
        <router-link to="/" v-on:click.native="logout" class="navbar-item">Log out</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      isActive: false,
    }
  },
  methods: {
    expandMenu: function(){
      this.isActive = !this.isActive
    },
   logout: function() {
     firebase
       .auth()
       .signOut()
       .then(() => {
         console.log('log')
         this.$router.replace("/login");
       });
   }
  },

}
</script>

<style scoped>

#logo{

}
</style>
