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
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    expandMenu: function(){
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>

#logo{

}
</style>
