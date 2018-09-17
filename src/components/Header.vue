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
  <div v-if="!hideLinks" id="nav" class="navbar-menu" v-bind:class="{'is-active': isActive}">
    <div class="navbar-end" @click="isActive=false">
      <router-link to="/" exact-active-class="is-active" class="navbar-item">Home</router-link>
      <router-link to="/list" exact-active-class="is-active" class="navbar-item">Profiles</router-link>
      <router-link to="/add" exact-active-class="is-active" class="navbar-item">Add profile</router-link>
      <router-link to="/settings" exact-active-class="is-active" class="navbar-item">Settings</router-link>
      <router-link to="/login" exact-active-class="is-active" v-on:click.native="logout" class="navbar-item">Log out</router-link>
    </div>
  </div>
</nav>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    expandMenu: function() {
      this.isActive = !this.isActive
    },
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/login");
        });
    },
  },
  computed: {
    hideLinks: function() {
      return this.$route.path == '/login' || this.$route.path == '/signup'
    }
  },
}
</script>

<style scoped>
#logo {}
</style>
